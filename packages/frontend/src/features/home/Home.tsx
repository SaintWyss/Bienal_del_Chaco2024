import DefaultLayout from "../../layout/DefaultLayout.tsx";
import Hero from "../../layout/hero/Hero.tsx";
import Maps from "../../layout/maps/Maps.tsx";
import EventListHome from "./components/EventListHome.tsx";
import SculptureListHome from "./components/SculptureListHome.tsx";
import SculptorListHome from "./components/SculptorListHome.tsx";


export default function Home() {
    return (
        <DefaultLayout>
            <Hero />
            <EventListHome />
            <SculptureListHome />
            <SculptorListHome />
            <Maps />
        </DefaultLayout>
    );
};


