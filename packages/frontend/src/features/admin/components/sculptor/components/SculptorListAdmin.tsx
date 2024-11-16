import React, { useState, useEffect } from 'react';
import SculptorCardAdmin from './ui/SculptorCardAdmin.tsx';
import { getEscultores, updateEscultor } from '../../../../../services/SculptorService.ts';

const SculptorListAdmin: React.FC = () => {
    const [escultores, setEscultores] = useState<any[]>([]);

    useEffect(() => {
        const fetchSculptors = async () => {
            try {
                const data = await getEscultores(); // Corrige el nombre a getEscultores
                setEscultores(data);
            } catch (error) {
                console.error('Error al cargar los escultores:', error);
            }
        };

        fetchSculptors();
    }, []);

    const handleSaveSculptor = async (updatedSculptor: any) => {
        try {
            await updateEscultor(updatedSculptor.id, updatedSculptor); // Corrige el nombre a updateEscultor
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
        <div className="grid grid-rows-2 grid-flow-col gap-10 px-20 justify-center">
            {escultores.length > 0 ? (
                escultores.map((escultor: any) => (
                    <SculptorCardAdmin
                        key={escultor.id}
                        id={escultor.id}
                        nombre={escultor.nombre}
                        nacionalidad={escultor.nacionalidad}
                        biografia={escultor.biografia}
                        onSave={handleSaveSculptor}
                    />
                ))
            ) : (
                <p>No hay escultores disponibles</p>
            )}
        </div>
    );
};

export default SculptorListAdmin;
