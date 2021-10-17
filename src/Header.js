import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';

class Header extends Component {

	render() {
        const site_title = "Ngo-site"
    	return (	
    		<h1>Hello, {site_title}</h1>
    		
    		);
  	}
}

export default Header;