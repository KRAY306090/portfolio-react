import React, {useState} from 'react';
import Navigation from './Header/Navigation';
import Header from './Header/index';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';

import '../App.css';

function PortfolioContainer() {
    const [currentPage, handlePageChange] = useState('Home');
  
    const renderPage = () => {
      // Add a switch statement that will return the appropriate component of the 'currentPage'
      // YOUR CODE HERE
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
        <div>
          {
           renderPage()
          }
        </div>
      </div>
    );
  }
  
  export default PortfolioContainer;
  