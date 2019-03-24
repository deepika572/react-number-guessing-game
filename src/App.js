import React, { Component } from 'react';
import Pretext from './Pretext/Pretext';
import UserPlay from './Game/Userplay';
import './App.css';

class App extends Component {
	render() {
		return(
			<div className="content">
				<Pretext />
				<UserPlay />
			</div>
		)
	}
}

export default App;
