import Title from "../../components/Title";

const Tier = () => {
  return (
    <div className="wrapper py-[70px] md:py-[150px]">
      <div className="contain flex-col justify-center items-center gap-5">
        <div>
          <Title title="THE BSCPAD TIERED SYSTEM" back="Tiered System" />
          <p className="text-center text-textGray text-opacity-60 text-xl -mt-[30px] max-w-[800px]">
            BSCPad will showcase a fixed tier system based on the number of
            tokens staked. Lottery Tiers will share 20% of total raise and rest
            80% of the raise is assigned for guaranteed allocation tiers based
            on the pool weights assigned.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tier;
