import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { Projects } from "./components/Projects"
import Filler from "./components/Filler"
import TechStack from "./components/TechStack"
import Experience from "./components/Experience"
import FooterReveal from "./components/FooterReveal"
import Footer from "./components/Footer"

const App = () => {

  return (
    <div className="min-h-screen bg-black text-white px-8 py-8">
      <main>
        <Cursor />
        <Navbar />
        <Hero />
        <Projects />
        <Filler />
        <TechStack />
        <Experience />
        <FooterReveal />
        <Footer />
      </main>
    </div>
  )
}

export default App
