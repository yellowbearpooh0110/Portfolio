import * as React from 'react';

import { Container } from '@mui/system';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import INFO from '@data/user';
import { Box, Grid, Typography } from '@mui/material';

import homepageImg from '@assets/images/homepage.jpg';
import SEO from '@data/seo';

const ArticlesImg = styled.img(
	css({
		maxWidth: '100%',
	})
);

const Articles: React.FC = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.articles.title}</title>
				<meta name="description" content={SEO.articles.description} />
				<meta name="keywords" content={SEO.articles.keywords.join(', ')} />
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
								{INFO.articles.title}
							</Typography>
							<Typography>{INFO.articles.description}</Typography>
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
							<ArticlesImg src={homepageImg} />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Articles;
