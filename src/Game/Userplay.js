import React from 'react';
import '../App.css';
import GenerateNumber from './GenerateNumber';
import InputNumber from './InputNumber';

class Userplay extends React.Component {
    constructor() {
		super();
		this.compareUserInput = this.compareUserInput.bind(this);
		this.randomGenerate = this.randomGenerate.bind(this);
		this.resetState = this.resetState.bind(this);
		this.state = {
			question: btoa(this.randomGenerate(2)),
			score: 0,
			wrong: 0		
		}
	}
	resetState() {
		this.setState({
			question: btoa(this.randomGenerate(2)),
			score: 0,
			wrong: 0,
		})
	}
	randomGenerate(digit) {
		let max = Math.pow(10, digit) - 1,
			min = Math.pow(10, digit - 1)

		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	compareUserInput(userNumber) {
		let currQuestion = this.state.question,
			score = this.state.score,
			wrong = this.state.wrong,
			digit;

		if(userNumber === currQuestion) {
			score += atob(userNumber).toString().length;
		} else {
			++wrong;
		}
		digit = Math.ceil(Math.random() * 5);
		console.log(digit);

		this.setState({
			question: btoa(this.randomGenerate(digit)),
			score: score,
			wrong: wrong
		});
	}
	render() {
		return(
			<div className="main__app">
				<GenerateNumber 
					question={this.state.question}
					score={this.state.score}
					wrong={this.state.wrong}/>
				<InputNumber 
					compareUserInput={this.compareUserInput} 
					wrong = {this.state.wrong} 
					onReset = {this.resetState} />
			</div>
		)
	}
}

export default Userplay;