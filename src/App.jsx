import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Landing from "./pages/landing/Index";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <img
        src="/bg-map.png"
        className="fixed top-0 left-0 w-full h-full bg-cover opacity-30 -z-10"
        alt=""
      />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#1a1a1a",
            },
            opacity: 0,
          },
          fpsLimit: 60,
          // interactivity: {
          //   events: {
          //     onClick: {
          //       enable: true,
          //       mode: "push",
          //     },
          //     onHover: {
          //       enable: true,
          //       mode: "repulse",
          //     },
          //     resize: true,
          //   },
          //   modes: {
          //     push: {
          //       quantity: 4,
          //     },
          //     repulse: {
          //       distance: 200,
          //       duration: 0.4,
          //     },
          //   },
          // },
          particles: {
            color: {
              value: "#c0c0c0",
            },
            links: {
              color: "#c0c0c0",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 20,
            },
            opacity: {
              value: 0.15,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Header />
      <Landing />
      <Footer />
    </>
  );
};

export default App;
