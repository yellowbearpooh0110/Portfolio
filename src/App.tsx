import * as React from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import CssBaseline from '@mui/material/CssBaseline';
import About from '@pages/About';
import Homepage from '@pages/Homepage';

const App: React.FC = () => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<Homepage />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</BrowserRouter>
			<CssBaseline />
		</React.Fragment>
	);
};

export default App;
