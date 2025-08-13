export default function CardContentPao() {
    return (
        <div className="card-content">
            <h2 className="text-xl font-bold mb-4 text-center">Produzir Pão 🍞</h2>
            <div className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Peso (kg):</label>
                    <input type="number" id="pao-peso" className="w-full border border-black p-2 rounded-md" step="0.1" min="0" />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Tipo de Corte:</label>
                    <select id="pao-tipo" className="w-full">
                        <option value="">Selecione o corte</option>
                        <option value="2823">2823 - Pão Francês Trad/Integral KG</option>
                        <option value="44072">44072 - Pães Artesanais KG</option>                        
                    </select>
                </div>

                <button id="btn-pao" className="bg-yellow-300 w-full py-2 rounded-md font-semibold mt-4 hover:bg-yellow-500">
                    PARTICIONAR
                </button>
            </div>
        </div>
    );

}