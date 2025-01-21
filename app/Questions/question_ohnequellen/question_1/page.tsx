'use client'

export default function Question() {
    const messages = [
        { sender: 'user', text: 'Nutzereingabe' },
        { sender: 'chatgpt', text: 'Chatgpt ausgabe' },
    ];

    return (
        <div style={{textAlign: 'center', marginTop: '20px'}}>
            {/* Überschrift */}
            <h1 style={{fontSize: '24px', marginBottom: '20px'}}>Sie sehen folgenden Chatausschnitt von ChatGPT zu Frage
                1:</h1>
            <div className="chat-container" style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px'
            }}>
                <div className="chat-box" style={{maxHeight: '300px', overflowY: 'auto', marginBottom: '20px'}}>
                    {messages.map((message, index) => (
                        <div key={index} style={{marginBottom: '10px'}}>
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
            <button type="submit" style={{padding: '10px 20px'}}>
                Absenden
            </button>
        </div>
    );
}
