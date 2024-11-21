import React, { useState } from "react";
import { INavbarLink } from "./interfaces/INavigationLink";
import { navbarStyles } from "./styles/NavbarStyles";
import NavbarToggleButton from "./components/NavbarToggleButton";
import NavbarLinks from "./components/NavbarLinks";
import Sidebar from "./components/Sidebar.tsx"; // Usar el componente aquí

const Navbar: React.FC<{ links: INavbarLink[] }> = ({ links }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {/* Navbar para pantallas grandes */}
            <header className={`${navbarStyles.container} hidden md:flex`}>
                <div className="flex items-center gap-2 relative">
                    <NavbarToggleButton
                        isExpanded={isExpanded}
                        toggleNavbar={toggleNavbar}
                        className="md:w-10 md:h-10 w-8 h-8 " // Ajustes para tamaños móviles
                    />
                </div>

                {/* Esto es el navbar */}

                <nav
                    className={`${navbarStyles.nav} ${
                        isExpanded ? navbarStyles.expanded : navbarStyles.collapsed
                    }`}
                >
                    {/* Fondo con blur (solo cuando está expandido) */}
                    {isExpanded && (
                        <div className="absolute inset-0 backdrop-blur-md -z-10"></div>
                    )}
                    <div className="flex justify-end gap-20 pr-20 "> {/* Botones alineados a la derecha */}
                        <NavbarLinks
                            links={links}
                            closeNavbar={() => setIsExpanded(false)}
                    />
                    </div>
                </nav>

            </header>
            {/* Sidebar para pantallas pequeñas */}
            <div className="md:hidden">
            <Sidebar
                isExpanded={isExpanded}
                closeSidebar={toggleNavbar}
                links={links}
            />
            <NavbarToggleButton
                isExpanded={isExpanded}
                toggleNavbar={toggleNavbar}
                className="md:w-10 md:h-10 w-8 h-8" // Ajustes para tamaños móviles
            />
        </div>
    </>
    );
};

export default Navbar;