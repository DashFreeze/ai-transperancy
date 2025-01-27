'use client'

import { useRouter } from 'next/navigation';

export default function QuestionOhneQuellen_1() {
    const router = useRouter();
    const messages = [
        { sender: 'user', text: 'Nutzereingabe' },
        { sender: 'chatgpt', text: 'Chatgpt ausgabe' },
    ];

    const handleNextPage = () => {
        router.push('/Answers/answers_ohnequellen/answer1');
    };

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '20px',
            backgroundColor: '#000', // Schwarzer Hintergrund
            color: '#fff',           // Weißer Text
            minHeight: '100vh',      // Volle Höhe für den Hintergrund
            padding: '20px'
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
                backgroundColor: '#333', // Dunkler Hintergrund für den Chat-Container
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
