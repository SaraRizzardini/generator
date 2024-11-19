import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';                           
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import React, { Component } from 'react';
import Moods from './components/moods';
import {createRef}  from 'react';
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
	//carouselRef=createRef();
  state = {
    moods: [],
    selectedQuote: "",
    editableQuote: "",
	author: "",
	authTitle: "",
			  authSub: "",
			  authDates: "",
			  authText: "", 
    isEditing: false,
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Default background color
    fontStyle: "Helvetica", // Default font style
    selectedBackground: "",
	fontColor: "#000000",
	textBoxHeight: "auto",
	filterEnabled: false,
	bw: false
  }
carouselRef=createRef();

  componentDidMount() {
    fetch('/moods')
      .then(res => res.json())
      .then((data) => {
        this.setState({ moods: data });
		//this.fetchAuthor();
      })
      .catch(console.log);
  }
 fetchAuthor() {
  fetch('/authors/authors.json')
  .then((res) => res.json())
  .then((data) => {
    // Access the "authors" array within the JSON data
    if (Array.isArray(data.authors)) {
      const authorDetails = data.authors.find(author => author.name === this.state.author);
      if (authorDetails) {
        this.setState({
          authTitle: authorDetails.title,
          authSub: authorDetails.subtitle,
          authDates: authorDetails.dates,
          authText: authorDetails.text,
		  attribution: authorDetails.attribution,
		  imgUrl: authorDetails.imgUrl
        });
		console.log(this.state.imgUrl); 
      } else {
        console.log("Author not found in JSON data.");
      }
    } else {
      console.error("Authors array is missing or data is malformed:", data);
    }
  })
  .catch(console.log);

}
  generateQuote = (mood) => {
	  
  fetch(`/moods/${mood.toLowerCase()}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        selectedQuote: data.text,
        editableQuote: data.text,
        author: data.author,
        isEditing: false
      }, () => {
        if (data.author) {
          this.fetchAuthor();  // Fetch author info only if author is present
        }
		 if (this.carouselRef.current) {
      this.carouselRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
      });
    })
    .catch(console.log);
};
  
  setBackground = (imageUrl) => {
    this.setState({ selectedBackground: imageUrl });
 filterStyle: {} 	
  };

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
	  if (this.state.isEditing) {
        this.adjustTextareaHeight(); // Adjust height when entering edit mode
document.getElementById("text").readOnly = "false";     
	 }
  }

	
  handleInputChange = (event) => {
    this.setState({ editableQuote: event.target.value });
	document.getElementById("text").value =event.target.value;
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
  removeBackground = (event) => {
  const isChecked = event.target.checked;

  if (isChecked) {
    this.setState({ backgroundColor: 'transparent' });
  } else {
    this.setState({ backgroundColor: "rgba(255, 255, 255, 0.5)" });
  }
};
addFilter = (event) => {
  const isChecked = event.target.checked;
  this.setState({ filterEnabled: isChecked });
};
grayScale = (event) => {
  const isChecked = event.target.checked;
  this.setState({ bw: isChecked });
};
addOpacity = (event) => {
  const isChecked = event.target.checked;

  // Check if the current background color is in rgba format
  let currentColor = this.state.backgroundColor;

  // If the color is in hex format (like "#ffffff"), convert it to rgb first
  if (currentColor.startsWith("#")) {
    const hex = currentColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    currentColor = `rgb(${r}, ${g}, ${b})`;
  }

  // Check if the current color is in rgb format
  if (currentColor.startsWith("rgb") && !currentColor.startsWith("rgba")) {
    // Convert rgb to rgba and apply opacity
    if (isChecked) {
      this.setState({ backgroundColor: currentColor.replace("rgb", "rgba").replace(")", ", 0.5)") });
    } else {
      this.setState({ backgroundColor: currentColor.replace("rgb", "rgba").replace(")", ", 1)") });
    }
  } else if (currentColor.startsWith("rgba")) {
    // If already rgba, adjust the alpha channel directly
    if (isChecked) {
      this.setState({ backgroundColor: currentColor.replace(/rgba\((\d+,\s*\d+,\s*\d+),\s*\d*\.?\d+\)/, 'rgba($1, 0.5)') });
    } else {
      this.setState({ backgroundColor: currentColor.replace(/rgba\((\d+,\s*\d+,\s*\d+),\s*\d*\.?\d+\)/, 'rgba($1, 1)') });
    }
  }
};


adjustTextareaHeight = () => {
  document.querySelectorAll("textarea").forEach((textarea) => {
    // Set initial height
    textarea.style.height = textarea.scrollHeight + "px";
    textarea.style.overflowY = "hidden";
    
    // Event listener for input
    textarea.addEventListener("input", (event) => {
      event.target.style.height = "auto";
      event.target.style.height = event.target.scrollHeight + "px";
      
      // Update the component's state with the new height
      this.setState({ textBoxHeight: event.target.scrollHeight + "px" });
    });
  });
};

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
    
      <div className="container" id="quote-box"> {/* Bootstrap container */}
        <Moods moods={this.state.moods} generateQuote={this.generateQuote} />
        {this.state.selectedQuote && (
          <div className="mt-5"> {/* Bootstrap margin-top */}
            <center>
			 
          <h3>A Quote for you:</h3>
<div className=".d-flex position-relative img-responsive" id="carousel-container" style={{ width: '600px', height: '600px' }} key={this.state.fontStyle}>>
 	
  <div id="carouselExampleControls" className="carousel slide img-fluid" data-bs-ride="carousel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
   
	<div className="carousel-inner" style={{ width:'100%', height:'600px' }}>
      {images.map((image, index) => (
	  
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index} onClick={() => this.setBackground(image)}>
         		  
		  <img src={image} className={`d-block w-100 img-fluid ${this.state.filterEnabled ? "mask-custom" : ""} ${this.state.bw ? "mask-bw" : ""}`} alt={`Slide ${index}`} />	 
 </div>
       ))}</div>
         
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
			    name="text"
				id="text"
                  className="form-control-plaintext form-control-lg" // Bootstrap form-control
                  value={this.state.isEditing ? this.state.editableQuote : this.state.selectedQuote}
                  onChange={this.handleInputChange}
				  onClick={this.handleInputChange}
                  spellcheck="false"
                  style={{
					position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: this.state.backgroundColor,
				    textAlign: 'center',
                    fontFamily: this.state.fontStyle,
				    padding: '20px',
					overflow: 'hidden', 
                    zIndex: 2, // Higher z-index to be above the carousel
                    color: this.state.fontColor, 
                  }}
                />
				
      </div>       
			  
<center>
<div className="d-flex justify-content-center  bd-highlight" style={{padding:"20px"}}>
		<small className="text-muted">Click on the image to set it as background or slide for more. You can customize your picture in the editing area and see the changes reflected below.</small></div>	  
<div className=" d-flex justify-content-center mt-2" style={{padding:"20px"}}>
              <button className="btn btn-light" onClick={this.toggleEdit} >
                {this.state.isEditing ? "<" : 'Edit'}
              </button>
			  <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">{this.state.author}</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h1 id="offcanvasRightLabel">{this.state.author}</h1>
	 
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <h2>{this.state.authTitle}</h2>
  <h3>{this.state.authDates}</h3>
  <img title={this.state.attribution} className="img-fluid" src={this.state.imgUrl} alt="Author portrait"></img>
  <h3>
        <small className="text-muted">{this.state.authSub}</small>
      </h3>
    <p>{this.state.authText}</p>
  </div>
</div>
</div>
<div ref={this.carouselRef} > </div>
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
				 
<div>
<div class="form-check form-switch form-check-inline">
  <input class="form-check-input" type="checkbox"  id="flexSwitchCheckCheckedDefault" name="removeBG" onChange={this.removeBackground}/>
  <label class="form-check-label" for="flexSwitchCheckCheckedDefault">Remove Background</label>
</div>      
<div class="form-check form-switch form-check-inline">
  <input class="form-check-input" type="checkbox"  id="flexSwitchCheckCheckedDefault" onChange={this.addOpacity}  />
  <label class="form-check-label" for="flexSwitchCheckCheckedDefault">Blur Background</label>
</div>   
<div class="form-check form-switch form-check-inline">
  <input class="form-check-input" type="checkbox"  id="flexSwitchCheckCheckedDefault" onChange={this.addFilter}   />
  <label class="form-check-label" for="flexSwitchCheckCheckedDefault">Add Filter</label>
</div>  
<div class="form-check form-switch form-check-inline">
  <input class="form-check-input" type="checkbox"  id="flexSwitchCheckCheckedDefault" onChange={this.grayScale}   />
  <label class="form-check-label" for="flexSwitchCheckCheckedDefault">Black and White</label>
</div>  
</div>            
				 <br />
				  {/* Font Style Picker */}
                  <label className="form-label">Font Style: </label>
                  <select
                    className="form-select"
                    value={this.state.fontStyle}
                    onChange={this.handleFontChange}
                  >
                    <option value="Arial" style={{fontFamily:"Arial"}}>Arial</option>
                    <option value="Courier New" style={{fontFamily:"Courier New"}}>Courier New</option>
                    <option value="Georgia"  style={{fontFamily:"Georgia"}}>Georgia</option>
                    <option value="Times New Roman" style={{fontFamily:"Times New Roman"}}>Times New Roman</option>
                    <option value="Calibri" style={{fontFamily:"Calibri"}}>Calibri</option>
                    <option value="Verdana" style={{fontFamily:"Verdana"}}>Verdana</option>
					<option value="Helvetica" style={{fontFamily:"Helvetica"}}>Helvetica</option>
					<option value="Roboto" style={{fontFamily:"Roboto"}}>Roboto</option>
					<option value="Oxygen" style={{fontFamily:"Oxygen"}}>Oxygen</option>
					<option value="Droid Sans" style={{fontFamily:"Droid Sans"}}>Droid Sans</option>
					<option value="Dancing Script" style={{fontFamily:"Dancing Script"}}>Dancing Script</option>
					<option value="Pacifico" style={{fontFamily:"Pacifico"}}>Pacifico</option>
					<option value="Londrina Sketch" style={{fontFamily:"Londrina Sketch"}}>Londrina Sketch</option>
                    <option value="Protest Strike" style={{fontFamily:"Protest Strike"}}>Protest Strike</option>
				    <option value="Rakkas" style={{fontFamily:"Rakkas"}}>Rakkas</option>
				    <option value="Permanent Marker" style={{fontFamily:"Permanent Marker"}}>Permanent Marker</option>
				    <option value="Shadows Into Light" style={{fontFamily:"Shadows Into Light"}}>Shadows Into Light</option>
				    <option value="Lobster" style={{fontFamily:"Lobster"}}>Lobster</option>
				    <option value="Lexend Mega" style={{fontFamily:"Lexend Mega"}}>Lexend Mega</option>
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
				  <div className= "d-flex justify-content-center  bd-highlight" style={{padding:"20px"}}>
				 <button className="btn btn-info mt-2" onClick={this.downloadImage}>Download</button>
                </div>
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
  backgroundColor={this.state.backgroundColor}
  onQuoteChange={this.handleInputChange}
  textBoxHeight={this.state.textBoxHeight}
  filterEnabled={this.state.filterEnabled}
  bw={this.state.bw}
  
/>
      </div>
   

   );
  }
}

export default App;
