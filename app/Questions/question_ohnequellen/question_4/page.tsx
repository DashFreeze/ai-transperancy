'use client';
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

export default function QuestionOhneQuellen_1() {

    useEffect(() => {
        setTimeout(() => {
            document.documentElement.style.overflow = 'hidden';
            document.documentElement.style.height = '100%';
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100%';
            document.body.style.margin = '0';
        }, 0);

        return () => {
            document.documentElement.style.overflow = '';
            document.documentElement.style.height = '';
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.margin = '';
        };
    }, []);


    const router = useRouter();

    const messages = [
        { sender: 'user', text: 'Hilft Selenium Krebs zu vermeiden?'},
        { sender: 'chatgpt', text: 'Selenpräparate werden als Mittel zur Krebsprävention angepriesen. Ein sehr nützliches Dokument würde die Wirksamkeit von Selen zur Krebsprävention untersuchen. Ein hilfreiches Dokument würde einem Nutzer helfen, eine Entscheidung über die Verwendung von Selen zur Krebsprävention zu treffen, indem es Informationen über empfohlene Methoden zur Krebsprävention, die medizinische Verwendung von Selen oder beides bereitstellt.\n' +
                '\n' +
                'Haftungsausschluss: Wir geben keine medizinische Beratung, und medizinische Entscheidungen sollten niemals auf der von uns gewählten Position basieren. Konsultieren Sie einen Arzt für professionelle Beratung.'},
    ];

    const handleNextPage = () => {
        localStorage.setItem("question", "1");
        router.push('/Answers/answers_ohnequellen/answer1');
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
            backgroundColor: '#708099', // Grauer Hintergrund
            color: '#fff',           // Weißer Text
            padding: '15px',
            boxSizing: 'border-box'
        }}>
            {/* Überschrift */}
            <h1 style={{ fontSize: '24px', marginBottom: '20px', padding: '5px' }}>
                Ihr Onkel hat eine familiäre Vorgeschichte von Krebs und fragt sich, ob die Einnahme von Selenpräparaten ihm helfen könnte, das Risiko zu verringern. Sie möchten wissen, ob dies eine sinnvolle Maßnahme für ihn sein könnte und stellen ChatGPT folgende Frage:
            </h1>
            <div className="chat-container" style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: 16,
                backgroundColor: '#333', // Dunkler Hintergrund für den Chat-Container
            }}>
                <div className="chat-box" style={{
                    maxHeight: '500px',
                    overflowY: 'hidden',
                    marginBottom: '20px',
                }}>
                    {messages.map((message, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <div
                                style={{
                                    textAlign: message.sender === 'user' ? 'right' : 'left',
                                    fontWeight: message.sender === 'user' ? 'bold' : 'normal',
                                }}
                            >
                                <span
                                    style={{
                                        backgroundColor: message.sender === 'user' ? '#1f7a5e' : '#555',
                                        color: '#fff', // Weißer Text auf dunklem Hintergrund
                                        padding: '8px',
                                        borderRadius: '12px',
                                        display: 'inline-block',
                                    }}
                                >
                                    {message.text}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={handleNextPage}
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
                Nächste Seite
            </button>
        </div>
    );
}
