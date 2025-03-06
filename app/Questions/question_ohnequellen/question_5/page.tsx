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
        { sender: 'user', text: 'Hilft fermentierte Milch bei Bluthochdruck?'},
        { sender: 'chatgpt',
            text: 'Ja, fermentierte Milchprodukte wie Joghurt und Kefir können helfen, Bluthochdruck zu senken. Sie enthalten bioaktive Peptide, die während der Fermentation entstehen und eine blutdrucksenkende Wirkung haben können, indem sie das Enzym Angiotensin-Converting Enzyme (ACE) hemmen – ähnlich wie einige blutdrucksenkende Medikamente. Zudem können probiotische Bakterien in fermentierten Milchprodukten die Darmgesundheit unterstützen, was indirekt zur Regulierung des Blutdrucks beitragen kann. Studien legen nahe, dass ein regelmäßiger Konsum mit einer moderaten Blutdrucksenkung verbunden sein kann, besonders bei Menschen mit bereits erhöhtem Blutdruck.',
        },
    ];

    const handleNextPage = () => {
        localStorage.setItem("question", "Hilft fermentierte Milch bei Bluthochdruck?");
        router.push('/Answers');
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