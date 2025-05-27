'user client'

import CardContentBoi from "./card-content-boi";
import CardContentAtualizarEstoqueInventario from "./card-content-atualizar-estoque-inventario";
import CardContentPao from "./card-content-pao";
import CardContentSuino from "./card-content-suino";
import CardContentPlanilhaKaizen from "./card-content-planilha-kaizen";

import { useState } from "react";


interface CardProps {
    data: string,
    image: any,
    title: string,
    description: string
}

export default function CardInventario(props: CardProps) {

    const [activeCard, setActiveCard] = useState<string | null>(null);

    const handleCardClick = (cardData: string) => {
        setActiveCard(cardData);
    };

    const handleReset = () => {
        setActiveCard(null);
    };

    return (
        <div className="flex items-center justify-center border-4 border-blue-900 rounded-lg bg-white w-90 h-90 hover:scale-105 transition-shadow duration-300 hover:shadow-2xl"
            data-card={props.data}
            onClick={() => handleCardClick(props.data)}>
            {activeCard === "boi" ? (
                <div>
                    <CardContentBoi />
                    <button className="w-full py-2 rounded-md font-semibold mt-2 bg-gray-200 hover:bg-gray-300"
                        onClick={(e) => { e.stopPropagation(); handleReset(); }}>
                        FECHAR
                    </button>
                </div>
            ) : activeCard === "pao" ? (
                <div>
                    <CardContentPao />
                    <button className="w-full py-2 rounded-md font-semibold mt-2 bg-gray-200 hover:bg-gray-300"
                        onClick={(e) => { e.stopPropagation(); handleReset(); }}>
                        FECHAR
                    </button>
                </div>
            ) : activeCard === "suino" ? (
                <div>
                    <CardContentSuino />
                    <button className="w-full py-2 rounded-md font-semibold mt-2 bg-gray-200 hover:bg-gray-300"
                        onClick={(e) => { e.stopPropagation(); handleReset(); }}>
                        FECHAR
                    </button>
                </div>    
            ) : activeCard === "estoque" ? (
                <div>
                    <CardContentAtualizarEstoqueInventario />
                    <button className="w-full py-2 rounded-md font-semibold mt-2 bg-gray-200 hover:bg-gray-300"
                        onClick={(e) => { e.stopPropagation(); handleReset(); }}>
                        FECHAR
                    </button>
                </div>    
            ) : activeCard === "kaizen" ? (
                <div>
                    <CardContentPlanilhaKaizen />
                    <button className="w-full py-2 rounded-md font-semibold mt-2 bg-gray-200 hover:bg-gray-300"
                        onClick={(e) => { e.stopPropagation(); handleReset(); }}>
                        FECHAR
                    </button>
                </div>    
            )
            : (
                <div className="flex flex-col">
                    <div className="text-center text-6xl mb-2">{props.image}</div>
                    <h2 className="text-xl font-bold mb-2 text-center">{props.title}</h2>
                    <p className="text-center text-gray-600">{props.description}</p>
                </div>
            )}
        </div>
    );
}

