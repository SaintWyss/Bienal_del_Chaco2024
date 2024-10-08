import React from 'react';
// Importa tus imágenes aquí
// @ts-ignore
import image2 from '../../assets/Navbar/images/logo-white.png';
// @ts-ignore
import image3 from '../../assets/Navbar/images/logo-black.png';

const Header: React.FC = () => {
    return (
        <header className="relative overflow-hidden h-64 bg-gray-800">
            {/* Galería de imágenes */}


            {/* Overlay opcional si quieres un efecto sobre las imágenes */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Título sobre la galería */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl font-bold">
                HEADER
            </div>
        </header>
    );
};

export default Header;
