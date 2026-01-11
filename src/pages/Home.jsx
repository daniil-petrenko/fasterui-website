import MainLayout from '@/layouts/MainLayout/MainLayout';
import Check from '@/sections/Check';
import Faq from '@/sections/Faq';
import Hero from '@/sections/Hero';
import Pricing from '@/sections/Pricing';
import What from '@/sections/What';
import Touch from '@/sections/Touch';
import Footer from '@/sections/Footer';

const Home = () => {
   return (
      <MainLayout>
         <Hero />
         <What className="pb-27.5 max-sm:pb-20 max-xs:pb-10" />
         <Check className="pt-27.5 pb-10.75 max-sm:pt-20 max-xs:pt-8" />
         <Pricing className="pt-10.75 pb-21.75 max-sm:pb-15 mx-xs:pt-8 max-xs:pb-6" />
         <Faq className="pt-21.75 max-sm:pt-15 mx-xs:pt-6 pb-[117.5px] max-sm:pb-18 max-sm2:pb-12.5 max-xs:pb-7.5" />
         <Touch className="pt-[117.5px] pb-39 max-sm:pt-16 max-sm2:pt-12.5 max-xs:pt-10 max-md:pb-30 max-sm:pb-25 max-xs:pb-14" />
      </MainLayout>
   );
};

export default Home;
