import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import rqgLogo from './rqgLogo.png';
import ball192 from './ball192.png';
import finalBall from './finalBall.png';
import generatorLogo from './generatorLogo.png';
const Moods = ({ moods, generateQuote }) => {
  const uniqueMoods = Array.from(new Set(moods.map(mood => mood.name)))
    .map(name => ({ name }));

  return (
    <div className="container">
	
	 <br/>
	
	
<center>  <h1 className="display-1" >Random Quote Generator</h1></center>

	 
	  <br/>
	  
	  <h2 className="display-5"><strong>Moods Archive</strong></h2>
      <h3>
        <small className="text-muted">Select a mood that suits you to generate a quote</small>
      </h3>

      <div className="d-flex flex-wrap justify-content-center mt-4">
        {uniqueMoods.map((mood) => (
          <button
            key={mood.name}
            id={mood.name}
            title={mood.name}
            onClick={() => generateQuote(mood.name)}
            className="btn btn-info m-2 d-flex align-items-center"
            style={{ flex: '1 1 200px', maxWidth: '200px' }} // Ensure equal width
          >
            <i className="bi bi-book me-2"></i>
            {mood.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Moods;
