import * as React from 'react';

import { Container, Divider, Link, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

const menus = [
	{
		name: 'Home',
		link: '/home',
	},
	{
		name: 'About',
		link: '/about',
	},
	{
		name: 'Projects',
		link: '/projects',
	},
	{
		name: 'Articles',
		link: '/articles',
	},
	{
		name: 'Contact',
		link: '/contact',
	},
];

const Footer: React.FC = () => {
	return (
		<Container sx={{ py: (theme) => theme.spacing(3) }}>
			<Divider sx={{ mb: (theme) => theme.spacing(3) }} />
			<Stack direction="row" spacing={2}>
				{menus.map((item, index) => (
					<Link
						key={`${item.name}_${index}`}
						component={NavLink}
						to={item.link}
						sx={{
							color: (theme) => theme.palette.default.main,
							'&:hover, &.active': {
								color: (theme) => theme.palette.primary.main,
							},
							transition: 'color ease 0.3s',
							fontWeight: 600,
							textDecoration: 'none',
						}}
					>
						{item.name}
					</Link>
				))}
			</Stack>
		</Container>
	);
};

export default Footer;
