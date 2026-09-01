import { Dock, Navbar, Welcome } from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import TerminalWindow from "#windows/Terminal";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock/>

      <TerminalWindow/>
    </main>
  );
}

export default App