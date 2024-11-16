import React, { useState, useEffect } from 'react';

interface SculptorCardAdminProps {
    id: string;
    nombre: string;
    nacionalidad: string;
    biografia: string;
    onSave: (updatedSculptor: { id: string; nombre: string; nacionalidad: string; biografia: string }) => void;
}

const SculptorCardAdmin: React.FC<SculptorCardAdminProps> = ({
                                                                 id,
                                                                 nombre,
                                                                 nacionalidad,
                                                                 biografia,
                                                                 onSave,
                                                             }) => {
    const [editData, setEditData] = useState({ nombre, nacionalidad, biografia });

    useEffect(() => {
        setEditData({ nombre, nacionalidad, biografia });
    }, [nombre, nacionalidad, biografia]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (!editData.nombre || !editData.nacionalidad) {
            alert("El nombre y la nacionalidad son obligatorios.");
            return;
        }
        onSave({ ...editData, id });
    };

    return (
        <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
            <input
                type="text"
                name="nombre"
                value={editData.nombre}
                onChange={handleChange}
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Nombre del escultor"
            />
            <input
                type="text"
                name="nacionalidad"
                value={editData.nacionalidad}
                onChange={handleChange}
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Nacionalidad"
            />
            <textarea
                name="biografia"
                value={editData.biografia}
                onChange={handleChange}
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Biografía"
            />
            <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition">
                Guardar
            </button>
        </div>
    );
};

export default SculptorCardAdmin;
