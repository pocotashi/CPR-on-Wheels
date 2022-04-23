/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/homePage';
import About from './components/about';
import Contact from './components/contact';
import Resources from './components/resources';
import Register from './components/register';
import CoursePage from './components/coursePage';
import Courses from './components/courses';
import Footer from './components/footer';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/courses' element={<CoursePage />}></Route>
					<Route path='/register' element={<Register />}></Route>
					<Route path='/resources' element={<Resources />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/courses/search-courses' element={<Courses />}></Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
