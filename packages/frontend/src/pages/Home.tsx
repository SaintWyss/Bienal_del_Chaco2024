import DefaultLayout from "../layout/DefaultLayout.tsx";
import Hero from "../layout/hero/Hero.tsx";
import Maps from "../layout/maps/Maps.tsx";
import EventList from "../features/events/components/EventList.tsx";
import SculptorList from "../features/sculptors/components/SculptorList.tsx";
import SculptureList from "../features/sculptures/components/SculptureList.tsx";


export default function Home() {
    return (
        <DefaultLayout>
            <Hero />
            <EventList />
            <SculptureList />
            <SculptorList />
            <Maps />
        </DefaultLayout>
    );
};


