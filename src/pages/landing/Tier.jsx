import Title from "../../components/Title";
import TierBox from "../../components/TierBox";

const Tier = () => {
  return (
    <div className="wrapper py-[70px] md:py-[150px]">
      <div className="contain flex-col justify-center items-center gap-5">
        <div>
          <Title title="THE sthPAD TIERED SYSTEM" back="Tiered System" />
          <p className="text-center text-textGray text-opacity-60 text-xl -mt-[30px] max-w-[800px]">
            sthPad will showcase a fixed tier system based on the number of
            tokens staked. Lottery Tiers will share 20% of total raise and rest
            80% of the raise is assigned for guaranteed allocation tiers based
            on the pool weights assigned.
          </p>
        </div>
        <h4 className="text-textGray text-center  uppercase text-xl sm:text-[28px] font-bold my-3">
          Round 1 - Allocation round
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
          <TierBox
            tier="Bronze"
            requirement="100"
            length="3 hours before Allocation Round opens"
            twitter="Staking Length Required"
            lottery="1"
          />
          <TierBox
            tier="Silver"
            requirement="2500"
            length="3 hours before Allocation Round opens"
            twitter="Like, Comment & Retweet"
            lottery="3"
          />
          <TierBox
            tier="Gold"
            requirement="5000"
            length="3 hours before Allocation Round opens"
            twitter="Like, Comment & Retweet"
            lottery="7"
          />
          <TierBox
            tier="Platinum"
            requirement="10000"
            length="3 hours before Allocation Round opens"
            twitter="None"
            gurantee="Yes"
            weight="10"
          />
          <TierBox
            tier="Diamond"
            requirement="25000"
            length="3 hours before Allocation Round opens"
            twitter="None"
            gurantee="Yes"
            weight="30"
          />
          <TierBox
            tier="Blue Diamond"
            requirement="75000"
            length="3 hours before Allocation Round opens"
            twitter="None"
            gurantee="Yes"
            weight="60+ Private Allocations"
          />
        </div>
        <p className="text-white text-center mt-3 text-opacity-60">
          In the first round, called the “Allocation Round”, users can purchase
          the amount allotted to them based on their tier.
        </p>
        <h4 className="text-textGray text-center  uppercase text-xl sm:text-[28px] font-bold mt-5 mb-3">
          ROUND 2 - FCFS ROUND
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5  w-full gap-5 place-items-center">
          <img
            src="/round2.png"
            className="w-full object-contain max-w-[600px] "
            alt=""
          />
          <div className="flex justify-start items-start flex-col gap-4">
            <p className="text-white text-opacity-60 ">
              In round 2, the unsold tokens from the first round are made
              available on a FCFS basis, only to guaranteed tiers (Platinum and
              above). These members can purchase an additional amount that is
              determined by a tier-based formula. This round is open until all
              tokens are sold, typically lasting for only a few minutes. After
              all the tokens are sold, the IDO is concluded.
            </p>
            <p className="text-white text-opacity-75 font-bold ">
              WE WILL BE COLLECTING BOTH DATA AND FEEDBACK ON THE IDO STRUCTURE
              IN ORDER TO OPTIMIZE THE SYSTEM OVER TIME AS WELL AS TAKING INTO
              CONSIDERATION COMMUNITY FEEDBACK AND POTENTIAL DAO PROPOSALS.
            </p>
            <p className="text-white text-opacity-60 ">
              Our system is a predictable and provably fair system giving our
              users the proper incentives to accumulate and hold tokens and
              support each and every project launched. Over time, we will tweak
              weights, add new tiers and change other parameters as necessary to
              keep the system functional, competitive and rewarding for all
              community members.
            </p>
            <p className="text-white text-opacity-60 ">
              $sthPAD is the next evolution of blockchain launchpads solving the
              fundamental flaws that plague existing launchpads. This platform
              benefits all holders of the token and allows for fair launches
              giving traders of all sizes the opportunity to invest in the best
              upcoming Binance Smart Chain projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tier;
