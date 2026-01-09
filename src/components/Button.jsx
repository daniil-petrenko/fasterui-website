import clsx from "clsx";

const Button = ({ title, isPurple, className }) => {
   return (
      <>
         <button className={clsx("cursor-pointer py-3 font-bold leading-[150%] text-center text-white font-secondary transition-colors rounded-[10px]", isPurple ? "bg-purple hover:bg-[#403ad6]" : "bg-main hover:bg-purple", className)}>{title}</button>
      </>
   )
};

export default Button;
