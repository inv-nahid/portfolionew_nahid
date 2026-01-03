import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import { About } from "./pages/About"
import Blogs from "./pages/Blogs"
import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Particles from "./components/Particles"


function App() {

  const location = useLocation()

  return (
    <>
      <Cursor />
      <ScrollToTop />
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
