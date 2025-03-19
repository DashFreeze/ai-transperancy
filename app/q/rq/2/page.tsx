'use client';

import { useRouter } from 'next/navigation';

export default function QuestionOhneQuellen_1() {

    const router = useRouter();


    const messages = [
        { sender: 'user', text: 'Hilft Tylenol bei der Bewältigung von Arthrose-Symptomen?', sources: [] },
        {
            sender: 'chatgpt',
            text: 'Ja, Tylenol (Acetaminophen) kann zur Linderung von leichten bis mäßigen Schmerzen bei Arthrose beitragen, indem es die Schmerzsignale im Gehirn blockiert. Es wird häufig als Erstlinientherapie empfohlen, insbesondere für Menschen, die keine nichtsteroidalen Antirheumatika (NSAR) vertragen. Allerdings hat Tylenol keine entzündungshemmende Wirkung, sodass es weniger wirksam sein kann, wenn eine Entzündung an den Gelenken vorliegt. Die Wirkung kann individuell variieren, und bei stärkeren Beschwerden ist möglicherweise eine andere oder ergänzende Behandlung erforderlich.',
            sources: ['https://pubmed.ncbi.nlm.nih.gov/16437479/'],
        },
    ];


    const handleNextPage = () => {
        localStorage.setItem("question", "Hilft Tylenol bei der Bewältigung von Arthrose-Symptomen?");
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
            <h1 style={{ fontSize: '20px', marginBottom: '20px', padding: '14px' }}>
                Ihre Mutter hat seit Jahren mit den schmerzhaften Symptomen der Arthrose zu kämpfen und sucht nach einer Möglichkeit, die Beschwerden zu lindern. Sie haben erfahren, dass Tylenol (Paracetamol) eine geeignete Option sein könnte und wollen durch Hilfe von ChatGPT mehr Informationen bekommen:
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
