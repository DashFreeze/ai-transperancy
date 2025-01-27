'use client';
import { useEffect } from 'react';

export default function QuestionOhneQuellen_1() {
    useEffect(() => {
        // Scrollen vollständig deaktivieren
        document.documentElement.style.overflow = 'hidden'; // Für das <html>-Element
        document.documentElement.style.height = '100%';
        document.body.style.overflow = 'hidden'; // Für das <body>-Element
        document.body.style.height = '100%';
        document.body.style.margin = '0';

        return () => {
            // Zurücksetzen der Änderungen
            document.documentElement.style.overflow = '';
            document.documentElement.style.height = '';
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.margin = '';
        };
    }, []);

    const messages = [
        { sender: 'user', text: 'Nutzereingabe', sources: [] },
        {
            sender: 'chatgpt',
            text: 'ChatGPT Ausgabe',
            sources: ['Quelle 1: https://example.com', 'Quelle 2: https://another-example.com'],
        },
    ];

    return (
        <div style={{
            position: 'fixed',       // Verhindert Scrollen
            top: 0,                  // Fixiert den Inhalt oben
            left: 0,                 // Fixiert den Inhalt links
            width: '100vw',          // Volle Breite des Viewports
            height: '100vh',         // Volle Höhe des Viewports
            overflow: 'hidden',      // Kein Scrollen innerhalb des Containers
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#000',
            padding: '20px',
        }}>
            {/* Überschrift */}
            <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
                Sie sehen folgenden Chatausschnitt von ChatGPT zu Frage 1:
            </h1>
            <div className="chat-container" style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#333',
            }}>
                <div className="chat-box" style={{
                    maxHeight: '300px',
                    overflowY: 'auto',
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
                                        color: '#fff',
                                        padding: '8px',
                                        borderRadius: '12px',
                                        display: 'inline-block',
                                    }}
                                >
                                    {message.text}
                                </span>
                            </div>
                            {/* Quellen unter der Nachricht anzeigen */}
                            {message.sender === 'chatgpt' && message.sources && message.sources.length > 0 && (
                                <div style={{
                                    marginTop: '5px',
                                    textAlign: 'left',
                                    fontSize: '14px',
                                    color: '#bbb',
                                }}>
                                    <p>Quellen:</p>
                                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                        {message.sources.map((source, sourceIndex) => (
                                            <li key={sourceIndex}>{source}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <button type="submit" style={{
                margin: '20px',
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
            }}>
                Nächste Seite
            </button>
        </div>
    );
}
