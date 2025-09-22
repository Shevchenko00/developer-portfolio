import './App.css'
import type {JSX} from "react";
import Header from "./components/Header/Header.tsx";
import Divider from "./components/Divider/Divider.tsx";
import About from "./components/About/About.tsx";
import Portfolio from "./components/Portfolio/Portfolio.tsx";
import Certificate from "./components/Certificate/Certificate.tsx";
import Experience from "./components/Experience/Experience.tsx";

const App = ():JSX.Element => {
    return (
        <>
            <Header/>
            <Divider/>
            <About/>
            <Divider/>
            <Portfolio/>
            <Divider/>
            <Certificate/>
            <Divider/>
            <Experience/>
            <Divider/>

        </>
    );
}
export default App
