import Footer from "./footer/Footer.tsx";
import Navbar from "./Navbar/Navbar.tsx";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-base-100 text-neutral">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
