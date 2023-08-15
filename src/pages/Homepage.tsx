import * as React from 'react';

import {
	GitHub as GitHubIcon,
	Instagram as InstagramIcon,
	Twitter as TwitterIcon,
} from '@mui/icons-material';
import { Container } from '@mui/system';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import INFO from '@data/user';
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';

import homepageImg from '@assets/images/homepage.jpg';
import {
	MailBulk as MailBulkIcon,
	StackOverflow as StackOverflowIcon,
} from '@components/common/icons';
import Projects from '@components/homepage/Projects';
import SEO from '@data/seo';

const HomepageImg = styled.img(
	css({
		maxWidth: '100%',
	})
);

const Homepage: React.FC = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={SEO.home.description} />
				<meta name="keywords" content={SEO.home.keywords.join(', ')} />
			</Helmet>
			<Container>
				<Grid container spacing={2} mb={2}>
					<Grid
						item
						xs={12}
						md={6}
						display="flex"
						alignItems="center"
						order={[1, 1, 0]}
					>
						<Box>
							<Typography
								variant="h1"
								component="h1"
								fontWeight={600}
								fontFamily="Roboto"
								mb={3}
							>
								{INFO.homepage.title}
							</Typography>
							<Typography>{INFO.homepage.description}</Typography>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						display="flex"
						alignItems="center"
						justifyContent="center"
						order={[[0, 0, 1]]}
					>
						<Box
							sx={{
								width: 380,
								maxWidth: '100%',

								borderRadius: '10%',
								overflow: 'hidden',
								transform: 'rotate(3deg)',
							}}
						>
							<HomepageImg src={homepageImg} />
						</Box>
					</Grid>
				</Grid>
				<Stack spacing={1} direction="row" mb={2}>
					<IconButton>
						<TwitterIcon />
					</IconButton>
					<IconButton>
						<GitHubIcon />
					</IconButton>
					<IconButton>
						<StackOverflowIcon />
					</IconButton>
					<IconButton>
						<InstagramIcon />
					</IconButton>
					<IconButton>
						<MailBulkIcon />
					</IconButton>
				</Stack>
				<Projects />
			</Container>
		</React.Fragment>
	);
};

export default Homepage;
