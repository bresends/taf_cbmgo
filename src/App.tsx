import { clsx } from 'clsx';
import { useState } from 'react';
import { Card } from './components/Card';
import { Nav } from './components/Nav';

export interface Data {
    sexo: 'Masculino' | 'Feminino';
    corrida: { value: number; score: number };
    flexao: { value: number; score: number };
    abdominal: { value: number; score: number };
    natacao: { value: number; score: number };
    barras: { value: number; score: number };
}

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [data, setData] = useState<Data>({
        sexo: 'Masculino',
        corrida: { value: 0, score: 0 },
        flexao: { value: 0, score: 0 },
        abdominal: { value: 0, score: 0 },
        natacao: { value: 0, score: 0 },
        barras: { value: 0, score: 0 },
    });


    return (
        <div
            className={clsx(
                'h-dvh flex flex-col',
                darkMode && 'dark text-white'
            )}
        >
            <Nav dark={darkMode} setDark={setDarkMode} />
            <Card  />
            <footer className="text-gray-500 dark:border-gray-800 mt-auto py-5 flex">
                <span className="mx-auto">
                    ©Devisio {new Date().getFullYear()}
                </span>
            </footer>
        </div>
    );
}

export default App;
