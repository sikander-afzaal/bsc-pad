import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import {
  faMediumM,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="wrapper py-[40px] md:py-[100px]">
      <div className="contain flex-col gap-4 sm:gap-6 justify-center items-center text-center">
        <h2 className="text-xl leading-[1.3] sm:text-[30px] lg:text-[40px] font-bold uppercase text-textGray">
          Pulse chain IS THE FIRST DECENTRALIZED IDO PLATFORM FOR THE PULSE
          CHAIN NETWORK.
        </h2>
        <p className="text-textGray uppercase opacity-60 text-base sm:text-lg lg:text-xl max-w-[800px]">
          pulsepad will empower crypto currency projects with the ability to
          distribute tokens and raise liquidity.
        </p>
        <div className="flex justify-center items-center gap-5 flex-wrap w-full">
          <button className="bg-primaryYellow sm:w-auto w-full max-w-[350px] sm:max-w-none text-white uppercase rounded-full text-base font-medium  min-w-[120px] px-5 py-[10px] hover:shadow-hoverBtn transition-shadow">
            View All Projects
          </button>
          <button className="bg-[#1FC7D4] sm:w-auto w-full max-w-[350px] sm:max-w-none text-white uppercase rounded-full text-base font-medium  min-w-[120px]  px-5 flex justify-center items-center gap-2 py-[10px] hover:shadow-pancakeSwap transition-shadow">
            BUY ON UNISWAP
          </button>
          <button className="bg-[#02bf02] sm:w-auto w-full max-w-[350px] sm:max-w-none text-white uppercase rounded-full text-base font-medium  min-w-[120px] px-5 py-[10px] hover:shadow-ido transition-shadow">
            Apply for ido
          </button>

          {/* <button className="bg-white max-w-[350px] sm:max-w-none  w-full sm:w-auto text-black uppercase rounded-full text-base font-medium  min-w-[120px] px-5 py-[10px] hover:shadow-fiat flex justify-center items-center gap-2 transition-shadow">
            <img src="/fiat2bnb.png" className="h-5 object-contain" alt="" />{" "}
            buy with fiat
          </button> */}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Button>
            <FontAwesomeIcon icon={faTelegramPlane} />
            Join us on Telegram
          </Button>
          <Button>
            <FontAwesomeIcon icon={faMediumM} />
            Follow our Medium
          </Button>
          <Button>
            <FontAwesomeIcon icon={faTwitter} />
            Follow our Medium
          </Button>
        </div>
        {/* <div className="flex mt-8 sm:flex-row flex-col sm:mt-20 justify-start items-center gap-3">
          <p className="uppercase text-textGray opacity-60 font-bold text-sm">
            Our Partners
          </p>
          <a href="#" target="blank">
            <img
              src="/chainlink.svg"
              className="h-[48px] object-contain"
              alt=""
            />
          </a>
          <a href="#" target="blank">
            <img
              src="/bluezilla.png"
              className="h-[48px] object-contain"
              alt=""
            />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
