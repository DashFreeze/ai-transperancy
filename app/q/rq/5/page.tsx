'use client';

import { useRouter } from 'next/navigation';

export default function QuestionOhneQuellen_1() {

    const router = useRouter();


    const messages = [
        { sender: 'user', text: 'Hilft fermentierte Milch bei Bluthochdruck?', sources: [] },
        {
            sender: 'chatgpt',
            text: 'Ja, fermentierte Milchprodukte wie Joghurt und Kefir können helfen, Bluthochdruck zu senken. Sie enthalten bioaktive Peptide, die während der Fermentation entstehen und eine blutdrucksenkende Wirkung haben können, indem sie das Enzym Angiotensin-Converting Enzyme (ACE) hemmen – ähnlich wie einige blutdrucksenkende Medikamente. Zudem können probiotische Bakterien in fermentierten Milchprodukten die Darmgesundheit unterstützen, was indirekt zur Regulierung des Blutdrucks beitragen kann. Studien legen nahe, dass ein regelmäßiger Konsum mit einer moderaten Blutdrucksenkung verbunden sein kann, besonders bei Menschen mit bereits erhöhtem Blutdruck.',
            sources: ['https://pubmed.ncbi.nlm.nih.gov/22513955/'],
        },
    ];


    const handleNextPage = () => {
        localStorage.setItem("question", "Hilft fermentierte Milch bei Bluthochdruck?");
        router.push('/a');
    };

    return (
        <div style={{
            width: '100%',          // Volle Breite des Viewports
            height: '100vh',         // Volle Höhe des Viewports
            textAlign: 'center',
            backgroundColor: '#708099', // Grauer Hintergrund
            color: '#fff',           // Weißer Text
            overflow: 'auto',
            padding: '15px',
            boxSizing: 'border-box'
        }}>
            {/* Überschrift */}
            <h1 style={{ fontSize: '20px', marginBottom: '20px', padding: '5px' }}>
                Ihr Vater hat Bluthochdruck und versucht, natürliche Methoden zur Verbesserung seiner Gesundheit zu finden. Sie haben mitbekommen, dass der Verzehr von fermentierten Milchprodukten ihm helfen könnte, seinen Blutdruck zu kontrollieren und stellen folgende Frage an ChatGPT:
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
