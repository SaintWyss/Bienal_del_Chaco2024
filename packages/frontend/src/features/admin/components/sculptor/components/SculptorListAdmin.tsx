import React, { useState, useEffect } from 'react';
import SculptorCardAdmin from './ui/SculptorCardAdmin.tsx';
import { getEscultores, updateEscultor } from '../../../../../services/SculptorService.ts';

const SculptorListAdmin: React.FC = () => {
    const [escultores, setEscultores] = useState<any[]>([]);

    useEffect(() => {
        const fetchSculptors = async () => {
            try {
                const data = await getEscultores();
                setEscultores(data);
            } catch (error) {
                console.error('Error al cargar los escultores:', error);
            }
        };

        fetchSculptors();
    }, []);

    const handleSaveSculptor = async (updatedSculptor: any) => {
        try {
            await updateEscultor(updatedSculptor.id, updatedSculptor);
            setEscultores((prevSculptors) =>
                prevSculptors.map((sculptor) =>
                    sculptor.id === updatedSculptor.id ? updatedSculptor : sculptor
                )
            );
        } catch (error) {
            console.error('Error al actualizar el escultor:', error);
        }
    };

    return (
        <div className="px-8 py-6">
            <h2 className="text-2xl font-bold text-center mb-6">Lista de Escultores</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {escultores.length > 0 ? (
                    escultores.map((escultor: any) => (
                        <SculptorCardAdmin
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
                    <p className="col-span-full text-center text-gray-500">
                        No hay escultores disponibles
                    </p>
                )}
            </div>
        </div>
    );
};

export default SculptorListAdmin;