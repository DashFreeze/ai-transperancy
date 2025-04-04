'use client';

import { saveAnswer } from '@/app/lib/data';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Answer() {
    const router = useRouter();
    const [userAnswer, setUserAnswer] = useState('');
    const [credibilityRating, setCredibilityRating] = useState<number | null>(null);

    const handleSubmit = () => {
        if (credibilityRating === null) {
            alert('Bitte bewerten Sie die Glaubwürdigkeit.');
            return;
        }
        const userIdStr = localStorage.getItem("userId");
        const question = localStorage.getItem("question");
        const userGroup = parseInt(localStorage.getItem("userGroup") || '0');
        if (!userIdStr || !question) {
            alert('User ID oder Frage nicht gefunden.');
            return;
        }
        saveAnswer(parseInt(userIdStr), question, userAnswer, credibilityRating);
        localStorage.removeItem("question");
        const list = JSON.parse(localStorage.getItem("list") || "[]");
        localStorage.removeItem("list");
        const randomIndex = Math.floor(Math.random() * list.length);
        const randomItem = list[randomIndex];
        
        if (list.length === 0) {
            router.push('/DD');
            return;
        }

        list.splice(randomIndex, 1);

        if (userGroup === 0) {
            localStorage.setItem("list", JSON.stringify(list));
            router.push('/q/oq/' + randomItem);
        } else if (userGroup === 1) {
            localStorage.setItem("list", JSON.stringify(list));
            router.push('/q/rq/' + randomItem);
        } else if (userGroup === 2) {
            localStorage.setItem("list", JSON.stringify(list));
            router.push('/q/fq/' + randomItem);
        }
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
                    onClick={handleSubmit}
                    style={{
                        margin: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50', // Grüner Button
                        color: '#fff',              // Weißer Text
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                    }}>
                    Nächste Seite
                </button>
            </div>
        </div>
    );
}
