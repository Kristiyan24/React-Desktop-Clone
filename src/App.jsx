import { Dock, Navbar, Welcome } from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { ResumeWindow, SafariWindow, FinderWindow, TerminalWindow, } from "#windows"

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock/>

      <ResumeWindow/>
      <SafariWindow/>
      <FinderWindow/>
      <TerminalWindow/>
    </main>
  );
}

export default App