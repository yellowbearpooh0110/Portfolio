import * as React from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
	const { pathname } = useLocation();

	React.useEffect(() => {
		document
			.getElementById('root')
			?.scrollTo({ behavior: 'smooth', top: 0, left: 0 });
	}, [pathname]);

	return null;
};

export default ScrollToTop;
