import React, { useState, useEffect } from 'react';
import SculptureCardAdmin from '../../../components/ui/SculptureCardAdmin.tsx';
import { getEsculturas, updateEscultura } from '../../../services/SculptureService.ts';

const SculptureListAdmin: React.FC = () => {
    const [esculturas, setEsculturas] = useState<any[]>([]);

    useEffect(() => {
        const fetchSculptures = async () => {
            try {
                const data = await getEsculturas();
                setEsculturas(data);
            } catch (error) {
                console.error('Error al cargar las esculturas:', error);
            }
        };

        fetchSculptures();
    }, []);

    const handleSaveSculpture = async (updatedSculpture: any) => {
        try {
            await updateEscultura(updatedSculpture.id, updatedSculpture);
            setEsculturas((prevSculptures) =>
                prevSculptures.map((sculpture) =>
                    sculpture.id === updatedSculpture.id ? updatedSculpture : sculpture
                )
            );
        } catch (error) {
            console.error('Error al actualizar la escultura:', error);
        }
    };

    return (
        <div className="grid grid-rows-2 grid-flow-col gap-10 px-20 justify-center">
            {esculturas.length > 0 ? (
                esculturas.map((escultura: any) => (
                    <SculptureCardAdmin
                        key={escultura.id}
                        id={escultura.id}
                        nombre={escultura.nombre}
                        descripcion={escultura.descripcion}
                        material={escultura.material}          // Asegúrate de que estas propiedades existen
                        altura={escultura.altura}
                        peso={escultura.peso}
                        fechaCreacion={escultura.fechaCreacion}
                        tematica={escultura.tematica}
                        onSave={handleSaveSculpture}
                    />
                ))
            ) : (
                <p>No hay esculturas disponibles</p>
            )}
        </div>
    );
};

export default SculptureListAdmin;