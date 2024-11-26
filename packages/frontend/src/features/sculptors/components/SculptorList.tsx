import React, { useState, useEffect } from 'react';
import SculptorCard from './ui/SculptorCard';
import {getEscultores, updateEscultor} from "../../../services/SculptorService.ts";


const SculptorList: React.FC = () => {
    const [escultores, setEscultores] = useState<any[]>([]);

    useEffect(() => {
        const fetchEscultores = async () => {
            try {
                const data = await getEscultores();
                setEscultores(data);
            } catch (error) {
                console.error('Error al obtener los escultores:', error);
            }
        };
        fetchEscultores();
    }, []);

    const handleSaveSculptor = async (updatedSculptor: any) => {
        try {
            await updateEscultor(updatedSculptor.id, updatedSculptor);
            setEscultores((prev) =>
                prev.map((escultor) =>
                    escultor.id === updatedSculptor.id ? updatedSculptor : escultor
                )
            );
        } catch (error) {
            console.error('Error al actualizar el escultor:', error);
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <h2 className="w-full text-3xl font-bold text-center mb-8">Lista de Escultores</h2>
            {escultores.length > 0 ? (
                escultores.map((escultor) => (
                    <SculptorCard
                        key={escultor.id}
                        id={escultor.id}
                        nombre={escultor.nombre}
                        biografia={escultor.biografia}
                        fechaNacimiento={escultor.fechaNacimiento}
                        fechaFallecimiento={escultor.fechaFallecimiento}
                        imagen={escultor.imagen}
                        onSave={handleSaveSculptor}
                    />
                ))
            ) : (
                <p>No hay escultores disponibles</p>
            )}
        </div>
    );
};

export default SculptorList;