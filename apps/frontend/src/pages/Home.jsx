import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroArea from "../components/HeroArea";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white">

            {/* Sticky Header */}
            <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
                <Header />
            </div>

            {/* Main Sections */}
            <div className="pt-10 sm:pt-14 space-y-20 sm:space-y-28">

                <section id="hero">
                    <HeroArea />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="techstack">
                    <TechStack />
                </section>

                <section id="connect">
                    <Connect />
                </section>

            </div>

            {/* Footer */}
            <Footer />
        </main>
    );
}
