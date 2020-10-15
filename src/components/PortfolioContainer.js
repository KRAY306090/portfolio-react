import React, {useState} from 'react';
import Navigation from './Header/Navigation';
import Header from './Header/index';
import '../App.css';

function Portfolio() {
    const [currentPage, handlePageChange] = useState('Home');
  
    const renderPage = () => {
      // Add a switch statement that will return the appropriate component of the 'currentPage'
      // YOUR CODE HERE
      //
    };
  
    return (
      <div>
        <Header></Header>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>
          {
            // Render the component returned by 'renderPage()'
            // YOUR CODE HERE
            //
          }
        </div>
      </div>
    );
  }
  
  export default Portfolio;
  