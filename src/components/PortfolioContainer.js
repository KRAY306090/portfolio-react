import React, {useState} from 'react';
import Navigation from './Header/Navigation';
import Header from './Header/index';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Footer from './Footer';

import '../App.css';

function PortfolioContainer() {
    const [currentPage, handlePageChange] = useState('Home');
  
    const renderPage = () => {
      switch (currentPage) {
          case 'About': return <About/>;
          case 'Contact': return <Contact/>;
          case 'Portfolio': return <Portfolio/>;
          case 'Resume': return <Resume/>;
          default: return <About/>
      }
    };
  
    return (
      <div>
        <Header></Header>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        
          {
           renderPage()
          }
        <Footer></Footer>
      </div>
    );
  }
  
  export default PortfolioContainer;
  