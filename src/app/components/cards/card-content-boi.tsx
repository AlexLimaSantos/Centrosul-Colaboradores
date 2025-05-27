export default function CardContentBoi() {
    return (
        <div className="card-content">
            <h2 className="text-xl font-bold mb-4 text-center">Particionar Boi 🥩</h2>
            <div className="space-y-4">
                <form action="" method="POST">
                    <div>
                        <label htmlFor="valorPeso" className="block mb-1 font-medium">Peso (kg):</label>
                        <input type="number" id="valorPeso" name="valorPeso" className="w-full border border-black p-2 rounded-md" step="0.1" min="0" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Tipo de Corte:</label>
                        <select id="boi-tipo" className="w-full">
                            <option value="selecione">Selecione o corte</option>
                            <option value="14258">14258 - Traseiro inteiro</option>
                            <option value="14259">14259 - Dianteiro Inteiro s/osso</option>
                            <option value="14264">14264 - Ponta de agulha</option>

                        </select>
                    </div>
                    <button id="btn-boi" className="bg-yellow-300 w-full py-2 rounded-md font-semibold mt-4 hover:bg-yellow-500">
                        PARTICIONAR
                    </button>
                </form>
            </div>
        </div>
    );

}