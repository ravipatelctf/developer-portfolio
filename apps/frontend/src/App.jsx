
import Header from "./pages/Header";
import HeroArea from "./pages/HeroArea";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Connect from "./pages/Connect";
import Footer from "./pages/Footer";

export default function App() {
    return (
        <main>
            <div className="sticky-top">
                <Header />
                <hr className="bg-primary border border-top m-0" />
            </div>
            <div className="py-5">
                <HeroArea />
                <Projects />
                <TechStack />
                <Connect />
                <Footer />
            </div>
        </main>
    )
}