import Navbar from "./Navbar/Navbar.tsx";
import { INavbarLink } from "./Navbar/interfaces/INavigationLink.ts";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    const navbarLinks: INavbarLink[] = [
        { id: "hero", label: "Inicio" },
        { id: "eventos", label: "Eventos" },
        { id: "esculturas", label: "Esculturas" },
        { id: "escultores", label: "Escultores" },
        { id: "maps", label: "Maps" },
    ];

    return (
        <div>
            <Navbar links={navbarLinks} />
            <main>{children}</main>
        </div>
    );
}