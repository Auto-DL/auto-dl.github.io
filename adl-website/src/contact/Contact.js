import React from 'react'
import './Contact.css'
import HeadBG from '../base/headBG';


class Contact extends React.Component {
    render () {
        return (
            <>
                <HeadBG title='CONTACT US'/>                
                {/* <h1>Contact Us</h1> */}
                <div style={{height: '400px'}}></div>
            </>
        );
    }
}

export default Contact;