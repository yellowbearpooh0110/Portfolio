import * as React from 'react';

import {
	DarkMode as DarkModeIcon,
	LightMode as LightModeIcon,
} from '@mui/icons-material';
import {
	AppBar,
	Avatar,
	Box,
	Container,
	IconButton,
	Link,
	Toolbar,
} from '@mui/material';
import { useTheme, useToggleTheme } from '@theme/hooks';
import { NavLink } from 'react-router-dom';

import avatarImg from '@assets/images/avatar.jpg';

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

const Header: React.FC = () => {
	const theme = useTheme();
	const toggleTheme = useToggleTheme();
	return (
		<AppBar
			position="sticky"
			sx={{ background: 'transparent', boxShadow: 'none', mb: 2 }}
		>
			<Container>
				<Toolbar variant="regular" sx={{ justifyContent: 'space-between' }}>
					<Avatar src={avatarImg}>P</Avatar>
					<Box
						sx={{
							bgcolor: 'background.paper',
							boxShadow: (theme) =>
								theme.palette.mode === 'light'
									? '0 2px 10px #0000001a'
									: '0 2px 10px #ffffff1a',
							borderRadius: 99,
							p: (theme) => theme.spacing(1, 2),
							display: ['none', 'initial'],
						}}
					>
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
									textDecoration: 'none',
									fontWeight: 700,
									mx: (theme) => theme.spacing(1),
								}}
							>
								{item.name}
							</Link>
						))}
					</Box>
					<IconButton onClick={toggleTheme}>
						{theme.palette.mode === 'light' ? (
							<DarkModeIcon />
						) : (
							<LightModeIcon />
						)}
					</IconButton>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
