import React, { Component } from 'react';
import App from './components/App.js';

class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            requestEnd: false,
            timeout: false,
            fade: false
        }
    }


    render() {
        return <App />
    }
}

export default Splash;
