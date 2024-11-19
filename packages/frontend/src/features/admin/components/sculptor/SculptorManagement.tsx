import React from 'react';
import CreateSculptor from "./components/SculptorForm.tsx";
import DeleteSculptor from "./components/SculptorDelete.tsx";
import SculptorListAdmin from "./components/SculptorListAdmin.tsx";

const SculptorManagement: React.FC = () => {
    const [selectedAction, setSelectedAction] = React.useState<string | null>(null);

    const renderContent = () => {
        switch (selectedAction) {
            case 'create':
                return <CreateSculptor />;
            case 'list':
                return <SculptorListAdmin />;
            case 'delete':
                return <DeleteSculptor />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-8 space-y-8 ">
            <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
                <h2 className="text-center text-4xl font-extrabold text-gray-700">Gestión de Escultores</h2>
                <div className="flex flex-col w-full gap-6">
                    {/* Crear Escultor */}
                    <button
                        onClick={() => setSelectedAction('create')}
                        className={`relative font-semibold text-white cursor-pointer border-none rounded-md w-full py-4 text-xl z-10 overflow-hidden
                        ${selectedAction === 'create' ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-gray-500 to-gray-700 hover:from-purple-500 hover:to-blue-500'}`}
                    >
                        <span className="w-full py-4 absolute inset-0 flex items-center justify-center text-2xl z-10 backdrop-blur-lg rounded-md">
                            Ingresar Escultor
                        </span>
                    </button>

                    {/* Ver Lista de Escultores */}
                    <button
                        onClick={() => setSelectedAction('list')}
                        className={`relative font-semibold text-white cursor-pointer border-none rounded-md w-full py-4 text-xl z-10 overflow-hidden
                        ${selectedAction === 'list' ? 'bg-gradient-to-r from-green-500 to-green-700' : 'bg-gradient-to-r from-gray-500 to-gray-700 hover:from-green-500 hover:to-green-700'}`}
                    >
                        <span className="w-full py-4 absolute inset-0 flex items-center justify-center text-2xl z-10 backdrop-blur-lg rounded-md">
                            Ver Lista de Escultores
                        </span>
                    </button>

                    {/* Eliminar Escultor */}
                    <button
                        onClick={() => setSelectedAction('delete')}
                        className={`relative font-semibold text-white cursor-pointer border-none rounded-md w-full py-4 text-xl z-10 overflow-hidden
                        ${selectedAction === 'delete' ? 'bg-gradient-to-r from-red-500 to-red-700' : 'bg-gradient-to-r from-gray-500 to-gray-700 hover:from-red-500 hover:to-red-700'}`}
                    >
                        <span className="w-full py-4 absolute inset-0 flex items-center justify-center text-2xl z-10 backdrop-blur-lg rounded-md">
                            Eliminar Escultor
                        </span>
                    </button>
                </div>
            </div>
            {renderContent()}
        </div>
    );
};

export default SculptorManagement;
