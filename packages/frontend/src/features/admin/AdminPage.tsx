import Footer from "../../layout/footer/Footer.tsx";
import { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar/Navbar.tsx";
import Menu from "./components/Menu.tsx";
import EventManagement from "./components/event/EventManagement.tsx";
import SculptorManagement from "./components/sculptor/SculptorManagement.tsx";
import useAuth from "../auth/hooks/useAuth.ts";
import SculptureManagement from "./components/sculpture/SculptureManagement.tsx";

const AdminPage: React.FC = () => {
    const { fetchUser } = useAuth();
    const [selectedOption, setSelectedOption] = useState<'events' | 'sculptures' | 'sculptors'>('events');

    useEffect(() => {
        const fetch = async () => {
            try {
                await fetchUser();
                console.log('User fetched successfully');
            } catch (err) {
                console.error('Error in AdminPage useEffect:', err);
            }
        };

        fetch(); // La promesa es manejada aquí
    }, [fetchUser]);

    return (
        <div className="relative min-h-screen">
            <div className="relative min-h-screen">
                {/* Video de fondo */}
                <div className="absolute inset-0 overflow-hidden -z-10">
                    <video
                        src="https://www.bienaldelchaco.org/2024/wp-content/uploads/2024/05/B24-web-slide-institucional-nuevo-c.mp4"
                        autoPlay
                        loop
                        muted
                        className="w-full max-h-max py-7 object-cover"
                    />
                </div>

                <Navbar/>
                <Menu onSelect={setSelectedOption} selectedSection={selectedOption}/>
                {selectedOption === 'events' && <EventManagement/>}
                {selectedOption === 'sculptures' && <SculptureManagement/>}
                {selectedOption === 'sculptors' && <SculptorManagement/>}

            </div>
            <Footer/>
        </div>
    );
};

export default AdminPage;