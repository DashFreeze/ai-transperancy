'use client';

import { useRouter } from 'next/navigation';

export default function QuestionOhneQuellen_1() {

    const router = useRouter();


    const messages = [
        { sender: 'user', text: 'Hilft Selenium Krebs zu vermeiden?', sources: [] },
        {
            sender: 'chatgpt',
            text: 'Es gibt Hinweise darauf, dass Selen eine Rolle beim Schutz vor bestimmten Krebsarten spielen könnte, da es antioxidative Eigenschaften besitzt und zur Unterstützung des Immunsystems beiträgt. Allerdings sind die wissenschaftlichen Ergebnisse uneinheitlich. Einige Studien deuten darauf hin, dass eine ausreichende Selenzufuhr mit einem geringeren Risiko für bestimmte Krebsarten wie Prostata-, Lungen- oder Darmkrebs verbunden sein könnte, während andere keinen klaren Nutzen zeigen. Eine übermäßige Selenzufuhr kann zudem gesundheitsschädlich sein. Der beste Weg, Selen aufzunehmen, ist eine ausgewogene Ernährung mit selenreichen Lebensmitteln wie Nüssen, Fisch und Fleisch, anstatt hochdosierte Ergänzungsmittel einzunehmen.',
            sources: ['https://pubmed.ncbi.nlm.nih.gov/29376219/'],
        },
    ];


    const handleNextPage = () => {
        localStorage.setItem("question", "Hilft Selenium Krebs zu vermeiden?");
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
                Ihr Onkel hat eine familiäre Vorgeschichte von Krebs und fragt sich, ob die Einnahme von Selenpräparaten ihm helfen könnte, das Risiko zu verringern. Sie möchten wissen, ob dies eine sinnvolle Maßnahme für ihn sein könnte und stellen ChatGPT folgende Frage:
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
