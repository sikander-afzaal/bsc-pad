const Title = ({ title, back }) => {
  return (
    <div className="w-full mb-[60px] flex justify-center items-center relative">
      <h3 className="bg-title whitespace-nowrap font-bold text-[124px] bg-clip-text text-transparent absolute top-1/2 left-1/2 leading-[0.9] uppercase -translate-x-1/2  -translate-y-1/2  opacity-[0.06] ">
        {back}
      </h3>
      <h2 className="text-2xl text-center sm:text-3xl md:text-5xl uppercase  text-textGray font-bold">
        {title}
      </h2>
    </div>
  );
};

export default Title;
