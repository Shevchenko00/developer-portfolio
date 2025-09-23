import './App.css'
import type {JSX} from "react";
import Header from "./components/Header/Header.tsx";
import Divider from "./components/Divider/Divider.tsx";
import About from "./components/About/About.tsx";
import Portfolio from "./components/Portfolio/Portfolio.tsx";
import Certificate from "./components/Certificate/Certificate.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";

const App = ():JSX.Element => {
    return (
        <div className="app_container">
            <Header  />
            <Divider />
            <About />
            <Divider />
            <Portfolio />
            <Divider />
            <Certificate />
            <Divider />
            <Experience />
            <Divider />
            <Contact />
            <Footer/>
        </div>
    );
};
export default App
