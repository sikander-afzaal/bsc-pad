const TierBox = ({
  tier,
  requirement,
  length,
  twitter,
  lottery,
  gurantee,
  weight,
}) => {
  return (
    <div className="w-full relative">
      <div className="bg-rainbowGr -z-10 absolute rounded-[10px] -inset-0.5"></div>
      <div className="flex  flex-col text-center justify-start bg-[#1f1f21] rounded-[10px] shadow-round  p-[30px] w-full items-center gap-5 hover:scale-[1.03] transition-all duration-300">
        <p className="text-transparent bg-rainbowGr bg-clip-text  border-opacity-25 font-bold text-[26px] w-full text-center border-b border-solid border-textGray pb-4">
          {tier}
        </p>
        <div>
          <p className="text-white text-opacity-60 text-base font-normal">
            Staking Requirement
          </p>
          <p className="text-white  text-[36px] font-medium">{requirement}</p>
        </div>
        <div>
          <p className="text-white text-opacity-60 text-base font-normal">
            Staking Length Required
          </p>
          <p className="text-white  text-xl font-medium">{length}</p>
        </div>
        <div>
          <p className="text-white text-opacity-60 text-base font-normal">
            Whitelist Requirement Twitter
          </p>
          <p className="text-white  text-xl font-medium">{twitter}</p>
        </div>
        {lottery && (
          <div className="border-textGray border-opacity-25 w-full pb-4 border-b border-solid">
            <p className="text-white text-opacity-60 text-base font-normal">
              Lottery Tickets
            </p>
            <p className="text-white  text-xl font-medium">{lottery}</p>
          </div>
        )}
        {gurantee && (
          <div>
            <p className="text-white text-opacity-60 text-base font-normal">
              Guaranteed Allocation
            </p>
            <p className="text-white  text-xl font-medium">{gurantee}</p>
          </div>
        )}
        {weight && (
          <div className="border-textGray border-opacity-25 w-full pb-4 border-b border-solid">
            <p className="text-white text-opacity-60 text-base font-normal">
              Guaranteed Allocation
            </p>
            <p className="text-white  text-xl font-medium">{weight}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TierBox;
