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
        { sender: 'user', text: 'Können L-Theanin-Ergänzungsmittel Stress und Angst reduzieren?'},
        { sender: 'chatgpt', 
            text: 'Ja, L-Theanin-Ergänzungsmittel können Stress und Angst reduzieren. L-Theanin ist eine Aminosäure, die vor allem in grünem Tee vorkommt und beruhigende Wirkungen auf das Nervensystem hat, ohne sedierend zu wirken. Studien zeigen, dass L-Theanin die Alpha-Wellen im Gehirn fördert, was zu einem entspannten, aber wachen Zustand führt. Es kann auch die Wirkung von Neurotransmittern wie GABA, Dopamin und Serotonin modulieren, was die Stressreaktion verringert. Viele Menschen berichten von einer verbesserten Stressbewältigung, reduzierter Angst und gesteigerter Konzentration nach der Einnahme',
        }
    ];

    const handleNextPage = () => {
        localStorage.setItem("question", "Können L-Theanin-Ergänzungsmittel Stress und Angst reduzieren?");
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
                Ihre Schwester hat in letzter Zeit vermehrt mit Stress und Angstzuständen zu kämpfen und sucht nach natürlichen Möglichkeiten, um sich zu entspannen. Von anderen wurde berichtet, dass L-Theanin eine geeignete Alternative für sie sein könnte. Sie möchten über die möglichen Vorteile von L-Theanin erfahren und stellen ChatGPt folgende Frage:
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
