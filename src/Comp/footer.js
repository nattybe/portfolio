import React, { Component } from 'react';
// import {Footer} from 'react-bootstrap';
class Foots extends Component {
    state = { cont:"hello foosa lovers" }
    render() { 
        return ( <footer>{this.state.cont}</footer> );
    }
}
 
export default Foots;