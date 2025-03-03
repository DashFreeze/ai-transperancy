'use server'

import { sql } from '@vercel/postgres';

export async function createUserId() {
  try {
    const result = await sql`
      INSERT INTO users (gruppe)
      VALUES (
        CASE 
          WHEN (SELECT COUNT(*) FROM users WHERE gruppe = 0) <= 
               LEAST((SELECT COUNT(*) FROM users WHERE gruppe = 1), (SELECT COUNT(*) FROM users WHERE gruppe = 2)) THEN 0
          WHEN (SELECT COUNT(*) FROM users WHERE gruppe = 1) <= 
               (SELECT COUNT(*) FROM users WHERE gruppe = 2) THEN 1
          ELSE 2
        END
      )
      RETURNING id, gruppe;
    `;

    return result.rows[0]; // { id: number, gruppe: number }
  } catch (error) {
    console.error("Error creating user ID:", error);
    throw error;
  }
}

export async function saveAnswer(userId: number, question: string, answer: string, credibility: number) {
  try {
    const result = await sql`
      INSERT INTO answers (user_id, question_text, answer_text, credibility_rating)
      VALUES (${userId}, ${question}, ${answer}, ${credibility})
      RETURNING *;
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Error saving answer:', error);
    throw error;
  }
}

export async function saveDemographics(userId: number, vorname: string, nachname: string, age: string, geschlecht: string, abschluss: string, beruf: string) {
  try {
    const result = await sql`
      UPDATE users
      SET vorname = ${vorname}, 
          nachname = ${nachname}, 
          age = ${age}, 
          geschlecht = ${geschlecht}, 
          abschluss = ${abschluss}, 
          beruf = ${beruf}
      WHERE id = ${userId}
      RETURNING *;
    `;

    return result.rows[0]; // Returns the updated user
  } catch (error) {
    console.error("Error saving demographics:", error);
    throw error;
  }
}


