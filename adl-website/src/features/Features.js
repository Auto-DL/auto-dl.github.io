import React from 'react'
import TickAnimation from '../animations/Ticking'
import FeatureList from '../featuresList'

import HeadBG from '../navbar/headBG';
import './Features.css'

class Features extends React.Component {
    // constructor() {
    //     super()
    // }

    addClass(n) {
        let classes = 'txt card';
        if (n % 2 === 0) {
            classes += ' blue-card'; 
        } 
        return classes;
    }

    render() {
        let i = 1;
        
        const feature = FeatureList.map(ft => 
            <div className='feat'>
                <div className={this.addClass(i)}>
                    <div className='card-body'>
                        <div className='col-6 feat-txt'>
                            <i className={ft.img}></i>
                            <h3 className='card-title'>{ft.head}</h3>
                            <div className='card-text'>
                                <p>{ft.msg}</p>
                            </div>
                        </div>
                        <div className='col-6 tick'>
                            <TickAnimation bg={i % 2 === 0? 'white': 'blue'} id={'blu' + (i++)}/>
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <main>
                <div>
                    <HeadBG/>
                    <h1>Features</h1>
                    <br/>
                    {feature}
                </div>
            </main>
        );
    }
}

export default Features;