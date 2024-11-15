import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EventCard from '../../../components/ui/EventCard.tsx';
import { getEventos } from '../../../services/EventService.ts';

// Importa los módulos desde "swiper/modules"
import { Navigation, Pagination } from 'swiper/modules';

const EventList: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos();
                setEventos(data);
            } catch (error) {
                console.error('Error al cargar los eventos:', error);
            }
        };

        fetchEventos();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {eventos.length > 0 ? (
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="w-full max-w-5xl"
                >
                    {eventos.map((evento) => (
                        <SwiperSlide key={evento.id} className="flex justify-center">
                            <EventCard
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
                <p>No hay eventos disponibles</p>
            )}
        </div>
    );
};

export default EventList;