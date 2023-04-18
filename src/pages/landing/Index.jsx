import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Legal from "./Legal";
import Partners from "./Partners";
import Tier from "./Tier";

const Landing = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Tier />
      {/* <Partners /> */}
      {/* <Legal /> */}
      <Contact />
    </div>
  );
};

export default Landing;
