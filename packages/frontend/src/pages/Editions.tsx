import React from 'react';
import Header from '../layout/Header/Header.tsx';
import Footer from '../layout/footer/Footer.tsx';
import Hero from "../layout/hero/Hero.tsx";

const Editions: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <Hero />
            <Header />
            <Footer />
        </div>
    );
};
export default Editions;
