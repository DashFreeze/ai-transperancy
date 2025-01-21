'use client';

import { useState } from 'react';

export default function Answer() {
    const [userAnswer, setUserAnswer] = useState('');
    const [credibilityRating, setCredibilityRating] = useState<number | null>(null);

    const handleSubmit = () => {
        if (credibilityRating === null) {
            alert('Bitte bewerten Sie die Glaubwürdigkeit.');
            return;
        }
        console.log('User Antwort:', userAnswer);
        console.log('Glaubwürdigkeit:', credibilityRating);
        alert('Vielen Dank für Ihre Antwort!');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Antwort und Bewertung</h1>
            <p>Wie glaubwürdig fanden Sie die Antwort?</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <span style={{ marginRight: '10px' }}>Unglaubwürdig</span>
                <div style={{ display: 'flex' }}>
                    {[1, 2, 3, 4, 5, 6, 7].map((point) => (
                        <button
                            key={point}
                            onClick={() => setCredibilityRating(point)}
                            style={{
                                margin: '0 5px',
                                padding: '10px 15px',
                                fontSize: '16px',
                                backgroundColor: credibilityRating === point ? '#0070f3' : '#f1f1f1',
                                color: credibilityRating === point ? '#fff' : '#000',
                                border: '1px solid #ccc',
                                borderRadius: '50%',
                                cursor: 'pointer',
                            }}
                        >
                            {point}
                        </button>
                    ))}
                </div>
                <span style={{ marginLeft: '10px' }}>Sehr glaubwürdig</span>
            </div>
            <p>Was ist ihre Meinung zu der von ChatGPT generierten Antwort</p>
            <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Schreiben Sie Ihre Antwort hier..."
                style={{
                    width: '80%',
                    height: '150px',
                    marginTop: '10px',
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                }}
            />
            <br />
            <button
                onClick={handleSubmit}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#0070f3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                }}
            >
                Antwort absenden
            </button>
        </div>
    );
}
