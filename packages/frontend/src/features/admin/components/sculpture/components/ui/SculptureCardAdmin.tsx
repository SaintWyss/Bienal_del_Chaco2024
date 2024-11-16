import React, { useState } from 'react';

interface SculptureCardAdminProps {
    id: string;
    nombre: string;
    descripcion: string;
    material: string;
    altura: string;
    peso: string;
    fechaCreacion: string; // Agrega fechaCreacion
    tematica: string; // Agrega tematica
    onSave: (updatedSculpture: any) => void;
}


const SculptureCardAdmin: React.FC<SculptureCardAdminProps> = ({
                                                                   id,
                                                                   nombre,
                                                                   descripcion,
                                                                   material,
                                                                   altura,
                                                                   peso,
                                                                   fechaCreacion,
                                                                   tematica,
                                                                   onSave,
                                                               }) => {
    const [editData, setEditData] = useState({
        nombre,
        descripcion,
        material,
        altura,
        peso,
        fechaCreacion,
        tematica,
    });

    // Modificar handleChange para aceptar tanto input como textarea
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave({
            ...editData,
            id,
        });
    };

    return (
        <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
            <input
                type="text"
                name="nombre"
                value={editData.nombre}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Nombre de la escultura"
            />
            <textarea
                name="descripcion"
                value={editData.descripcion}
                onChange={handleChange} // handleChange funciona ahora con textarea
                className="w-full p-2 border rounded-md mt-2"
                placeholder="Descripción"
            />
            <input
                type="text"
                name="material"
                value={editData.material}
                onChange={handleChange}
                className="w-full p-2 border rounded-md mt-2"
                placeholder="Material"
            />
            <input
                type="text"
                name="altura"
                value={editData.altura}
                onChange={handleChange}
                className="w-full p-2 border rounded-md mt-2"
                placeholder="Altura"
            />
            <input
                type="text"
                name="peso"
                value={editData.peso}
                onChange={handleChange}
                className="w-full p-2 border rounded-md mt-2"
                placeholder="Peso"
            />
            <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                Guardar
            </button>
        </div>
    );
};

export default SculptureCardAdmin;