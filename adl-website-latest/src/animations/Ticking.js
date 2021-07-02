import React from 'react'
import { create } from '@lottiefiles/lottie-interactivity';
// import tickAnima from '../animations/animation'


class TickAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef(); // 1. create a reference for the lottie player

        this.state = {
            blue: 'https://assets2.lottiefiles.com/packages/lf20_oxcwmxvz.json',
            white: 'https://assets4.lottiefiles.com/packages/lf20_hsik5fyq.json',
            lotId: this.props.lotId,
        }
    }
    componentDidMount() {
        // 3. listen for player load. see lottie player repo for other events
        this.myRef.current.addEventListener('load', function (e) {
            // 4. configure the interactivity library
            create({
                mode: 'scroll',
                player: this,
                // actions: [
                // {
                //     visibility: [0,1],
                //     type: 'seek',
                //     frames: [0, 121],
                // }, ],
                actions: [
                    {
                        visibility:[0,0.2],
                        type: "stop",
                        frames: [0]
                    },
                    {
                    visibility: [0.2,1],
                        type: "seek",
                        frames: [0, 121]
                    }
                ],
            });
        });
    }
    render() {
        return (
            <lottie-player 
                ref={this.myRef} // 2. set the reference for the player
                id={this.state.lotId}
                src={this.props.bg === 'blue'? this.state.blue: this.state.white}
                background="transparent" speed="1"
                style={{height: '300px'}} autoplay>
            </lottie-player>
        );
    }
}


export default TickAnimation;