import heroBg from '@assets/images/hero/heroBg.png';

import Button from '@/components/Button';

const Hero = ({ className }) => {
   return (
      <section className={className}>
         <div className="cnt flex flex-col items-center relative pt-47 pb-38.75 max-xs:pb-20 max-sm:pb-30">
            <h1 className="font-bold text-[73px] leading-[100%] text-center mb-9 max-w-191 max-sm:text-[60px] max-xs:text-[40px]">
               Awesome UI Dark Template for Webflow Agency
            </h1>
            <Button title="Get in Touch" isPurple={false} className="px-14.5" />
            <div className="absolute top-0 left-12.5 -z-1 max-sm:top-[10%] max-sm2:top-[20%] max-xs:top-[30%] max-xs:left-0 max-xs:w-full">
               <img src={heroBg} alt="Image" />
            </div>
         </div>
      </section>
   );
};

export default Hero;
