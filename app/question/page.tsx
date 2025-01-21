'use client';

import { useRouter } from 'next/navigation';

export default function Question() {
    const router = useRouter();

    const messages = [
        { sender: 'user', text: 'Nutzereingabe' },
        { sender: 'chatgpt', text: 'Chatgpt ausgabe' },
    ];

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            {/* Überschrift */}
            <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Sie sehen folgenden Chatausschnitt von ChatGPT:</h1>
            <div
                className="chat-container"
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                }}
            >
                <div className="chat-box" style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '20px' }}>
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
                                        backgroundColor: message.sender === 'user' ? '#daf8e3' : '#f1f1f1',
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
            {/* Button zum Wechseln auf die Antwortseite */}
            <button
                onClick={() => router.push('/answer')}
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
                Weiter zur Antwort
            </button>
        </div>
    );
}