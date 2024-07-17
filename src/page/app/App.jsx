import AboutComponent from '../../components/about/about';
import AdvatagesComponent from '../../components/advantages/advatages';
import ContactComponent from '../../components/contacts/contacts';
import FooterComponents from '../../components/footer/footer';
import HeaderComponent from '../../components/header/header';
import ServicesComponent from '../../components/services/services';
import '../../index.css'

function App() {
  return (
    <div className="scroll-container">
      <HeaderComponent />
      <AboutComponent />
      <AdvatagesComponent />
      <ServicesComponent />
      <ContactComponent />
      <FooterComponents />
    </div>
  );
}

export default App;
