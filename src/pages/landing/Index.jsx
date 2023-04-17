import About from "./About";
import Hero from "./Hero";
import Tier from "./Tier";

const Landing = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Tier />
    </div>
  );
};

export default Landing;
