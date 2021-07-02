import React from 'react'
import './About.css'
import HeadBG from '../base/headBG';


class About extends React.Component {
    render() {
        return (
            <>
                <HeadBG title='ABOUT US'/>
                <br/>

                <h1>About Us</h1>
                <p>
                    {/* Some Content bout what we do */}
                </p>
            </>
        );
    }
}

export default About;