import { Metadata } from "next";
import CardsInventario from "./cards"

export const metadata:Metadata = {
    title: "Centro Sul - Inventário",
    description: "Processos para realizar o inventário",
}

export default function inventario() {
    return (
        <><header className="text-white px-8 py-4 bg-blue-900 shadow-md ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-3xl font-bold">CENTRO SUL - INVENTÁRIO</h1>
                <nav className="mr-10">
                    <ul className="flex space-x-6">
                        <li><a href="/" className="hover:text-yellow-300 transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-300 transition-colors">Histórico Inventário</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <CardsInventario />          
        </main></>
    );
}