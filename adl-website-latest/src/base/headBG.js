import React from 'react';
import bg from './headWall.svg'

class HeadBG extends React.Component {
    render() {
        let style = {
            background: 'url('+ bg +')',
            width: '100vw',
            minHeight: '43vh',
            backgroundPosition: 'center',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Rubik", sans-serif',
        }
        return (
            <div style={style}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default HeadBG;