'use client'
import { useState } from 'react';

export default function Home() {

        const [name, setName] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            alert(`Hallo, ${name}!`);
        };

        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Gib deinen Namen ein:</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Dein Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ padding: '10px', fontSize: '16px' }}
                    />
                    <button type="submit" style={{ marginLeft: '10px', padding: '10px 20px' }}>
                        Absenden
                    </button>
                </form>
            </div>
        );
    }

