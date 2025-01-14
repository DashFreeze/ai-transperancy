'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const router = useRouter();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (name && age) {
            alert(`Hallo, ${name}! Du bist ${age} Jahre alt.`);
            router.push('/nextpage'); // Ersetzen Sie '/nextpage' durch den tatsächlichen Pfad der nächsten Seite
        } else {
            alert('Bitte füllen Sie sowohl den Namen als auch das Alter aus.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Gib deinen Namen und dein Alter ein:</h1>
            <div className='form flex-direction-column'>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input
                        type="text"
                        placeholder="Dein Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ padding: '10px', fontSize: '16px', marginBottom: '10px' }}
                    />
                    <input
                        type="number"
                        placeholder="Dein Alter"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        style={{ padding: '10px', fontSize: '16px', marginBottom: '10px' }}
                    />
                    <button type="submit" style={{ padding: '10px 20px' }}>
                        Absenden
                    </button>
                </form>
            </div>
        </div>
    );
}
