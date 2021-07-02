import React from 'react'
// import { Parallax } from 'react-parallax';
import MyNavbar from '../base/Navbar';
// import floatySpace from './header'

import './Home.css'


class Home extends React.Component {

    // parallax container
    Container = () => {
        return (
            // <Parallax blur={10} bgImage="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" 
            // bgImageAlt="the cat" strength={500}>
            //     <div className='head-bg'>
            //         <lottie-player src=
            //         // {headBg}
            //         "https://assets7.lottiefiles.com/packages/lf20_nhisz0kw.json"
            //         background="transparent" speed="0.2" loop autoplay></lottie-player>
            //     </div>
            //     <MyNavbar component='home'/>
            // </Parallax>
            // <
                <MyNavbar component='home'/>



            // <>
            //     <div id="pt" className="canvas" style={{backgroundColor:'black'}}>
            //     <canvas id="canvas" width="1456" height="1062" style={{width: '1165px',height: '850px',}}></canvas>
            //     </div>
            //     {/* <MyCanvas background="#abc" play={true} /> */}
            //     <MyNavbar component='home'/>
            // </>

        );    
    }

    render() {

        return (
            <>
				<header className="home-head">
					{this.Container()}
                </header>
                <main>
                    <br/>
                    {/* <h1>Home</h1> */}
                    <section className='d-flex container home-content' style={{ minHeight: '400px' }}>
                        <div className='align-self-center'>
                            <h2>Build Deep learning models more than 10X faster with Auto-DL.</h2>
                            <p>Building Deep Learning models takes a lot of time. We automate your "meta-work" so that you can focus of building your models without worrying about writing code.</p>
                        </div>
                    </section>
                    <section className='home-content' style={{ height: '400px' }}></section>
                    <section className='home-content' style={{ height: '400px' }}></section>
                    <section className='home-content' style={{ height: '400px' }}></section>
                    <div className='home-content' style={{ height: '400px', color:'black' }}>
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{height:'400px'}}>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                {/* <img src="..." className="d-block w-100" alt="..."/> */}
                                <div className="carousel-caption d-none d-md-block">
                                    {/* <div className='card'> */}
                                        {/* <h5>First slide label</h5> */}
                                        <p className='testimonial'>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat exercitationem quis non ducimus recusandae nulla asperiores perspiciatis quasi fuga eum, possimus cum rem atque voluptatem quisquam unde aut hic voluptatibus sint. Minus beatae repellendus nemo commodi voluptas eveniet quasi tempora quaerat! In esse nostrum culpa voluptatibus numquam, nemo pariatur quo at, aperiam consequuntur repellat magni earum vero, velit quidem debitis impedit dignissimos. Esse praesentium qui velit. Velit id a exercitationem, quae possimus deserunt atque nobis rerum temporibus rem dignissimos, quas sapiente. Culpa libero explicabo eligendi, totam odio deleniti eaque quis, animi voluptatibus nobis enim! Voluptas nulla quae deleniti quaerat quas!
                                        </p>
                                    {/* </div> */}
                                </div>
                                </div>
                                <div className="carousel-item">
                                {/* <img src="..." className="d-block w-100" alt="..."/> */}
                                <div className="carousel-caption d-none d-md-block">
                                    {/* <div className='card'> */}
                                        {/* <h5>Second slide label</h5> */}
                                        <p className='testimonial'>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat exercitationem quis non ducimus recusandae nulla asperiores perspiciatis quasi fuga eum, possimus cum rem atque voluptatem quisquam unde aut hic voluptatibus sint. Minus beatae repellendus nemo commodi voluptas eveniet quasi tempora quaerat! In esse nostrum culpa voluptatibus numquam, nemo pariatur quo at, aperiam consequuntur repellat magni earum vero, velit quidem debitis impedit dignissimos. Esse praesentium qui velit. Velit id a exercitationem, quae possimus deserunt atque nobis rerum temporibus rem dignissimos, quas sapiente. Culpa libero explicabo eligendi, totam odio deleniti eaque quis, animi voluptatibus nobis enim! Voluptas nulla quae deleniti quaerat quas!
                                        </p>
                                    {/* </div> */}
                                </div>
                                </div>
                                <div className="carousel-item">
                                {/* <img src="..." className="d-block w-100" alt="..."/> */}
                                <div className="carousel-caption d-none d-md-block">
                                    {/* <div className='card'> */}
                                        {/* <h5>Third slide label</h5> */}
                                        <p className='testimonial'>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat exercitationem quis non ducimus recusandae nulla asperiores perspiciatis quasi fuga eum, possimus cum rem atque voluptatem quisquam unde aut hic voluptatibus sint. Minus beatae repellendus nemo commodi voluptas eveniet quasi tempora quaerat! In esse nostrum culpa voluptatibus numquam, nemo pariatur quo at, aperiam consequuntur repellat magni earum vero, velit quidem debitis impedit dignissimos. Esse praesentium qui velit. Velit id a exercitationem, quae possimus deserunt atque nobis rerum temporibus rem dignissimos, quas sapiente. Culpa libero explicabo eligendi, totam odio deleniti eaque quis, animi voluptatibus nobis enim! Voluptas nulla quae deleniti quaerat quas!
                                        </p>
                                    {/* </div> */}
                                </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                <i class="fas fa-chevron-left"></i>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                                <i class="fas fa-chevron-right"></i>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default Home;