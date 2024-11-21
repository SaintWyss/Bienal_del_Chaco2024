import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { getEventos } from '../../../services/EventService';
import { Pagination } from 'swiper/modules';
import EventCardHome from "./ui/EventCardHome.tsx";
import { Link } from "react-router-dom";

const EventListHome: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]);
    const [currentBg, setCurrentBg] = useState<string>('');

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos();
                setEventos(data);
                if (data.length > 0) setCurrentBg(data[0].imagen); // Primer fondo
            } catch (error) {
                console.error('Error al cargar los eventos:', error);
            }
        };

        fetchEventos();
    }, []);

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.realIndex;
        setCurrentBg(eventos[currentIndex]?.imagen || '');
    };

    return (
        <div
            className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${currentBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Fondo oscuro para el texto */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Contenido principal */}
            <div className="relative w-full h-full flex flex-col justify-between z-10">
                {/* Swiper de eventos */}
                {eventos.length > 0 ? (
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        loop={true}
                        centeredSlides={true}
                        className="relative w-full max-w-6xl z-10 flex-grow"
                        onSlideChange={handleSlideChange}
                    >
                        {eventos.map((evento) => (
                            <SwiperSlide key={evento.id}>
                                <EventCardHome
                                    nombre={evento.nombre}
                                    descripcion={evento.descripcion}
                                    imagen={evento.imagen}
                                    fecha={evento.fecha}
                                    tematica={evento.tematica}
                                    id={evento.id}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p className="text-center text-gray-300 text-2xl z-10">
                        No hay eventos disponibles
                    </p>
                )}

                {/* Botón para ver todos los eventos */}
                <div className="relative flex justify-center items-center py-4">
                    <Link
                        to="/Eventos"
                        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    >
                        Ver eventos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventListHome;