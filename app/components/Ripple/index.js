import React from 'react';
import style from './style.css';

class Ripple extends React.Component {
	  constructor() {
    		super();
        this.downHandler =  this.downHandler.bind(this);
        this.upHandler = this.upHandler.bind(this);
        this.animFrameHandler = this.animFrameHandler.bind(this);
        this.setRippleXY = this.setRippleXY.bind(this);
        this.setRippleStyles = this.setRippleStyles.bind(this);
        this._frameCount = 0;
        this._x = 0;
        this._y = 0;
	  }

	  componentDidMount() {
  	    let rippleContainer = this._rippleElement.parentNode;
  		  let rect = rippleContainer.getBoundingClientRect();
        this.rippleSize_ = Math.sqrt(rect.width * rect.width +
          rect.height * rect.height) * 2 + 2;
        const magnify = Math.max(rect.height, rect.width) * 2.5;
        const half = magnify / 2; 
        this._rippleElement.style.width = magnify +'px';
  		  this._rippleElement.style.height = magnify +'px';
        this.boundRect = {
            x: half,
            y: half
        }
    }
    setRippleXY(newX, newY) {
      this._x = newX;
      this._y = newY;
    }
    setRippleStyles(start) {
      
        const offset= 'translate(' + this._x + 'px, ' + this._y+ 'px)';
        const scale = start ? 'scale(0.0001, 0.0001)' : '';
        const transformString = offset + scale;
        this._rippleElement.style.transform = transformString;
        if (start) {
              this._rippleElement.classList.remove('is-animating');
            } else {
              this._rippleElement.classList.add('is-animating');
            }
       
    }
    animFrameHandler() {
      if (this._frameCount-- > 0) {
            window.requestAnimationFrame(this.animFrameHandler);
          } else {
            this.setRippleStyles(false);
          }
    }
	
    downHandler(e) {
        this._rippleElement.classList.add('is-visible');
        let rect = e.currentTarget.getBoundingClientRect();
        let x = Math.round(e.clientX - rect.left) - this.boundRect.x;
        let y = Math.round(e.clientY - rect.top) - this.boundRect.y;

        this._frameCount = 1;

         this.setRippleXY(x, y);
      this.setRippleStyles(true);
      window.requestAnimationFrame(this.animFrameHandler);


    }

    upHandler(e) {
        setTimeout(function () {
            this._rippleElement.classList.remove('is-visible');
        }.bind(this), 0)
   		
	  }

	  render() {
    		return (
    			  <span className="ripple-container" 
    				    onMouseDown={this.downHandler} 
    				    onMouseUp={this.upHandler} 
    				    onMouseLeave={this.upHandler}>
    				    <span className="ripple" ref={r => this._rippleElement = r}></span>
    			  </span>
    		)
    }
}

export default Ripple; 