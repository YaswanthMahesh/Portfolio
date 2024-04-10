import About from "./About"
import Contact from "./Contact";
import Experiences from "./Experiences";
import Home from "./Home";
import Projects from "./Projects";


const BodyComponent = () => {
    return (
        <div>
            <Home />
            <About />
            <Experiences />
            <Projects />
            <Contact />
        </div>
    )
}

export default BodyComponent;