import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import { About } from "./pages/About"
import Blogs from "./pages/Blogs"
import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"


function App() {

  const location = useLocation()

  return (
    <>
      <Cursor />
      <ScrollToTop />
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
