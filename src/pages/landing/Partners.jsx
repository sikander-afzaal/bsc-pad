import Title from "../../components/Title";
import Button from "../../components/Button";

const Partners = () => {
  return (
    <div className="wrapper ">
      <div className="contain flex-col justify-center items-center gap-5">
        <Title back="PARTNER" title="INCUBATOR AND INVESTMENT PARTNER" />
        <div className="bg-[#1f1f21] rounded-xl w-full px-5 py-[30px] text-center flelx justify-center items-center flex-col flex gap-5">
          <img
            src="/bluezilla.png"
            className="w-full max-w-[290px] object-contain"
            alt=""
          />
          <p className="text-white text-base font-normal text-opacity-60">
            We specialize in taking your innovative and new idea from concept to
            completion through our market leading advisory, investment,
            development, influencer marketing and legal support services.
          </p>
          <p className="text-white text-base font-normal text-opacity-60">
            We are the only VC with in house developers, designers, marketers,
            influencers, traders, legal and launch pads.
          </p>
          <p className="text-white text-base font-normal text-opacity-60">
            We help by not only bringing capital and partners, but every aspect
            of your project from tokenomics to post launch marking.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
