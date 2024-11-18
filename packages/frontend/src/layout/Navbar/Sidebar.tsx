import SidebarLinks from "./component/ui/SidebarLinks.tsx";


interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
    return (
        <>
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-64 h-full z-50 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-500 shadow-xl`}
            >
                {/* Video de fondo en el Sidebar */}
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <video
                        src="https://videos.pexels.com/video-files/1943483/1943483-uhd_2560_1440_25fps.mp4"
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover filter invert blur(10px) brightness(0.5)"
                    />
                </div>

                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 text-gray-100 hover:text-white focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-8 w-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Enlaces del Sidebar */}
                <SidebarLinks />
            </div>

            {/* Overlay oscuro para cerrar el sidebar */}
            {isOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-40 z-40"></div>}
        </>
    );
}

export default Sidebar;