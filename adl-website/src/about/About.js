import React from 'react'
import './About.css'
import HeadBG from '../navbar/headBG';


class About extends React.Component {
    render() {
        return (
            <div>
                <HeadBG/>
                <br/>

                <h1>About Us</h1>
                <p>
                    Some Content bout what we do
                </p>
            </div>
        );
    }
}

export default About;