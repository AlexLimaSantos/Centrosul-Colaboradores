export default function CardContentSuino() {
    return (
        <div className="card-content">
            <h2 className="text-xl font-bold mb-4 text-center">Produzir Suíno 🐖</h2>
            <div className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Peso (kg):</label>
                    <input type="number" id="suino-peso" className="w-full border border-black p-2 rounded-md" step="0.1" min="0" />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Tipo de Corte:</label>
                    <select id="suino-tipo" className="w-full">
                        <option value="">Selecione o corte</option>
                        <option value="58365">58365 - Suíno Resfriado</option>
                        <option value="63595">63595 - Suíno Congelado Artesanais KG</option>                        
                    </select>
                </div>

                <button id="btn-suino" className="bg-yellow-300 w-full py-2 rounded-md font-semibold mt-4 hover:bg-yellow-500">
                    PARTICIONAR
                </button>
            </div>
        </div>
    );

}