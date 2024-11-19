import React, { Component } from 'react';
import { drawText,getTextHeight } from 'canvas-txt';
class QuoteCanvas extends Component {
	  textAreaRef = React.createRef();
	  
componentDidUpdate(prevProps) {

  if (
    prevProps.selectedQuote !== this.props.selectedQuote ||
    prevProps.fontColor !== this.props.fontColor ||
    prevProps.fontStyle !== this.props.fontStyle ||
    prevProps.textBoxHeight !== this.props.textBoxHeight || // Monitor textBoxHeight changes
    prevProps.selectedBackground !== this.props.selectedBackground || // Add check for background change
    prevProps.backgroundColor !== this.props.backgroundColor ||
	prevProps.filterEnabled !== this.props.filterEnabled ||
	prevProps.bw !== this.props.bw
  ) {
    this.updateCanvas(); 
	
  }
}

componentDidMount() {
  this.updateCanvasSize();
  window.addEventListener("resize", this.updateCanvasSize);
  this.updateCanvas();
}

componentWillUnmount() {
  window.removeEventListener("resize", this.updateCanvasSize);
}
updateCanvasSize = () => {
  const canvas = document.getElementById('quoteCanvas');
  if (canvas) {
    // Set the canvas width and height based on screen width
    const isMobile = window.innerWidth < 768;
    canvas.width = isMobile ? window.innerWidth * 0.9 : 600;  // Adjust as needed
    canvas.height = isMobile ? window.innerHeight * 0.5 : 600;
 this.updateCanvas(); }
};
//handle canvas drawing
updateCanvas = () => {
	console.log("update canvas...");
  const canvas = document.getElementById('quoteCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

 ctx.clearRect(0, 0, canvas.width, canvas.height);


  if (this.props.selectedBackground) {
    const img = new Image();
    img.src = this.props.selectedBackground;
	if (this.props.filterEnabled) {
  ctx.filter = "contrast(140%) brightness(100%) saturate(110%) sepia(50%)";
} else if (this.props.bw) {
  ctx.filter = "contrast(110%) brightness(110%) saturate(100%) sepia(30%) hue-rotate(0deg) grayscale(100%)";
  ctx.fillStyle = this.props.fontColor;
} else {
  ctx.filter = "none";
}
  
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	  ctx.fillStyle = this.props.fontColor;
	   ctx.filter = "none";
      this.drawTextOnCanvas(ctx, canvas);
	  
    };

    img.onerror = (e) => {
      console.error("Error loading image:", e);
    };
  } else {
	  console.log("drawing the text");
    this.drawTextOnCanvas(ctx, canvas);
  }
};


  drawTextOnCanvas(ctx, canvas) {
  
  if (!canvas || !ctx) return;
const img = this.props.selectedBackground
 const text = this.props.selectedQuote || "";
 const fontStyle = this.props.fontStyle || "Helvetica";
 const fontColor = this.props.fontColor || "#000000";
 const backgroundColor = this.props.backgroundColor || "#ffffff"; // Background color from props
 const textBoxHeight = this.props.textBoxHeight || "200 px";
 //const maxWidth = canvas.width - 10;
 const viewportWidth = window.innerWidth;
 const maxWidth =viewportWidth < 768 ? canvas.width * 0.8 : canvas.width * 0.9; 
console.log("maxWidth:", maxWidth);

 const lineHeight = 40; 
  const x = canvas.width / 2;
  const y = canvas.height / 2;
  const padding = 20; 
  const textHeight = getTextHeight({ ctx, text, fontStyle });
  const rectX = x - (maxWidth / 2) ;
  const rectY = y - (text.length*2) ;
  const bigY = y - (text.length/3);
  const rectWidth = maxWidth + 2 * padding;     // Width of the rectangle
  const rectHeight = text.length + 10 * padding;  // Height of the rectangle
  
  ctx.textBaseline = "middle";
  if(text.length > 300){
	  ctx.font= `20px ${fontStyle}`;
	  ctx.textAlign = "start";
	  console.log("smaller font call");
	  
  } else{
	  ctx.font = `30px ${fontStyle}`;
	  ctx.textAlign = "center";
	  console.log("usual font");
	  
  }
ctx.fillStyle = backgroundColor;
if(text.length < 220){
  ctx.fillRect(
    rectX, 
    rectY, 
    maxWidth, 
    rectHeight
 
  ); 
  ctx.fillStyle = fontColor;
const { height } = drawText(ctx, text, {
  x: rectX + padding,
  y:  y - text.length / 2 - padding,
  width: maxWidth - 20,
  height: textHeight,
  fontStyle: fontStyle
})
}
else{
	
	ctx.fillRect(
    rectX, 
    bigY, 
    maxWidth, 
    y +100
 
  ); 
  ctx.fillStyle = fontColor;
const { height } = drawText(ctx, text, {
  x: rectX + padding,
  y:  y - textHeight / 2 - padding,
  width: maxWidth - 20,
  height: textHeight,
  fontStyle: fontStyle
})
}

  

console.log("text length:", text.length);
console.log("quote:", text);

console.log("textHeight:", textHeight);
console.log("Font-color:", fontColor);
  
  }

 render() {
    return (
  <center>
        <canvas id="quoteCanvas" className='img-responsive' style={{ backgroundColor: this.props.backgroundColor, fontStyle: this.props.fontStyle }}></canvas>     
    </center>
    );
  }
}

export default QuoteCanvas;
