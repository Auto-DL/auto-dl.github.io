import logo from './icon.png';
import React from 'react'

class MyNavbar extends React.Component {

    render() {
        return(
            <nav>
                <a className='brand'>
                    <img src={logo} className="App-logo" alt="logo" />
                    Auto-DL
                </a>
            </nav>
        );
    }
}

export default MyNavbar;