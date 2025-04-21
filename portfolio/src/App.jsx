import { useState, useEffect } from "react";
import Nav from "./assets/components/nav/Nav.jsx";
import Intro from "./assets/components/intro/Intro.jsx";
import About from "./assets/components/about/About.jsx";
import Project from "./assets/components/projects/Project.jsx";
import LetsTalk from "./assets/components/lets-talk/LetsTalk.jsx";
import Preloader from "./assets/components/preloader/Preloader.jsx";
import WhatsappMobile from "./assets/components/whatsapp/WhatsappMobile.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching resources)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000); // You can change this delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Nav />
          <Intro className="view" />
          <About className="view" />
          <Project className="view" />
          <WhatsappMobile />
          <LetsTalk className="view" />
        </>
      )}
    </>
  );
}

export default App;
