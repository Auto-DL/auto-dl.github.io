import './App.css';
import MyNavbar from './Navbar';
import Home from './home/Home';
// import headBg from './animations/animation';
import { Parallax } from 'react-parallax';

const Container = () => (
    <Parallax blur={10} bgImage="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" 
	bgImageAlt="the cat" strength={500}>
		<div className='head-bg'>
			<lottie-player src=
			// {headBg}
			"https://assets7.lottiefiles.com/packages/lf20_nhisz0kw.json"
			background="transparent"  speed="0.2" loop autoplay></lottie-player>
		</div>
		<MyNavbar/>
    </Parallax>
);


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Container/>
			</header>
			<main>
				<Home/>
			</main>
		</div>
	);
}

export default App;
