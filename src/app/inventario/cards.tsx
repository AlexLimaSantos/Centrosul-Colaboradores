'use client'

import { useState } from 'react';
import CardInventario from '@/app/components/cards/inventario';

export default function CardsInventario() {

    return (
        <main className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/*CARD PARTICIONAR BOI*/}
                <CardInventario
                    data="boi"
                    image="🥩"
                    title="Particionar Boi"
                    description="Clique para gerenciar cortes bovinos"
                />
                {/*CARD PRODUZIR PÃO*/}
                <CardInventario
                    data="pao"
                    image="🥩"
                    title="Produzir Pão"
                    description="Clique para produzir os pães"
                />
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
                        <button className="btn-close w-full py-2 rounded-md font-semibold mt-2 bg-gray-200 hover:bg-gray-300">
                            FECHAR
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}