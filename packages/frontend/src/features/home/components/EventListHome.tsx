import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { getEventos } from '../../../services/EventService';
import { Pagination } from 'swiper/modules';
import EventCardHome from "./ui/EventCardHome.tsx";

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
            className="relative w-full h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${currentBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {eventos.length > 0 ? (
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    centeredSlides={true}
                    className="relative w-full max-w-6xl z-10"
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
        </div>
    );
};

export default EventListHome;