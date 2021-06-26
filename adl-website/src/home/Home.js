import React from 'react'
import Features from './Features';
import About from './About';
import Demo from './Demo';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef(); // 1. create a reference for the lottie player
    }
    
    render() {
        return (
            <div>
                {/* <h1>Home</h1> */}

                <div style={{ height: '100px' }}></div>
                
                <About/>

                <div style={{ height: '400px' }}></div>

                <Features/>
                
                <div style={{ height: '100px' }}></div>

                <Demo/>

                <div style={{ height: '400px' }}></div>
            </div>
        );
    }
}


export default Home;