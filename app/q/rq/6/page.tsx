'use client';

import { useRouter } from 'next/navigation';

export default function QuestionOhneQuellen_1() {

    const router = useRouter();

    const messages = [
        { sender: 'user', text: 'Ist ein lauwarmes Bad ein guter Weg um Fieber bei Kindern zu reduzieren?', sources: [] },
        {
            sender: 'chatgpt',
            text: 'Ja, ein lauwarmes Bad kann helfen, Fieber bei Kindern sanft zu senken, indem es die Körpertemperatur schrittweise reduziert. Wichtig ist, dass das Wasser nicht kalt, sondern etwa 1–2°C unter der Körpertemperatur liegt, um einen Kälteschock oder Schüttelfrost zu vermeiden. Das Bad sollte nur wenige Minuten dauern, und das Kind sollte danach gut abgetrocknet und warm gehalten werden. Es ist jedoch keine alleinige Maßnahme und sollte mit ausreichender Flüssigkeitszufuhr und gegebenenfalls fiebersenkenden Medikamenten kombiniert werden, wenn vom Arzt empfohlen.',
            sources: ['https://pubmed.ncbi.nlm.nih.gov/9115527/'],
        },
    ];


    const handleNextPage = () => {
        localStorage.setItem("question", "Ist ein lauwarmes Bad ein guter Weg um Fieber bei Kindern zu reduzieren?");
        router.push('/a');
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
            <h1 style={{ fontSize: '20px', marginBottom: '20px', padding: '10px' }}>
                Ihr Kind hat hohes Fieber und fühlt sich sehr unwohl. Sie haben gehört, ein lauwarmes Bad sei eine gute Methode, um das Fieber zu senken und den Zustand zu lindern. Um sicher zu gehen, stellen Sie ChatGPT folgende Frage:
            </h1>
            <div className="chat-container" style={{
                maxWidth: '1100px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: 16,
                backgroundColor: '#333', // Dunkler Hintergrund für den Chat-Container
            }}>
                <div className="chat-box" style={{
                    overflowY: 'auto',
                    maxHeight: '500px',
                    marginBottom: '20px',
                    padding: '10px',
                    borderRadius: '8px',
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
