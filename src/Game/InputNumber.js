import React from 'react';
import '../App.css';

class InputNumber extends React.Component {
    handleUserInput = (event) => {
        event.preventDefault();
        let userNumber = btoa(this.userNumber.value);
        this.userNumber.value = '';
        this.props.compareUserInput(userNumber);
    }
    handleReset = () => {
        this.props.onReset();
    }
    render() {
        let layout;
        if (this.props.wrong < 3) {
            layout = <div className="app__input">
                        <form onSubmit={this.handleUserInput}>
                            Number is: 
                            <input
                                pattern="[0-9]+"
                                type="text"
                                ref={ (ref) => this.userNumber = ref}
                                required
                                autoFocus
                            /> <br/> <br/>
                        </form>
                        <button onClick={this.handleReset}> Restart </button>
                    </div>
        } else {
            layout = <div className="app__end">
                        <div className="app__notify">
                            Better luck next time (✧ω✧)
                        </div>
                        <br/> <br/>
                        <button onClick={this.handleReset}> Restart </button>
                    </div>
        }
        return(layout)
    }
}

export default InputNumber;