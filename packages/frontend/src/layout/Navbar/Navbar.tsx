import { useState, useEffect, useRef } from "react";
import NavbarLogo from "./component/ui/NavbarLogo.tsx";
import NavbarLinks from "./component/ui/NavbarLinks.tsx";
import UserMenu from "../../features/user/components/UserMenu.tsx";
import Sidebar from "./Sidebar.tsx";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (videoRef.current) {
            // Adelantar el video 2 segundos antes de empezar
            videoRef.current.currentTime = 1.5; // Comienza desde el segundo 2
            videoRef.current.play(); // Luego reproduce el video
        }
    }, []);

    return (
        <div className="relative">
            {/* Video de fondo */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <video
                    ref={videoRef}
                    src="https://videos.pexels.com/video-files/1943483/1943483-uhd_2560_1440_25fps.mp4"
                    loop
                    muted
                    className="w-full h-full object-cover filter invert blur(10px) brightness(0.5)"
                />
            </div>

            {/* Navbar para pantallas grandes */}
            <nav className="hidden md:flex justify-between items-center p-4 text-white shadow-lg relative">
                <NavbarLogo />
                <NavbarLinks />
                <UserMenu />
            </nav>

            {/* Navbar para pantallas móviles */}
            <nav className="md:hidden shadow-md relative">
                <div className="flex justify-between items-center p-4">
                    <NavbarLogo />
                    <button onClick={toggleSidebar} className="text-white focus:outline-none hover:text-teal-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Sidebar y Overlay para pantallas móviles */}
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default Navbar;
