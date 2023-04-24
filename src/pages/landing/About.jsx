import Title from "../../components/Title";

const About = () => {
  return (
    <div className="wrapper py-[70px] md:py-[150px]">
      <div className="contain  flex-col justify-start items-center gap-5">
        <Title title="About us" back="What and why" />
        <div className="grid sm:mt-6 grid-cols-1 xl:grid-cols-2 w-full gap-20 md:gap-[120px] xl:gap-5">
          <div className="flex justify-start items-start flex-col gap-4">
            <div>
              <h4 className="uppercase text-white text-opacity-60 text-base font-medium">
                What is PulsePad
              </h4>
              <h3 className="text-lg font-medium text-textGray ">
                The Pulse Launch Pad is the first decentralized IDO platform for
                the Pulse Chain Network.
              </h3>
              <p className="text-base text-white text-opacity-60">
                PulsePad will empower crypto currency projects with the ability
                to distribute tokens and raise liquidity.
              </p>
            </div>
            <div>
              <h4 className="uppercase text-white text-opacity-60 text-base font-medium">
                WHY CHOOSE US?
              </h4>
              <h3 className="text-lg font-medium text-textGray ">
                PulsePad has found a solution to incentivize and reward all
                token stakers in a way that is inclusive and with a low barrier
                to entry.
              </h3>
              <p className="text-base text-white text-opacity-60">
                The fundamental flaws of existing launchpads is that acquiring
                enough tokens to participate in the ecosystem is prohibitive,
                and even if you do stake the tokens, you are not guaranteed an
                allocation spot. They are based on a first come first serve
                basis where automated bots can fill the whitelist spots in a
                matter of seconds. PulsePad is creating fair decentralized
                launches, you can choose between a lottery tier or a guaranteed
                allocation tier and if you win the lottery you get a guaranteed
                allocation in the first round (Allocation round).
              </p>
              <p className="text-base text-white text-opacity-60">
                The hallmark of the PulsePad is a two-round system that makes
                every tier level guaranteed an allocation. There is no first
                come first serve or bots; only fair distributed rewards for all
                participants.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-full relative">
            <div className="w-[300px] sm:w-[500px] aspect-square absolute -translate-x-1/2 -translate-y-1/2 -z-10 top-1/2 left-1/2">
              <div className=" absolute inset-0 border-4 border-solid rounded-full border-[rgba(255,255,255,0.1)] border-t-primaryYellow border-r-primaryYellow animate-spinClock"></div>
              <div className="absolute inset-10 border-4 border-solid rounded-full border-[rgba(255,255,255,0.1)] border-t-primaryYellow border-b-primaryYellow animate-spinAntiClock "></div>
            </div>
            {/* <img
              src="/about-img.png"
              className="w-full object-contain max-w-[400px] md:max-w-[580px]"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
