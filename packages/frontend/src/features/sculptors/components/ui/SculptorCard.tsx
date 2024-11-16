import React, { useState, useEffect } from 'react';
import {getEscultores} from "../../../../services/SculptorService.ts";

const SculptorList: React.FC = () => {
    const [escultores, setEscultores] = useState<any[]>([]);

    useEffect(() => {
        const fetchEscultores = async () => {
            try {
                const data = await getEscultores();
                setEscultores(data);
            } catch (error) {
                console.error('Error al obtener los escultores:', error);
            }
        };
        fetchEscultores();
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-6 py-8 px-4">
            <h2 className="w-full text-3xl font-bold text-center mb-8 text-white">Lista de Escultores</h2>
            {escultores.map((escultor, id) => (
                <div
                    key={id}
                    className="card shadow-xl h-[400px] w-[280px] group gap-[0.5em] rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 transform transition-all duration-500 hover:scale-105"
                >
                    <div className="absolute top-0 left-0 h-full w-full bg-[#111111] opacity-60"></div>

                    <div className="container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em]">
                        <h1 className="card_heading text-[1.5em] font-semibold text-transparent text-shadow-lg">
                            {escultor.nombre}
                        </h1>
                        <p className="text-[1.2em] text-transparent text-shadow-lg">
                            Escultor destacado
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-[0.5em]">
                        <div className="border-2 border-white rounded-[0.5em] text-white text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-white hover:text-[#222222] duration-300 cursor-pointer">
                            <p>{escultor.tematica}</p>
                        </div>
                    </div>

                    <p className="font-nunito block text-white font-light relative h-[0em] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden">
                        {escultor.biografia}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SculptorList;