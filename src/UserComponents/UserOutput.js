import React, {Component} from 'react';
import './UserOutput.css'
class UserOutput extends Component {
    render() {
        return (
            <div className="UserOutput">
                <p>username: {this.props.username}</p>
                <p>Test2</p>
            </div>
        );
    }
}

export default UserOutput;