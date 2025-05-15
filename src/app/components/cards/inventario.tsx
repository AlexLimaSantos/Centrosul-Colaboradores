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
        setActiveCard((prev) => (prev === cardData ? null : cardData));
    };

    const handleReset = () => {
        setActiveCard(null);
    };

    return (
        <div className="border-4 border-blue-900 rounded-lg p-6 bg-whit" data-card={props.data} onClick={() => handleCardClick(props.data)}>
            {activeCard === props.data ? (
                <div>
                    <button className="w-full py-2 rounded-md font-semibold mt-2 bg-gray-200 hover:bg-gray-300" onClick={(e) => {
                e.stopPropagation();
                handleReset();}}>
                            FECHAR
                    </button>
                </div>
            ) : (
                <div className="flex;"> 
                    <div className="text-center">{props.image}</div>
                    <h2 className="text-xl font-bold mb-2 text-center">{props.title}</h2>
                    <p className="text-center text-gray-600">{props.description}</p>
                </div>
            )}
        </div>
    );
}

