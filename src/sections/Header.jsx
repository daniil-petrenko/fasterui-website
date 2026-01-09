import logo from '@assets/images/logo.svg';
import Button from '@/components/Button';
import { navigation } from '@/constants';

import { useMediaQuery } from 'react-responsive';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { useEffect } from 'react';
import clsx from 'clsx';

import { useState } from 'react';

const Header = () => {
   const [hasScrolled, setHasScrolled] = useState(false);
   const [openNavigation, setOpenNavigation] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setHasScrolled(window.scrollY > 32);
      }

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      }

   }, []);

   const toggleNavigation = () => {
      if (openNavigation) {
         setOpenNavigation(false);
         enablePageScroll();
      } else {
         setOpenNavigation(true);
         disablePageScroll();
      }
   };

   const isMobile = useMediaQuery({ maxWidth: 479 });

   return (
      <header className={clsx("fixed top-0 left-0 w-full z-200 transition-colors duration-500", hasScrolled && "bg-[rgba(245,248,255,0.9)]")}>
         <div className="cnt flex justify-between items-center gap-8 py-4 max-md:gap-2 max-sm2:gap-0">
            <a href="" className="max-md:flex-1 max-md:pr-5">
               <img src={logo} alt="Logo" />
            </a>
            <div>
               <nav
                  className={clsx(
                     `bg-[rgba(255,255,255,0.6)] py-5.5 px-14 rounded-[20px] border border-white max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:z-100 fixed top-0 left-0 right-0 bottom-0 md:static max-md:bg-[#f5f8ff]
                     max-md:m-auto max-md:h-screen max-md:w-full max-md:-translate-x-full max-md:transition-transform`,
                     openNavigation ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
                  )}
               >
                  <ul className="flex items-center gap-11.75 max-md:gap-6 max-xs:mb-4 max-md:flex-col">
                     {navigation.map((item) => (
                        <li key={item.id}>
                           <a
                              href=""
                              className={`font-bold max-md:text-3xl max-sm2:text-2xl leading-[150%] hover:text-purple transition-colors ${item.current ? 'text-main' : 'text-gray font-normal'}`}
                           >
                              {item.title}
                           </a>
                        </li>
                     ))}
                  </ul>
                  {isMobile && (
                     <div className="flex items-center gap-4.75 max-sm2:gap-3">
                        <a
                           href=""
                           className="leading-[150%] text-gray font-secondary opacity-80 hover:text-purple transition-colors"
                        >
                           Sign In
                        </a>
                        <Button title="Sign Up" isPurple={true} className="px-9 max-sm2:px-6" />
                     </div>
                  )}
               </nav>
            </div>
            {!isMobile && (
               <div className="flex items-center gap-4.75 max-sm2:gap-3">
                  <a
                     href=""
                     className="leading-[150%] text-gray font-secondary opacity-80 hover:text-purple transition-colors"
                  >
                     Sign In
                  </a>
                  <Button title="Sign Up" isPurple={true} className="px-9 max-sm2:px-6" />
               </div>
            )}

            <button
               onClick={toggleNavigation}
               className="relative z-110 block h-5 w-8 ml-5 md:hidden"
            >
               <span
                  className={`absolute top-0 left-0 h-px w-full bg-black transition-transform ${openNavigation && 'translate-y-2 rotate-45'}`}
               ></span>
               <span
                  className={`absolute top-1/2 left-0 h-px w-full bg-black transition-transform ${openNavigation && 'rotate-45 opacity-0'}`}
               ></span>
               <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-black transition-transform ${openNavigation && '-translate-y-2.75 -rotate-45'}`}
               ></span>
            </button>
         </div>
      </header>
   );
};

export default Header;
