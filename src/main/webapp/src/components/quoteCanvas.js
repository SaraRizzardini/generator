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
    prevProps.backgroundColor !== this.props.backgroundColor
  ) {
    this.updateCanvas(); 
  }
}
//handle canvas drawing
updateCanvas = () => {
  const canvas = document.getElementById('quoteCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (this.props.selectedBackground) {
    const img = new Image();
    img.src = this.props.selectedBackground;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      this.drawTextOnCanvas(ctx, canvas);
    };

    img.onerror = (e) => {
      console.error("Error loading image:", e);
    };
  } else {
   // ctx.fillStyle = this.props.backgroundColor || 'white';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.drawTextOnCanvas(ctx, canvas);
  }
};


  drawTextOnCanvas(ctx, canvas) {
  
  if (!canvas || !ctx) return;

  const text = this.props.selectedQuote || "";
  const fontStyle = this.props.fontStyle || "Helvetica";
  const fontColor = this.props.fontColor || "#000000";
  const backgroundColor = this.props.backgroundColor || "#ffffff"; // Background color from props
 const textBoxHeight = this.props.textBoxHeight || "200 px";
const maxWidth = canvas.width ; 
console.log("maxWidth:", maxWidth);
  const lineHeight = 40; 
  const x = canvas.width / 2;
  const y = canvas.height / 2 - (text.length / 2) * lineHeight;
  const padding = 10; 
  const textHeight = getTextHeight({ ctx, text, fontStyle });
  const rectX = x - maxWidth / 2 - padding;
  const rectY = y - textHeight / 2 - padding;
  // Apply font settings
 // ctx.font = `30px ${fontStyle}`;
  //ctx.textAlign = "center";
  //ctx.textBaseline = "middle";
//draw text box
ctx.globalCompositeOperation = "destination-over";
ctx.fillStyle = backgroundColor;
  ctx.fillRect(
    rectX, 
    rectY, 
    maxWidth + 2 * padding, 
    textBoxHeight 
  );
 console.log("recty:",rectY); 
console.log("Background Color:", backgroundColor);
console.log("quote:", text);
console.log("text-box height:", textBoxHeight);
console.log("text height:", textHeight);

  //draw the text 
  const { height } = drawText(ctx, text, {
  x: rectX + padding,
  y:  y - textHeight / 2 - padding,
  width: maxWidth,
  fontSize: 30,
  fontColor: fontColor
})

 
console.log("quote:", text);
console.log("Total height:",height);
console.log("Font-color:", fontColor);
  
}

 render() {
    return (
  
        <canvas id="quoteCanvas" width="600" height="600" style={{ backgroundColor: this.props.backgroundColor, fontStyle: this.props.fontStyle }}></canvas>     
    
    );
  }
}

export default QuoteCanvas;


