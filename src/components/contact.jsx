import React, { useEffect } from 'react';
import './contact.css';
import Footer from './footer';

export default function Contact() {
  function onSubmit() {
    console.log("hi");
  }

  useEffect(() => {
    // Create and configure the canvas element when the component mounts
    const c = document.createElement('canvas');
    c.id = "canvasBackground";
    const parent = document.getElementById('hero');
    parent.appendChild(c);

    const ctx = c.getContext('2d');

    let dotCount;
    let dotArray = [];
    let radius, x, y;

    // Dot creation and animation functions
    function createDots(dotCount) {
      for (let i = 0; i < dotCount; i++) {
        radius = Math.floor((Math.random() * 3) + 1);
        x = Math.random() * (c.width - radius * 2) + radius;
        y = Math.random() * (c.height - radius * 2) + radius;
        // Increase the velocity of the dots (e.g., make the velocities range between -1.5 to 1.5)
        let xVelocity = ((Math.random() * 3) - 1.5) / 50;  // Increased velocity range
        let yVelocity = ((Math.random() * 3) - 1.5) / 50;  // Increased velocity range
        let fillColor = 'black';
        let shadowBlur = 10;
        let shadowColor = 'black';
        let globalAlpha = ((Math.random() * 5) + 5) / 10;
        dotArray.push(new Dot(radius, x, y, xVelocity, yVelocity, fillColor, shadowBlur, shadowColor, globalAlpha));
      }
      animate();
    }

    // Dot object constructor
    function Dot(r, x, y, xV, yV, fC, sB, sC, gA) {
      this.radius = r;
      this.x = x;
      this.y = y;
      this.xVelocity = xV;
      this.yVelocity = yV;
      this.fillColor = fC;
      this.shadowBlur = sB;
      this.shadowColor = sC;
      this.globalAlpha = gA;

      // Update the dot's position and redraw it
      this.updateDots = function () {
        // Increase the movement area by letting the dots go beyond the canvas edges
        if (this.x + this.radius > c.width || this.x - this.radius < 0)
          this.xVelocity = -this.xVelocity;
        if (this.y + this.radius > c.height || this.y - this.radius < 0)
          this.yVelocity = -this.yVelocity;

        // Move the dot
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        this.drawDots();
      };

      // Draw the dot on the canvas
      this.drawDots = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.shadowBlur = this.shadowBlur;
        ctx.shadowColor = this.shadowColor;
        ctx.globalAlpha = this.globalAlpha;
        ctx.fillStyle = this.fillColor;
        ctx.fill();
      };
    }

    // Animation function
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, c.width, c.height);

      for (let i = 0; i < dotArray.length; i++) {
        dotArray[i].updateDots();
      }
    }

    // Set canvas size and reinitialize dots when the window is resized
    function setValues() {
      c.width = parent.offsetWidth;
      c.height = parent.offsetHeight;
      dotArray = [];
      dotCount = Math.floor((c.width / 2) * (c.height / 2) / 2000);
      createDots(dotCount);
    }

    // Set up initial values on page load
    setValues();

    // Set up resize event listener
    window.addEventListener('resize', setValues);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener('resize', setValues);
    };
  }, []);

  return (
    <>
      <div id="hero"></div>
      <div className="contact-main">
        <h1>Ping us here!</h1>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" required placeholder="Enter your name" />
          <input type="email" name="email" placeholder="Enter your email" required />
          <textarea name="message" id="msg" required placeholder="Leave your message here"></textarea>
          <button type="submit">Submit Form</button>
        </form>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}
