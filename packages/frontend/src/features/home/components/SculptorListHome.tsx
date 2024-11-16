import React, { useState, useEffect } from 'react';
import { getEscultores } from '../../../services/SculptorService.ts';
import SculptorCardHome from './ui/SculptorCardHome.tsx';

const SculptorListHome: React.FC = () => {
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

    return (
        <div className="relative w-full min-h-screen bg-cover bg-center"
             style={{ backgroundImage: "url('https://www.bienaldelchaco.org/2024/wp-content/uploads/2024/03/Fondo-escultores-invitados.jpg')", backgroundPosition: '50% 80px' }}>

            {/* Filtro oscuro sobre el fondo para mejorar la legibilidad */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

            {/* Contenido de la lista */}
            <div className="relative z-10 flex flex-col items-center pt-20 pb-8 px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">Escultores Destacados</h2>
                {escultores.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {escultores.map((escultor, id) => (
                            <SculptorCardHome
                                key={id}
                                nombre={escultor.nombre}
                                biografia={escultor.biografia}
                                tematica={escultor.tematica}
                                imagen={escultor.imagen} // Si tienes una imagen
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-white">No hay escultores disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default SculptorListHome;