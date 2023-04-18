import Title from "../../components/Title";

const Legal = () => {
  return (
    <div className="wrapper mt-[80px] sm:mt-[108px]">
      <div className="contain flex-col justify-center items-center gap-5">
        <Title back="PARTNER" title="Legal Partner" />
        <div className="bg-[#1f1f21] rounded-xl w-full px-5 py-[30px] text-center flelx justify-center items-center flex-col flex gap-5">
          <img
            src="/silk.png"
            className="w-full max-w-[300px] object-contain"
            alt=""
          />

          <p className="text-white text-base font-normal text-opacity-60">
            Silk Legal is a boutique law firm specializing in FinTech and
            Cryptocurrency. We combine a deep understanding of blockchain
            technology with an expert knowledge of international regulations to
            analyze issues, risks and opportunities. Silk Legal is a proud
            member of Global Digital Finance, the leading global association of
            digital asset companies advocating for and accelerating the adoption
            of best practices for digital assets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
