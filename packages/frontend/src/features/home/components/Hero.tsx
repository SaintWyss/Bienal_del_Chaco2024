import React from "react";
import logo2 from "../assets/images/b24-slide-principal-nuevo-logo-gobierno.png";

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
                {/* Overlay para oscurecer el video y mejorar la visibilidad del texto */}
                <div className="absolute inset-0 bg-white bg-opacity-5"></div>
            </div>
            {/* Overlay para oscurecer el video y mejorar la visibilidad del texto */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Aumentamos la opacidad para mejor contraste */}
            {/* Content */}
            <div className="relative flex flex-col items-center justify-center w-full h-full text-center space-y-40 sm:space-y-10 px-4">
                {/* Título principal */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg text-white animate-fadeInUp delay-400">
                    Bienal del Chaco 2024 <br /> del 12 al 21 de Julio
                </h1>

                {/* Descripción */}
                <p className="text-2xl sm:text-3xl text-white font-extralight sm:font-medium tracking-wider max-w-xl leading-relaxed animate-text-gradient animate-fadeInUp delay-600">
                    Donde el arte y la cultura convergen para crear algo único.
                </p>

                {/* Logo secundario con efecto de blur */}
                <div className="relative">
                    <div className="absolute inset-0 backdrop-blur-2xl bg-black bg-opacity-60 rounded-3xl"></div>
                    <img
                        src={logo2}
                        alt="Gobierno Logo"
                        className="relative z-10 max-w-[315px] sm:max-w-[400px] lg:max-w-[500px] animate-fadeInUp delay-200"
                    />
                </div>

                {/* Mensaje "Desplázame" con flecha animada, solo en pantallas grandes */}
                <div className="hidden lg:flex flex-col items-center justify-center space-y-4 animate-bounce mt-10">
                    <p className="text-xl text-white font-semibold">Desplázame</p>
                    <div className="w-8 h-8 border-4 border-t-4 border-white border-solid rounded-full animate-bounce"></div> {/* Flecha animada */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
