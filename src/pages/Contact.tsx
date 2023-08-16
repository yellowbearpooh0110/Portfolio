import * as React from 'react';

import { Container } from '@mui/system';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import INFO from '@data/user';
import { Box, Grid, Link, Typography } from '@mui/material';

import homepageImg from '@assets/images/homepage.jpg';
import SEO from '@data/seo';

const ContactImg = styled.img(
	css({
		maxWidth: '100%',
	})
);

const Contact: React.FC = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={SEO.contact.description} />
				<meta name="keywords" content={SEO.contact.keywords.join(', ')} />
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
								Let's Get in Touch: Ways to Connect with Me
							</Typography>
							<Typography>
								Thank you for your interest in getting in touch with me. I
								welcome your feedback, questions, and suggestions. If you have a
								specific question or comment, please feel free to email me
								directly at &nbsp;{' '}
								<Link href={`mailto:${INFO.main.email}`}>
									{INFO.main.email}
								</Link>
								. I make an effort to respond to all messages within 24 hours,
								although it may take me longer during busy periods.
								Alternatively, you can use the contact form on my website to get
								in touch. Simply fill out the required fields and I'll get back
								to you as soon as possible. Finally, if you prefer to connect on
								social media, you can find me on{' '}
								<Link href={INFO.socials.instagram} target="_blank">
									{INFO.socials.instagram}
								</Link>
								. I post regular updates and engage with my followers there, so
								don't hesitate to reach out. Thanks again for your interest, and
								I look forward to hearing from you!
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
							<ContactImg src={homepageImg} />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Contact;
