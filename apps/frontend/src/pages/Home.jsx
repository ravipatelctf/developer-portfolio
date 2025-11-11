
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroArea from "../components/HeroArea";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";


export default function Home() {
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