import React from 'react';
import style from './style.css';

class Ripple extends React.Component {
	constructor() {
		super();
		/*this.boundDownHandler = this.boundDownHandler.bind(this);
		this.boundUpHandler	= this.boundUpHandler.bind(this);

		this._frameCount = 0;
        this._rippleSize = 0;
        this._x = 0;
        this._y = 0;

    
        this._ignoringMouseDown = false;

        this._constant = {
    		INITIAL_SCALE: 'scale(0.0001, 0.0001)',
    		INITIAL_SIZE: '1px',
    		INITIAL_OPACITY: '0.4',
    		FINAL_OPACITY: '0',
    		FINAL_SCALE: ''
  		}*/
	}
	componentDidMount() {
		alert(1);
		let rippleContainer = this._rippleElement.parentNode;
		let rect = rippleContainer.getBoundingClientRect();
		this._rippleElement.style.width = rect.width*2.5 + 'px';
		this._rippleElement.style.height = rect.height*2.5 + 'px';

	}
	
    setRippleXY(newX, newY) {
          this.x_ = newX;
          this.y_ = newY;
        }

    setRippleStyles() {
        /*
            var transformString;
            var scale;
            var size;
            var offset = 'translate(' + this._x + 'px, ' + this._y + 'px)';

            if (start) {
              		scale = this._constant.INITIAL_SCALE;
              		size = this._constant.INITIAL_SIZE;
            } else {
              scale = this._constant.FINAL_SCALE;
              size = this.rippleSize_ + 'px';
              
              if (recentering) {
                offset = 'translate(' + this.boundWidth / 2 + 'px, ' +
                  this.boundHeight / 2 + 'px)';
              }
            }

            transformString = 'translate(-50%, -50%) ' + offset + scale;

            this._rippleElement.style.transform = transformString;
*/
          
        }

       

    

  downHandler(e) {
    /*if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
      var rect = this.element_.getBoundingClientRect();
      this.boundHeight = rect.height;
      this.boundWidth = rect.width;
      this.rippleSize_ = Math.sqrt(rect.width * rect.width +
          rect.height * rect.height) * 2 + 2;
      this.rippleElement_.style.width = this.rippleSize_ + 'px';
      this.rippleElement_.style.height = this.rippleSize_ + 'px';
    }

    this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE);

    if (event.type === 'mousedown' && this.ignoringMouseDown_) {
      this.ignoringMouseDown_ = false;
    } else {
      if (event.type === 'touchstart') {
        this.ignoringMouseDown_ = true;
      }
      var frameCount = this.getFrameCount();
      if (frameCount > 0) {
        return;
      }
      this.setFrameCount(1);
      var bound = event.currentTarget.getBoundingClientRect();
      var x;
      var y;
      // Check if we are handling a keyboard click.
      if (event.clientX === 0 && event.clientY === 0) {
        x = Math.round(bound.width / 2);
        y = Math.round(bound.height / 2);
      } else {
        var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        x = Math.round(clientX - bound.left);
        y = Math.round(clientY - bound.top);
      }
      this.setRippleXY(x, y);
      this.setRippleStyles(true);
      
    }*/
  }

  	upHandler(event) {
   		this._rippleElement.classList.remove('is-visible');
	}

	render() {
		return (
			<span className="ripple-container" 
				  onMouseDown={this.boundDownHandler} 
				 
				  onMouseUp={this.boundUpHandler} 
				  onMouseLeave={this.boundUpHandler} 
				 
				  onBlur={this.boundUpHandler}>
				<span className="ripple" ref={r => this._rippleElement = r}></span>
			</span>
		)
	}
}

export default Ripple; 