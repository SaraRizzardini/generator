import React, { Component } from 'react';

class QuoteCanvas extends Component {
  componentDidUpdate() {
    const canvas = document.getElementById('quoteCanvas');
    if (!canvas) return; // Check if the canvas element exists

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Check if the canvas context exists

    // Clear the canvas before redrawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set a default background color (if there's no image)
    if (!this.props.selectedBackground) {
      ctx.fillStyle = this.props.backgroundColor || 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    if (this.props.selectedBackground) {
      const img = new Image();
      img.src = this.props.selectedBackground;

      img.onload = () => {
        // Draw the image to fill the entire canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Now draw the text on top of the image
        this.drawTextOnCanvas(ctx, canvas);
      };

      img.onerror = (e) => {
        console.error("Error loading image:", e);
      };
    } else {
      // If no image is selected, just draw the text on a plain background
      this.drawTextOnCanvas(ctx, canvas);
    }
  }

  drawTextOnCanvas(ctx, canvas) {
    // Check if the canvas and context are available before proceeding
    if (!canvas || !ctx) return;

    // Set font styles
    ctx.font = `48px ${this.props.fontStyle}`;
    ctx.fillStyle = this.props.fontColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Split the quote into multiple lines if it's too long
    const quote = this.props.selectedQuote || '';
    const maxWidth = 550; // Adjust according to your canvas width
    const lineHeight = 50;
    const lines = this.getLines(ctx, quote, maxWidth);

    // Calculate x and y positions based on canvas dimensions
    const x = canvas.width / 2;
    const y = canvas.height / 2 - (lines.length / 2) * lineHeight;

    // Draw each line of the quote text
    lines.forEach((line, index) => {
      ctx.fillText(line, x, y + index * lineHeight);
    });
  }

  // Utility function to split long text into multiple lines
  getLines(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }

  render() {
    return <canvas id="quoteCanvas" width="600" height="600"></canvas>;
  }
}

export default QuoteCanvas;
