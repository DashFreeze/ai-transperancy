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
        { sender: 'user', text: 'Kann Dupixent Ekzeme behandeln?', sources: [] },
        {
            sender: 'chatgpt',
            text: 'Ja, Dupixent (Wirkstoff: Dupilumab) ist zur Behandlung von mittelschwerer bis schwerer atopischer Dermatitis (auch bekannt als atopisches Ekzem oder Neurodermitis) zugelassen. Es kann bei Erwachsenen und Jugendlichen ab 12 Jahren eingesetzt werden, deren Erkrankung mit topischen Therapien nicht ausreichend kontrolliert werden kann oder die diese nicht anwenden können. Zudem ist Dupixent für Kinder von 6 Monaten bis 11 Jahren mit schwerer atopischer Dermatitis zugelassen. Es kann allein oder in Kombination mit anderen auf die Haut aufgetragenen Arzneimitteln verwendet werden. Dupixent wirkt, indem es die Wirkung der Botenstoffe Interleukin-4 (IL-4) und Interleukin-13 (IL-13) hemmt, die eine wesentliche Rolle bei der Entzündungsreaktion der atopischen Dermatitis spielen. Durch die Blockierung dieser Botenstoffe kann Dupixent den Hautzustand verbessern und den Juckreiz lindern. Bitte beachten Sie, dass die Anwendung von Dupixent mit Nebenwirkungen verbunden sein kann. Häufige Nebenwirkungen sind Reaktionen an der Injektionsstelle, Bindehautentzündung (Konjunktivitis) und Gelenkschmerzen. Es ist wichtig, die Behandlung mit Ihrem Arzt zu besprechen, um die Risiken und Vorteile abzuwägen.',
            sources: ['Quelle 1: https://example.com'],
        },
    ];


    const handleNextPage = () => {
        localStorage.setItem("question", "Kann Dupixent Ekzeme behandeln?");
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
            <h1 style={{ fontSize: '20px', marginBottom: '20px', padding: '10px' }}>
                Ihr Opa leidet an atopischer Dermatitis und hat Schwierigkeiten, die Symptome mit herkömmlichen Behandlungen zu kontrollieren. Sie haben gehört, dass Dupixent eine Alternative sei, um die Krankheit zu behandeln. Um sicher zu gehen, stellen Sie ChatGPT folgende Frage:
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
