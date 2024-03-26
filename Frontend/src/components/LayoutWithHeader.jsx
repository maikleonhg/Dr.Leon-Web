import { Header } from './Header';
import { Footer } from './Footer';

const LayoutWithHeader = ({ children }) => {
  return (
    <>
      <Header />
        {children} {/* Este es el contenido de la página específica */}
      <Footer />
    </>
  );
};

export default LayoutWithHeader;
