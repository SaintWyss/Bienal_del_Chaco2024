import React from "react";
import HomeButton from "./HomeButton";

interface NavbarToggleButtonProps {
    isExpanded: boolean;
    toggleNavbar: () => void;
    className?: string;
}

const NavbarToggleButton: React.FC<NavbarToggleButtonProps> = ({ isExpanded, toggleNavbar }) => {
    return (
        <div className="flex items-center gap-2 relative m-[25px] rounded-lg backdrop-blur-md bg-white/30 p-2 shadow-lg z-50">
            {/* Botón para ir al Home */}
            <HomeButton />

            {/* Botón para alternar el Navbar */}
            <button
                onClick={toggleNavbar}
                className="flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none hover:bg-white/50 "
            >
                <span className="text-2xl font-bold text-primary">
                    {isExpanded ? "<" : ">"}
                </span>
            </button>
        </div>
    );
};

export default NavbarToggleButton;
