import React from 'react';

const Maps: React.FC = () => {
    return (
        <section className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14164.10854776721!2d-58.98136!3d-27.437265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x891619c21777887b!2sPredio+de+las+Bienales!5e0!3m2!1ses!2sar!4v1543334233591"
                className="w-full h-full"
                loading="lazy"
            ></iframe>
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-md shadow-lg">
                <h2 className="text-lg font-semibold text-gray-800">
                    Predio de las Bienales
                </h2>
            </div>
        </section>
    );
};

export default Maps;