import Hero from "../components/Hero"
import { Projects } from "../components/Projects"
import Filler from "../components/Filler"
import TechStack from "../components/TechStack"
import Experience from "../components/Experience"
import FooterReveal from "../components/FooterReveal"


const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white px-8 py-8">
            <main>
                <Hero />
                <Projects />
                <Filler />
                <TechStack />
                <Experience />
                <FooterReveal />
            </main>
        </div>
    )
}

export default Home