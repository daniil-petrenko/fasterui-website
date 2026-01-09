import logo from "@assets/images/logo.svg"
import Button from "@/components/Button";
import { navigation } from "@/constants";

const Header = () => {
   return (
      <header className="fixed top-0 left-0 w-full z-200">
         <div className="cnt flex justify-between items-center gap-8 py-4">
            <a href="">
               <img src={logo} alt="Logo" />
            </a>
            <div>
               <nav className="bg-[rgba(255,255,255,0.6)] py-5.5 px-14 rounded-[20px] border border-white">
                  <ul className="flex items-center gap-11.75">
                     {navigation.map(item => (
                        <li key={item.id}>
                           <a href="" className={`font-bold leading-[150%] hover:text-purple transition-colors ${item.current ? "text-main" : "text-gray font-normal"}`}>{item.title}</a>
                        </li>
                     ))}
                  </ul>
               </nav>
            </div>
            <div className="flex items-center gap-4.75">
               <a href="" className="leading-[150%] text-gray font-secondary opacity-80 hover:text-purple transition-colors">Sign In</a>
               <Button title="Sign Up" />
            </div>
         </div>
      </header>
   );
};

export default Header;
