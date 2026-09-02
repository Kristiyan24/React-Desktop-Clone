import { Dock, Navbar, Welcome } from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { TerminalWindow, SafariWindow, ResumeWindow  } from "#windows"

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock/>

      <SafariWindow/>
      <TerminalWindow/>
      <ResumeWindow/>
    </main>
  );
}

export default App