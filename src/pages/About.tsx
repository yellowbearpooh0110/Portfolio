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
import { Box, Grid, Link, Stack, Typography } from '@mui/material';

import homepageImg from '@assets/images/homepage.jpg';
import {
	MailBulk as MailBulkIcon,
	StackOverflow as StackOverflowIcon,
} from '@components/common/icons';
import SEO from '@data/seo';

const HomepageImg = styled.img(
	css({
		maxWidth: '100%',
	})
);

const About: React.FC = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.about.title}</title>
				<meta name="description" content={SEO.about.description} />
				<meta name="keywords" content={SEO.about.keywords.join(', ')} />
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
								{INFO.about.title}
							</Typography>
							<Typography>{INFO.about.description}</Typography>
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
				<Grid container spacing={2} justifyContent="flex-end">
					<Grid item xs={12} md={5}>
						<Stack spacing={2} ml={2}>
							{[
								{
									desc: 'Follow on Twitter',
									icon: TwitterIcon,
									link: 'https://github.com',
								},
								{
									desc: 'Follow on Github',
									icon: GitHubIcon,
									link: 'https://github.com',
								},
								{
									desc: 'Follow on Twitter',
									icon: StackOverflowIcon,
									link: 'https://github.com',
								},
								{
									desc: 'Follow on Twitter',
									icon: InstagramIcon,
									link: 'https://github.com',
								},
								{
									desc: 'pjohnson@cssllc.co',
									icon: MailBulkIcon,
									link: 'mailto:pjohnson@cssllc.co',
								},
							].map((item, index) => (
								<Link
									key={index}
									href={item.link}
									target="_blank"
									sx={{
										textDecoration: 'none',
										display: 'flex',
										alignItems: 'center',
										color: (theme) => theme.palette.default.main,
										transition: 'color ease 0.3s',
										'&:hover': {
											color: (theme) => theme.palette.primary.main,
										},
									}}
								>
									<item.icon fontSize="small" />
									<Typography
										variant="h5"
										component="span"
										ml={1}
										fontFamily="Roboto"
									>
										{item.desc}
									</Typography>
								</Link>
							))}
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default About;
