import React from 'react';
import '../App.css';

class GenerateNumber extends React.Component {
    componentDidUpdate = () => {
        let time, digit;
        console.log(atob(this.props.question).toString());
        digit = atob(this.props.question).toString().length;
        time = 100 * Math.min(digit, 5) + 400 * Math.max(digit - 5, 0);
        let number = document.getElementById('number');
        setTimeout(() => {
            number.innerHTML = number.innerHTML.replace(/\w/gi, '&#183;');
        }, time);
    }
    componentDidMount = () => {
           console.log("hello");
           console.log("deepika")
		let number = document.getElementById('number');
		setTimeout(function() {
			number.innerHTML = number.innerHTML.replace(/\w|\W/gi, '&#183;');
		}, 1200);
	}
    render() {
        return(
            <div className="app__gen-number">
                <div className="app__info">
                    <p className="app__level">Score: {this.props.score}</p>
                    <p className="app__wrong">Wrong: {this.props.wrong}/3</p>
                </div>
                <p className="app__divider">#################################</p>
                <p className="app__number" id="number">
                    {
                        (this.props.wrong < 3) ? atob(this.props.question) : '????'
                    }
                </p>
                <p className="app__divider">#################################</p>
            </div>
        );
  
    }
}

export default GenerateNumber;
