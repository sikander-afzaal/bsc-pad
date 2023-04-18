import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../components/Title";
import { faGlobe, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="wrapper pt-[70px] md:pt-[150px] pb-20">
      <div className="contain justify-start items-center flex-col gap-5">
        <Title back="Contact Us" title="Contact" />
        <div className="w-[350px] mt-5 aspect-square relative ">
          <div className=" absolute inset-0 border-4 border-solid rounded-full border-[rgba(255,255,255,0.1)] border-t-[rgba(255,255,255,0.75)] border-r-[rgba(255,255,255,0.75)] animate-spinClock"></div>
          <div className="absolute inset-10 border-4 border-solid rounded-full border-[rgba(255,255,255,0.1)] border-t-[rgba(255,255,255,0.75)] border-b-[rgba(255,255,255,0.75)] animate-spinAntiClock "></div>
          <img
            src="/contact-bg.png"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            alt=""
          />
          <div className="flex absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 justify-center items-start flex-col gap-2">
            <div className="flex justify-start items-center gap-3">
              <div className="rounded-full bg-white bg-opacity-10 shadow-contactIco w-[32px] aspect-square grid place-items-center">
                <FontAwesomeIcon
                  icon={faHeadphones}
                  className="text-white text-base"
                />
              </div>
              <a
                className="text-sm font-normal text-white hover:underline"
                href="#"
                target="blank"
              >
                Contact Support
              </a>
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="rounded-full bg-white bg-opacity-10 shadow-contactIco w-[32px] aspect-square grid place-items-center">
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="text-white text-base"
                />
              </div>
              <a
                className="text-sm font-normal text-white hover:underline"
                href="#"
                target="blank"
              >
                Join us on Telegram
              </a>
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="rounded-full bg-white bg-opacity-10 shadow-contactIco w-[32px] aspect-square grid place-items-center">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white text-base"
                />
              </div>
              <a
                className="text-sm font-normal text-white hover:underline"
                href="#"
                target="blank"
              >
                Follow our Twitter
              </a>
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="rounded-full bg-white bg-opacity-10 shadow-contactIco w-[32px] aspect-square grid place-items-center">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-white text-base"
                />
              </div>
              <a
                className="text-sm font-normal text-white hover:underline"
                href="#"
                target="blank"
              >
                www.pulsepad.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
