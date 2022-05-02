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
import Signup from './components/users/signup';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/users/login';
import Dashboard from './components/users/dashboard';
import ForgotPassword from './components/users/forgotpassword';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/about' element={<About />}></Route>
						<Route path='/courses' element={<CoursePage />}></Route>
						<Route path='/register' element={<Register />}></Route>
						<Route path='/resources' element={<Resources />}></Route>
						<Route path='/contact' element={<Contact />}></Route>
						<Route path='/courses/search-courses' element={<Courses />}></Route>
						<Route path='/signup' element={<Signup />}></Route>
						<Route path='/login' element={<Login />}></Route>
						<Route path='/dashboard' element={<Dashboard />}></Route>
						<Route path='/forgot-password' element={<ForgotPassword />}></Route>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
