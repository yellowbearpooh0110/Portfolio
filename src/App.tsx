import * as React from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import ScrollToTop from '@components/common/ScrollToTop';
import CssBaseline from '@mui/material/CssBaseline';
import About from '@pages/About';
import Articles from '@pages/Articles';
import Contact from '@pages/Contact';
import Homepage from '@pages/Homepage';
import Projects from '@pages/Projects';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Header />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
			<CssBaseline />
		</React.Fragment>
	);
};

export default App;
