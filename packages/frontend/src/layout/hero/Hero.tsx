import React from "react";
import logo2 from "./assets/images/b24-slide-principal-nuevo-logo-gobierno.png";

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-screen">
            {/* Background Video */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    src="https://www.bienaldelchaco.org/2024/wp-content/uploads/2024/05/B24-web-slide-institucional-nuevo-c.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                    style={{
                        objectPosition: "right center", // Enfoca la parte derecha
                    }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            </div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center w-full h-full text-center px-4 space-y-10">
                {/* Título principal */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] animate-fadeInUp delay-400 text-white">
                    Bienal del Chaco 2024 <br /> del 12 al 21 de Julio
                </h1>

                {/* Descripción */}
                <p className="text-lg sm:text-xl md:text-2xl max-w-xl leading-relaxed text-gray-200 animate-fadeInUp delay-600 font-light tracking-wider">
                    Donde el arte y la cultura convergen para crear algo único.
                </p>

                {/* Logo secundario con blur */}
                <div className="relative">
                    <div className="absolute inset-0 backdrop-blur-2xl bg-black bg-opacity-60 rounded-3xl"></div>
                    <img
                        src={logo2}
                        alt="Gobierno Logo"
                        className="relative z-10 max-w-[315px] sm:max-w-[400px] lg:max-w-[500px] animate-fadeInUp delay-200"
                    />
                </div>


            </div>
        </section>
    );
};

export default Hero;
