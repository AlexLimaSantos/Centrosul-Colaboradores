export default function CardContentAtualizarEstoque() {
    return (
        <div className="card-content">
            <h2 className="text-xl font-bold mb-4 text-center">Atualizar Estoque 📦</h2>
            <div className="space-y-4">
                <form action="" method="POST">
                    <div>
                        <label htmlFor="numInventario" className="block mb-1 font-medium">Nº Inventário:</label>
                        <input type="number" id="numInventario" name="numInventario" className="w-full border border-black p-2 rounded-md" step="0.1" min="0" />
                    </div>
                    <button id="btnAtualizarEstoque" className="bg-red-400 w-full py-2 rounded-md font-semibold mt-4 hover:bg-red-600">
                        ATUALIZAR
                    </button>
                </form>

            </div>
        </div>
    );
}