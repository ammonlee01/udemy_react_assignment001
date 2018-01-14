import React, {Component} from 'react';

class UserInput extends Component {
    render() {
        const inputStyle={
            backgroundColor: '#ddd'
        }
        return (
            <div>
                <input type='text' style={inputStyle} onChange={this.props.inputChangeHandler} value={this.props.username}/>
            </div>
        );
    }
}

export default UserInput;