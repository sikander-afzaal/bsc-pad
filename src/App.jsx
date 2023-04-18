import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Landing from "./pages/landing/Index";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
      <button
        onClick={() => window.scrollTo(0, 0)}
        className="rounded-full z-20 text-xl sm:text-2xl cursor-pointer aspect-square grid place-items-center bg-white text-primaryYellow w-[40px] sm:w-[50px] fixed bottom-4 sm:bottom-8 right-4 sm:right-8"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
};

export default App;
