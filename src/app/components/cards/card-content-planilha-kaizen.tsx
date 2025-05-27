import { useRef, useState, ChangeEvent } from "react";

export default function CardContentPlanilhaKaizen() {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);    
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;

        if (file) {
            setSelectedFile(file);

        } else {
            setSelectedFile(null);
        }
    };

    const handleCleanArchive = () => {
        setSelectedFile(null);
    };

    return (
        <div className="card-content">
            <h2 className="text-xl font-bold mb-4 text-center">Planilha Kaizen 📊</h2>
            <div className="space-y-4">
                <form action="" encType="multipart/form-data">
                    <div>
                        <label htmlFor="planilhaKaizen" className="block mb-1 font-medium">Anexar arquivo:</label>
                        {selectedFile && (
                            <div>
                                <p className="text-green-600">{selectedFile.name}</p>
                                <button type="button" onClick={() => handleCleanArchive()} className="flex items-center px-2 py-2 rounded-md bg-red-400 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    Excluir Anexo
                                </button>
                            </div>
                        )}
                        <input type="file" multiple={false} ref={fileInputRef} onChange={handleFileChange} id="planilhaKaizen" name="planilhaKaizen" className="hidden" />
                        <button type="button" onClick={() => handleButtonClick()} className="bg-green-400 w-full py-2 rounded-md font-semibold mt-4 hover:bg-green-600">
                            {selectedFile ? ("Trocar Planilha") : ("Escolher Planilha")}
                        </button>
                    </div>
                    <button type="submit" id="btnEnviarPlanilhaKaizen" className="bg-blue-400 w-full py-2 rounded-md font-semibold mt-4 hover:bg-blue-600">
                        ATUALIZAR
                    </button>
                </form>
            </div>
        </div>
    );
};