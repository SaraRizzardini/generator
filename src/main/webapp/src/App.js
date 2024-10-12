import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';                           
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import React, { Component } from 'react';
import Moods from './components/moods';
import QuoteCanvas from './components/quoteCanvas.js';
import destroyedCar from './img/destroyedCar.jpg';
import marlaDango from './img/marlaDango.jpg';
import circuloCirco from './img/circuloCirco.jpg';
import serratura from './img/serratura.jpg';
import casetta from './img/casetta.jpg';
import plafond from './img/plafond.jpg';
import theShow from './img/theShow.jpg';
import alba from './img/alba.jpg';
import botanicNight from './img/botanicNight.jpg';
import giostra from './img/giostra.jpg';
import concert from './img/concert.jpg';
import airport from './img/airport.jpg';
import mountains from './img/mountains.jpg';
import lake from './img/lake.jpg';
import garda from './img/garda.jpg';
import gardaLake from './img/gardaLake.jpg';
import clouds from './img/clouds.jpg';
class App extends Component {
  state = {
    moods: [],
    selectedQuote: "",
    editableQuote: "",
    isEditing: false,
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Default background color
    fontStyle: "Helvetica", // Default font style
    selectedBackground: "",
	fontColor: "#000000",
  }

  componentDidMount() {
    fetch('/moods')
      .then(res => res.json())
      .then((data) => {
        this.setState({ moods: data });
      })
      .catch(console.log);
  }

  generateQuote = (mood) => {
    fetch(`/moods/${mood.toLowerCase()}`)
      .then(res => res.json())
      .then((data) => this.setState({
        selectedQuote: data.text,
        editableQuote: data.text,
        isEditing: false
       })
      )
      .catch(console.log);
  }
  // Function to save the edited quote


  setBackground = (imageUrl) => {
    this.setState({ selectedBackground: imageUrl });
  };

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
	  if (this.state.isEditing) {
        this.adjustTextareaHeight(); // Adjust height when entering edit mode
      }
  }

  handleInputChange = (event) => {
    this.setState({ editableQuote: event.target.value });
	this.adjustTextareaHeight();
  }

  handleBackgroundChange = (event) => {
    this.setState({ backgroundColor: event.target.value });
  }

  handleFontChange = (event) => {
    this.setState({ fontStyle: event.target.value });
  }
handleColorChange = (event) =>{
	this.setState({ fontColor: event.target.value });
}
removeBackground = (event) =>{
	this.setState({backgroundColor: 'transparent'});
}
adjustTextareaHeight = () => {
document.querySelectorAll("textarea").forEach(function(textarea) {
  textarea.style.height = textarea.scrollHeight + "px";
  textarea.style.overflowY = "hidden";

  textarea.addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
});}
  downloadImage = () => {
    const canvas = document.getElementById('quoteCanvas');
    if (canvas) {
      const dataUrl = canvas.toDataURL('image/jpeg', 1.0);

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'quote.jpg';

      link.click();
    } else {
      console.error('Canvas not found');
    }
  };
  render() {
    const images = [
	alba,
	circuloCirco,
	plafond,
	theShow,
	botanicNight,
	giostra,
	concert,
	airport,
	mountains,
	lake,
     garda,
	 gardaLake,
      marlaDango,
	  serratura,
      casetta,
	  clouds,
	  destroyedCar,
    ];

 
   return (
      <div className="container"> {/* Bootstrap container */}
        <Moods moods={this.state.moods} generateQuote={this.generateQuote} />

        {this.state.selectedQuote && (
          <div className="mt-5"> {/* Bootstrap margin-top */}
            <center>
          <h3>A Quote for you:</h3>
<div className="position-relative" style={{ height: '600px', width:'600px' }}>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
    <div className="carousel-inner" style={{ height: '100%' }}>
      {images.map((image, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index} onClick={() => this.setBackground(image)}>
          <img src={image} className="d-block w-100" alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" data-bs-target="#carouselExampleControls" type="button" role="button" data-bs-slide="prev"  style={{ bottom: '10px',  zIndex: 5 }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next"  role="button" href="#carouselExampleControls" data-bs-target="#carouselExampleControls" data-bs-slide="next"   style={{ bottom: '10px',  zIndex: 5 }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>

                <textarea
                  className="form-control-plaintext form-control-lg" // Bootstrap form-control
                  value={this.state.isEditing ? this.state.editableQuote : this.state.selectedQuote}
                  onChange={this.handleInputChange}
                  //rows="4"
                  style={{
					   position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
                    //position: 'relative',
                    backgroundColor: this.state.backgroundColor,
					 textAlign: 'center',
                    fontFamily: this.state.fontStyle,
					 padding: '20px',
					 overflow: 'hidden', 
                  //  resize: 'none', // Prevent manual resizing
					 //opacity: 0.5,
                    zIndex: 2, // Higher z-index to be above the carousel
                    color: this.state.fontColor, 
                  }}
                />
              </div>
<center>
<div className=" d-flex justify-content-center mt-2">
              <button className="btn btn-info mt-2" onClick={this.toggleEdit}>
                {this.state.isEditing ? 'Save' : 'Edit'}
              </button>
			  </div>
</center>
              {this.state.isEditing && (
                <div className="mt-3"> {/* Bootstrap margin-top */}
                  <h4>Customize Your Quote:</h4>

                  {/* Background Color Picker */}
                  <label className="form-label">Background Color: </label>
                  <input
                    type="color"
                    className="form-control" 
                    value={this.state.backgroundColor}
                    onChange={this.handleBackgroundChange}
                  />
                  <br />
				  {/*Remove Background option*/}
				  <button className="btn btn-info mt-2" onClick={this.removeBackground}>Remove Background</button>
                  <br />
				  {/* Font Style Picker */}
                  <label className="form-label">Font Style: </label>
                  <select
                    className="form-select" // Bootstrap form-select
                    value={this.state.fontStyle}
                    onChange={this.handleFontChange}
                  >
                    <option value="Arial">Arial</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Calibri">Calibri</option>
                    <option value="Verdana">Verdana</option>
					<option value="Helvetica">Helvetica</option>
					<option value="Roboto">Roboto</option>
					<option value="Oxygen">Oxygen</option>
					<option value="Droid Sans">Droid Sans</option>
					<option value="londrina-sketch-regular">Londrina Sketch</option>
                  <option value="Protest Strike">Protest Strike</option>
				  </select>
                  <br />
				  <label className="form-label">Font Color: </label>
                  <input
                    type="color"
                    className="form-control" // Bootstrap form-control
                    value={this.state.fontColor}
                    onChange={this.handleColorChange}
                  />
                  <br />
				 <button className="btn btn-info mt-2" onClick={this.downloadImage}>Download</button>
                </div>
              )}
            </center>
          </div>
        )}
		<QuoteCanvas 
  selectedQuote={this.state.editableQuote} 
  selectedBackground={this.state.selectedBackground} 
  fontColor={this.state.fontColor} 
  fontStyle={this.state.fontStyle}
/>
      </div>
   

   );
  }
}

export default App;
