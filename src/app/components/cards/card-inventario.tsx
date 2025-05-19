'user client'

import { useState } from "react";

interface CardProps {
    data: any, 
    image: any, 
    title: string, 
    description: string
}

export default function CardInventario(props : CardProps){
    const [activeCard, setActiveCard] = useState<string | null>(null);

    const handleCardClick = (cardData: string) => {
        setActiveCard(cardData);
    };

    const handleReset = () => {
        setActiveCard(null);
    };

    return (
        <div className="flex items-center justify-center border-4 border-blue-900 rounded-lg p-6 bg-white w-80 h-80 hover:scale-105 transition-shadow duration-300 hover:shadow-2xl" data-card={props.data} onClick={() => handleCardClick(props.data)}>
            {activeCard === props.data ? (
                <div>
                    {/*Componente Teste*/}
                    <div className="card-content">
                    <h2 className="text-xl font-bold mb-4 text-center">Particionar Boi 🥩</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-1 font-medium">Peso (kg):</label>
                                <input type="number" id="boi-peso" className="w-full" step="0.1" min="0"/>
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Tipo de Corte:</label>
                                <select id="boi-tipo" className="w-full">
                                    <option value="">Selecione o corte</option>
                                    <option value="picanha">Picanha</option>
                                    <option value="contrafile">Contrafilé</option>
                                    <option value="alcatra">Alcatra</option>
                                    <option value="maminha">Maminha</option>
                                </select>
                            </div>
                            
                            <button id="btn-boi" className="bg-yellow-300 w-full py-2 rounded-md font-semibold mt-4 hover:bg-yellow-500">
                                PARTICIONAR
                            </button>
                        </div>
                    </div>
                    {/*Fim Componente Teste*/}
                    <button className="w-full py-2 rounded-md font-semibold mt-2 bg-gray-200 hover:bg-gray-300" onClick={(e) => {
                e.stopPropagation();
                handleReset();}}>
                            FECHAR
                    </button>
                </div>
            ) : (
                <div className="flex flex-col"> 
                    <div className="text-center text-6xl mb-2">{props.image}</div>
                    <h2 className="text-xl font-bold mb-2 text-center">{props.title}</h2>
                    <p className="text-center text-gray-600">{props.description}</p>
                </div>
            )}
        </div>
    );
}

