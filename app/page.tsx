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
            router.push('/question');
        } else {
            alert('Bitte füllen Sie sowohl den Namen als auch das Alter aus.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Gib deinen Namen und dein Alter ein:</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Dein Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <input
                    type="number"
                    placeholder="Dein Alter"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={{ padding: '10px', fontSize: '16px', marginLeft: '10px' }}
                />
                <button type="submit" style={{ marginLeft: '10px', padding: '10px 20px' }}>
                    Absenden
                </button>
            </form>
        </div>
    );
}
