'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { uploadUser } from './lib/data';


export default function Home() {
    const [vorname, setVorname] = useState('');
    const [nachname, setNachname] = useState('');
    const [age, setAge] = useState('');
    const [geschlecht, setGeschlecht] = useState('');
    const [abschluss, setAbschluss] = useState('');
    const [beruf, setBeruf] = useState('');
    const router = useRouter();

    // Erstmal zu Question_ohnequellen, brauche noch random gruppeneinteilung
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (vorname) {
            router.push('Questions/question_ohnequellen/question_1'); // Ersetzen Sie '/nextpage' durch den tatsächlichen Pfad der nächsten Seite
        } else {
            alert('Bitte füllen Sie die benötigten Daten aus.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ marginBottom: '20px'}}>Bitte tragen Sie die benötigten Daten ein:</h1>
            <div className='form flex-direction-column'>
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <input
                        type="text"
                        placeholder="Vorname"
                        value={vorname}
                        onChange={(e) => setVorname(e.target.value)}
                        style={{padding: '10px', fontSize: '16px', marginBottom: '10px'}}
                    />
                    <input
                        type="text"
                        placeholder="Nachname"
                        value={nachname}
                        onChange={(e) => setNachname(e.target.value)}
                        style={{padding: '10px', fontSize: '16px', marginBottom: '10px'}}
                    />
                    <input
                        type="number"
                        placeholder="Alter"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        style={{padding: '10px', fontSize: '16px', marginBottom: '10px'}}
                    />
                    <select
                        value={geschlecht}
                        onChange={(e) => setGeschlecht(e.target.value)}
                        style={{padding: '10px', fontSize: '16px', marginBottom: '10px'}}
                    >
                        <option value="" disabled>Wähle dein Geschlecht</option>
                        <option value="männlich">Männlich</option>
                        <option value="weiblich">Weiblich</option>
                        <option value="divers">Divers</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Abschluss"
                        value={abschluss}
                        onChange={(e) => setAbschluss(e.target.value)}
                        style={{padding: '10px', fontSize: '16px', marginBottom: '10px'}}
                    />
                    <input
                        type="text"
                        placeholder="Beruf"
                        value={beruf}
                        onChange={(e) => setBeruf(e.target.value)}
                        style={{padding: '10px', fontSize: '16px', marginBottom: '10px'}}
                    />
                    <button type="submit" style={{padding: '10px 20px'}}>
                        Absenden
                    </button>
                </form>
            </div>
        </div>
    );
}
