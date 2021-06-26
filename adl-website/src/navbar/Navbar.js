import React from 'react'

import {BrowserRouter as Router, Link} from "react-router-dom";

import logo from '../icon.png';
import './Navbar.css'



class MyNavbar extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.addEventListener("scroll", function () {
            if (document.querySelector(".home-head") != null) {
                const navbar = document.querySelector(".home-head").querySelector('.navbar');
                const headheight = document.getElementsByClassName('App-header').clientHeight;
                const navbarHeight = window.screen.height - 70;
            
                const distanceFromTop = Math.abs(
                    document.body.getBoundingClientRect().top
                );

                (distanceFromTop >= navbarHeight) ? navbar.classList.add("fixed-top") : navbar.classList.remove("fixed-top");
            }
        });
        if (this.props.component === 'base') {
            const navbar = document.querySelector(".navbar").classList.add('fixed-top');
            document.querySelector('.header-content').querySelector('.brand').style.display = 'none';
        }
        else if (this.props.component === 'home') {
            document.querySelector('.header-content').querySelector('.brand').style.display = 'flex';
        }
    }

    render() {

        return(
			// <header className="App-header">

                <div className='header-content'>
                    <div className='brand'>
                        <img src={logo} className="App-logo" alt="logo" />
                        <span style={{fontWeight: 600, marginBottom: '0.5em'}}>Auto-DL</span>
                        {/* <br/> */}
                        <p style={{fontSize: '0.5em'}}>
                        The <span id='future'>futuristic</span> way of building deep learning models
                        </p>
                    </div>

                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand" href="#">
                                <img src={logo} className="App-logo" alt="logo" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                {/* <li className="nav-item"><Link className="nav-link" to="/">HOME</Link></li> */}
                                <li className="nav-item"><Link className="nav-link" to="/demo">How it works</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/features">Features</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

                                {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li> */}
                            </ul>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                            </div>
                        </div>
                    </nav>
                </div>
            // </header>
        );
    }
}

export default MyNavbar;