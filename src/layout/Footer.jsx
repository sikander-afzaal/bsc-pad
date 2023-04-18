const Footer = () => {
  return (
    <div className="wrapper py-4">
      <div className="contain sm:flex-row flex-col justify-between items-center gap-2">
        <p className="text-sm text-[#6c757d]">
          Copyright © 2023. All Rights Reserved by sthPad
        </p>
        <p className="text-sm text-[#6c757d]">v1.3.6</p>
        <div className="flex justify-center items-center gap-3">
          <a
            href="#"
            target="blank"
            className="text-white underline text-sm text-opacity-80"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            target="blank"
            className="text-white underline text-sm text-opacity-80"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
