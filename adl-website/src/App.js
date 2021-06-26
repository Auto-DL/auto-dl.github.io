import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import MyNavbar from './navbar/Navbar';
import Home from './home/Home';
import Features from './features/Features';
import About from './about/About';
import Demo from './demo/Demo';
import Contact from "./contact/Contact";


class App extends React.Component {
	header() {
		return (
			// <div>
				<header className="App-header base-header">
						<MyNavbar component='base'/>
						{/* <div style={{height: '89.75px'}}></div> */}
					{/* </div> */}
				</header>
		)
	}
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route path="/" exact component={() => <Home />} />
						<Route path="/about" exact component={() => 
							<div>
								{this.header()}
								<About />
							</div>
						} />
						<Route path="/features" exact component={() => 
							<div>
								{this.header()}
								<Features />
							</div>
						} />
						<Route path="/demo" exact component={() => 
							<div>
								{this.header()}
								<Demo />
							</div>
						} />
						<Route path="/contact" exact component={() => 
							<div>
								{this.header()}
								<Contact />
							</div>
						} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
