import { INavbarLink } from "./INavigationLink";

export interface NavbarLinksProps {
    links: INavbarLink[];
    closeNavbar: () => void;
    isVertical?: boolean; // Para manejo de disposición en Desktop o Mobile
}