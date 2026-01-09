import MainLayout from '@/layouts/MainLayout/MainLayout';
import Hero from '@/sections/Hero';
import What from '@/sections/What';

const Home = () => {
   return (
      <MainLayout>
         <Hero />
         <What className="pb-27.5 max-sm:pb-20 max-xs:pb-12" />
      </MainLayout>
   );
};

export default Home;
