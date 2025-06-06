'use client'

import CardInventario from '@/app/components/cards/CardInventario/CardInventario';

export default function CardsInventario() {

    return (
        <main className="flex items-center justify-center py-8 mx-auto px-4">
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
                    image="🍞"
                    title="Produzir Pão"
                    description="Clique para produzir os pães"
                />
                {/*CARD PARTICIONAR SUINO*/}
                <CardInventario
                    data="suino"
                    image="🐖"
                    title="Particionar Suíno"
                    description="Clique para gerenciar cortes suínos"
                />
                {/*CARD ATUALIZAR ESTOQUE*/}
                <CardInventario
                    data="estoque"
                    image="📦"
                    title="Atualizar Estoque"
                    description="Clique para atualizar o inventário"
                />
                {/*CARD PLANILHA KAIZEN*/}
                <CardInventario
                    data="kaizen"
                    image="📊"
                    title="Planilha Kaizen"
                    description="Clique para subir a planilha"
                />
            </div>
        </main>
    );
}