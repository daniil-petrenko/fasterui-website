import clsx from "clsx";

const Button = ({ title, className }) => {
   return (
      <>
         <button className={clsx("cursor-pointer py-3 px-9 font-bold leading-[150%] text-center text-white font-secondary bg-purple transition-colors hover:bg-[#403ad6] rounded-[10px]", className)}>{title}</button>
      </>
   )
};

export default Button;
