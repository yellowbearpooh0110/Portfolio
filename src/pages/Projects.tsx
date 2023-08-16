import * as React from 'react';

import { Container } from '@mui/system';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import homepageImg from '@assets/images/homepage.jpg';
import ProjectsComponent from '@components/projects/Projects';
import INFO from '@data/user';
import { Box, Grid, Typography } from '@mui/material';

import SEO from '@data/seo';

const ProjectsImg = styled.img(
	css({
		maxWidth: '100%',
	})
);

const Projects: React.FC = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={SEO.projects.description} />
				<meta name="keywords" content={SEO.projects.keywords.join(', ')} />
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
								Things I've made trying to put my dent in the universe.
							</Typography>
							<Typography>
								I've worked on a variety of projects over the years and I'm
								proud of the progress I've made. Many of these projects are
								open-source and available for others to explore and contribute
								to. If you're interested in any of the projects I've worked on,
								please feel free to check out the code and suggest any
								improvements or enhancements you might have in mind.
								Collaborating with others is a great way to learn and grow, and
								I'm always open to new ideas and feedback.
							</Typography>
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
							<ProjectsImg src={homepageImg} />
						</Box>
					</Grid>
				</Grid>
				<ProjectsComponent />
			</Container>
		</React.Fragment>
	);
};

export default Projects;
