import React, { useState, useEffect, useRef } from "react";
import { getEsculturasbyEvent, getEsculturas } from "../../../services/SculptureService";
import SculptureCardHome from "./ui/SculptureCardHome.tsx";

interface SculptureListHomeProps {
    eventoId?: number; // Evento opcional
}

const SculptureListHome: React.FC<SculptureListHomeProps> = ({ eventoId }) => {
    const [esculturas, setEsculturas] = useState<any[]>([]);
    const containerRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const fetchEsculturas = async () => {
            try {
                const data = eventoId
                    ? await getEsculturasbyEvent(eventoId)
                    : await getEsculturas();
                setEsculturas(data);
            } catch (error) {
                console.error("Error al cargar esculturas:", error);
            }
        };

        fetchEsculturas();
    }, [eventoId]);

    const handleCardClick = (index: number, rowIndex: number) => {
        const container = containerRefs.current[rowIndex];
        if (container) {
            const cardWidth = container.offsetWidth / esculturas.length;
            const offset = index * cardWidth - container.offsetWidth / 2 + cardWidth / 2;
            container.scrollTo({ left: offset, behavior: "smooth" });
        }
    };

    return (
        <div
            className="w-full min-h-screen py-12"
            style={{
                backgroundImage: "url('https://www.bienaldelchaco.org/2024/wp-content/uploads/2024/03/Fondo-bienal-colores.jpg')",
                backgroundPosition: '50% 31px',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}
        >
            <h2 className="text-4xl text-white font-bold text-center mb-12">
                Esculturas Destacadas
            </h2>
            <div className="space-y-10">
                {Array.from({ length: Math.ceil(esculturas.length / 5) }, (_, rowIndex) => (
                    <div
                        key={rowIndex}
                        ref={(el) => (containerRefs.current[rowIndex] = el!)}
                        className={`flex overflow-x-auto items-center ${
                            rowIndex % 2 === 0 ? "animate-scroll-left" : "animate-scroll-right"
                        }`}
                        style={{ padding: '0 20px', overflow: 'hidden' }} // Asegura que no se desborde
                    >
                        {esculturas
                            .slice(rowIndex * 5, (rowIndex + 1) * 5)
                            .map((escultura, index) => (
                                <SculptureCardHome
                                    key={escultura.id}
                                    {...escultura}
                                    onClick={() => handleCardClick(index, rowIndex)}
                                />
                            ))}
                    </div>
                ))}
            </div>

            <style>{`
                .animate-scroll-left {
                    animation: scroll-left 15s linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right 15s linear infinite;
                }
                @keyframes scroll-left {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }
                @keyframes scroll-right {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </div>
    );
};

export default SculptureListHome;
