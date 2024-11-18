import React from 'react';
import logo from "./assets/images/Titulo.png";
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
                />
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            </div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center w-full h-full text-center text-white px-10 space-y-6">
                <img
                    src={logo}
                    alt="Bienal Art"
                    className="max-w-md h-auto bg-transparent animate-fadeInUp"
                />
                <img
                    src={logo2}
                    alt="Gobierno Logo"
                    className="max-w-sm h-auto bg-transparent animate-fadeInUp delay-200"
                />
                <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg animate-fadeInUp delay-400">
                    Bienal Internacional de Escultura 2024
                </h1>
                <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-gray-200 animate-fadeInUp delay-600">
                    Donde el arte y la cultura convergen para crear algo único.
                </p>
            </div>
        </section>
    );
};

export default Hero;