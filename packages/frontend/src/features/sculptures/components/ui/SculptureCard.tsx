import React from 'react';

interface SculptureCardProps {
    nombre: string;
    descripcion: string;
    fechaCreacion: string;
    tematica: string;
    id: string;
}

const SculptureCard: React.FC<SculptureCardProps> = ({ nombre, descripcion, tematica, id }) => {

    return (
        <div className="card shadow-[0px_4px_16px_px_#367E08] h-[400px] w-[280px] group gap-[0.5em] rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-[#111111]"></div>

            <div className="container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em]">
                <div className="h-fit w-full">
                    <h1 className="card_heading text-[1.5em] tracking-[.2em] font-weight: 900; -webkit-text-fill-color: transparent; -webkit-text-stroke-width: 1px; text-shadow: 0 0 7px #fff;">
                        {id}: {nombre}
                    </h1>
                    <p className="text-[1.2em] font-weight: 900; -webkit-text-fill-color: transparent; -webkit-text-stroke-width: 1px; text-shadow: 0 0 7px #fff;">
                        By {nombre}
                    </p>
                </div>

                <div className="flex justify-center items-center h-fit w-fit gap-[0.5em]">
                    <div className="border-2 border-white rounded-[0.5em] text-white font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-white hover:text-[#222222] duration-300 cursor-pointer">
                        <p>{tematica}</p>
                    </div>
                </div>
            </div>
            <p className="font-nunito block text-white font-light relative h-[0em] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden">
                {descripcion}
            </p>
        </div>

    );
};

export default SculptureCard;
