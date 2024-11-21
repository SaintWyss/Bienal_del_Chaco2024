import React from "react";
import NavbarLinks from "./NavbarLinks";
import { sidebarStyles } from "../styles/SidebarStyles";
import { INavbarLink } from "../interfaces/INavigationLink";

interface SidebarProps {
    isExpanded: boolean;
    closeSidebar: () => void;
    links: INavbarLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, closeSidebar, links }) => {
    return (
        <>
            {/* Sidebar contenedor */}
            <div
                className={`${sidebarStyles.container} ${
                    isExpanded ? sidebarStyles.expanded : sidebarStyles.collapsed
                }`}
            >
                {/* Enlaces del Navbar */}
                <NavbarLinks
                    links={links}
                    closeNavbar={closeSidebar}
                    isVertical={true}
                />
            </div>
        </>
    );
};

export default Sidebar;
