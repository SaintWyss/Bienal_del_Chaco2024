import React, { useState } from 'react';
import { createEscultor } from '../../../../../services/SculptorService.ts'; // Ajusta la ruta según tu estructura

const SculptorForm = () => {
    const [nombre, setNombre] = useState('');
    const [biografia, setBiografia] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [fechaFallecimiento, setFechaFallecimiento] = useState('');
    const [imagen, setImagen] = useState(''); // Campo para la URL de la imagen
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nuevoEscultor = { nombre, biografia, fechaNacimiento, fechaFallecimiento, imagen };
        try {
            console.log('Enviando datos:', nuevoEscultor);
            const response = await createEscultor(nuevoEscultor);
            console.log('Respuesta del servidor:', response);

            alert('Escultor creado con éxito');
            setNombre('');
            setBiografia('');
            setFechaNacimiento('');
            setFechaFallecimiento('');
            setImagen('');
        } catch (error: any) {
            console.error('Error al crear escultor:', error);
            setError('No se pudo crear el escultor. Inténtalo de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <input
                type="text"
                placeholder="Nombre del escultor"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <textarea
                placeholder="Biografía"
                value={biografia}
                onChange={(e) => setBiografia(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="date"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="date"
                value={fechaFallecimiento}
                onChange={(e) => setFechaFallecimiento(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="URL de la imagen"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
                Crear Escultor
            </button>
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </form>
    );
};

export default SculptorForm;
