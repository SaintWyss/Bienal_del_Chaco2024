import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import DefaultLayout from "../../layout/DefaultLayout";
import Hero from "../../layout/hero/Hero";
import EventListHome from "./components/EventListHome";
import SculptureListHome from "./components/SculptureListHome";
import SculptorListHome from "./components/SculptorListHome";
import Maps from "../../layout/maps/Maps";
import { Pagination } from "swiper/modules";

const Home: React.FC = () => {
    return (
        <DefaultLayout>
            {/* Contenedor principal ajustado para full-screen */}
            <div className="w-full h-screen overflow-hidden">
                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="w-full h-screen overflow-hidden"
                >

                {/* Hero Section */}
                    <SwiperSlide id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700">
                        <Hero />
                    </SwiperSlide>

                    {/* EventList Section */}
                    <SwiperSlide id="eventos" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700">
                        <EventListHome />
                    </SwiperSlide>

                    {/* SculptureList Section */}
                    <SwiperSlide id="esculturas" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700">
                        <SculptureListHome />
                    </SwiperSlide>

                    {/* SculptorList Section */}
                    <SwiperSlide id="escultores" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700">
                        <SculptorListHome />
                    </SwiperSlide>

                    {/* Maps Section */}
                    <SwiperSlide id="maps" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700">
                        <Maps />
                    </SwiperSlide>
                </Swiper>
            </div>
        </DefaultLayout>
    );
};

export default Home;
