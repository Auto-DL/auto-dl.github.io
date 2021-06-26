import React from 'react'
import { Parallax } from 'react-parallax';
import MyNavbar from '../navbar/Navbar';

import './Home.css'



class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // parallax container
    Container = () => {
        return (
            <Parallax blur={10} bgImage="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" 
            bgImageAlt="the cat" strength={500}>
                <div className='head-bg'>
                    <lottie-player src=
                    // {headBg}
                    "https://assets7.lottiefiles.com/packages/lf20_nhisz0kw.json"
                    background="transparent" speed="0.2" loop autoplay></lottie-player>
                </div>
                <MyNavbar component='home'/>
            </Parallax>
        );    
    }
    render() {
        return (
            <div>
				<header className="home-head">
					{this.Container()}
                </header>
                <main>
                    <br/>
                    <h1>Home</h1>
                    <div className='home-content' style={{ height: '400px' }}></div>
                    <div className='home-content' style={{ height: '400px' }}></div>
                    <div className='home-content' style={{ height: '400px' }}></div>
                    <div className='home-content' style={{ height: '400px' }}></div>
                    <div className='home-content' style={{ height: '400px' }}></div>
                </main>
            </div>
        );
    }
}


export default Home;