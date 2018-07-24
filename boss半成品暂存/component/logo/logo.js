import React from 'react'
import logoImg from './logo.jpg'
import './logo.css'
class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="logo-container">
                <img src={require('./logo.jpg')} alt=""/>
            </div>
        );
    }
}

export default Logo;