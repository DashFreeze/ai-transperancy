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
        <div style={{
            position: 'fixed',       // Verhindert Scrollen
            top: 0,                  // Fixiert den Inhalt oben
            left: 0,                 // Fixiert den Inhalt links
            width: '100vw',          // Volle Breite des Viewports
            height: '100vh',         // Volle Höhe des Viewports
            overflow: 'hidden',      // Kein Scrollen innerhalb des Containers
            textAlign: 'center',
            marginTop: '0',          // Kein zusätzliches Margin
            backgroundColor: '#708090', // Grauer Hintergrund
            color: '#fff',           // Weißer Text
            padding: '20px',
        }}>
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
                                backgroundColor: credibilityRating === point ? '#4CAF50' : '#f1f1f1',
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
            <p>Begründen Sie ihre Glaubwürdigkeitseinschätzung</p>
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
                    color: 'black'
                }}
            />
            <br />
            <button
                type="submit"
                style={{
                    margin: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50', // Grüner Button
                    color: '#fff',              // Weißer Text
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                }}>
                Antwort absenden
            </button>
        </div>
    </div>
    );
}
