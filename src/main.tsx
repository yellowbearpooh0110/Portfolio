import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { ThemeProvider } from '@theme/index.tsx';
import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>
);
