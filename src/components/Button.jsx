const Button = ({ children }) => {
  return (
    <button className="flex w-full max-w-[350px] sm:w-auto sm:text-sm text-lg font-normal text-white hover:text-white bg-rainbowGr px-[18px] rounded-full py-1  transition-all  duration-200 justify-center items-center gap-1">
      {children}
    </button>
  );
};

export default Button;
