import MainLayout from '@/layouts/MainLayout/MainLayout';
import Check from '@/sections/Check';
import Hero from '@/sections/Hero';
import Pricing from '@/sections/Pricing';
import What from '@/sections/What';

const Home = () => {
   return (
      <MainLayout>
         <Hero />
         <What className="pb-27.5 max-sm:pb-20 max-xs:pb-10" />
         <Check className="pt-27.5 pb-10.75 max-sm:pt-20 max-xs:pt-8" />
         <Pricing className="pt-10.75 pb-21.75 max-sm:pb-15 mx-xs:py-8" />
      </MainLayout>
   );
};

export default Home;
