import Header from '@sections/Header';
import Footer from '@sections/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
         <main>{children}</main>
      <Footer className="pb-29.75 max-sm:20 max-xs:pb-14" />
    </div>
  );
};

export default MainLayout;