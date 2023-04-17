const Button = ({ children }) => {
  return (
    <button className="flex w-full max-w-[350px] sm:w-auto sm:text-sm text-lg font-normal text-primaryYellow hover:text-white bg-transparent px-[18px] rounded-full py-1 border border-solid border-primaryYellow hover:shadow-hoverBtn transition-all hover:bg-yellowGr duration-200 justify-center items-center gap-1">
      {children}
    </button>
  );
};

export default Button;
