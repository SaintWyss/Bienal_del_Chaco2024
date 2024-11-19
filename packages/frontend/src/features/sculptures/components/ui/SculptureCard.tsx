import React, { useState } from 'react';

interface SculptureCardProps {
    nombre: string;
    descripcion: string;
    fechaCreacion: string;
    tematica: string;
    id: string;
    imagen?: string; // Opcional, en caso de que no siempre haya una imagen
}

const SculptureCard: React.FC<SculptureCardProps> = ({ nombre, descripcion, tematica, imagen }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    return (
        <div className="card shadow-lg h-[400px] w-[280px] group gap-[0.5em] rounded-lg relative flex flex-col justify-end p-4 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
            {/* Imagen */}
            {imagen && (
                <img
                    src={imagen}
                    alt={nombre}
                    className="absolute top-0 left-0 h-full w-full object-cover rounded-lg opacity-70 group-hover:opacity-100 duration-300"
                />
            )}

            {/* Contenido */}
            <div className="relative z-10 text-white flex flex-col gap-2">
                <h1 className="text-lg font-bold truncate">{nombre}</h1>
                <p className="text-sm italic">Temática: {tematica}</p>

                {/* Descripción con "Ver más" */}
                <p className={`text-sm leading-5 ${showFullDescription ? '' : 'truncate'}`}>
                    {descripcion}
                </p>
                {descripcion.length > 100 && (
                    <button
                        className="text-blue-400 text-sm underline mt-1"
                        onClick={() => setShowFullDescription(!showFullDescription)}
                    >
                        {showFullDescription ? 'Ver menos' : 'Ver más'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default SculptureCard;
