import Header from '@sections/Header';
import Footer from '@sections/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
         <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;