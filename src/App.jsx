import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Dock, Home, Navbar, Welcome } from "#components";
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Home />
            <Dock />
            <Text />
            <Image />
            <Photos />
            <Resume />
            <Safari />
            <Finder />
            <Contact />
            <Terminal />
        </main>
    );
};

export default App;
