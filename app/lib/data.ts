'use server'

import { sql } from '@vercel/postgres';

export async function createTables() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        vorname VARCHAR(255),
        nachname VARCHAR(255),
        age INTEGER,
        geschlecht VARCHAR(50),
        abschluss VARCHAR(255),
        beruf VARCHAR(255),
        gruppe INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS answers (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        question_text TEXT,
        answer_text TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
    throw error;
  }
}

export async function uploadUser(userData: {
  vorname: string,
  nachname: string,
  age: number,
  geschlecht: string,
  abschluss: string,
  beruf: string
}) {
  try {
    const result = await sql`
      INSERT INTO users (vorname, nachname, age, geschlecht, abschluss, beruf, gruppe)
      VALUES (
        ${userData.vorname}, 
        ${userData.nachname}, 
        ${userData.age}, 
        ${userData.geschlecht}, 
        ${userData.abschluss}, 
        ${userData.beruf},
        CASE 
          WHEN (SELECT COUNT(*) FROM users WHERE gruppe = 1) <= (SELECT COUNT(*) FROM users WHERE gruppe = 2) 
          THEN 1 
          ELSE 2 
        END
      )
      RETURNING *;
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error inserting user:', error);
    throw error;
  }
}

export async function saveAnswer(userId: number, question: string, answer: string) {
  try {
    const result = await sql`
      INSERT INTO answers (user_id, question_text, answer_text)
      VALUES (${userId}, ${question}, ${answer})
      RETURNING *;
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error saving answer:', error);
    throw error;
  }
}
