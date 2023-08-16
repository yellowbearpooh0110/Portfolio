import * as React from 'react';

import {
	Avatar,
	Box,
	Button,
	Card,
	CardActionArea,
	CardHeader,
	CardMedia,
	Grid,
	Modal,
	Typography,
} from '@mui/material';
import {
	EffectCards,
	EffectCoverflow,
	EffectCreative,
	Keyboard,
	Navigation,
	Pagination,
	Zoom,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperType } from 'swiper/types';
import { Close as CloseIcon } from '@mui/icons-material';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

import INFO from '@data/user';

const effects = ['cards', 'coverflow', 'creative'] as const;
type EffectType = (typeof effects)[number];

type ProjectType = {
	title: string;
	pictures: Array<string>;
	logo: string;
	link: string;
};
type ProjectProps = {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
} & ProjectType;

const Project: React.FC<ProjectProps> = (props) => {
	return (
		<Card>
			<CardHeader
				sx={{}}
				avatar={
					<Avatar aria-label="recipe" src={props.logo} variant="rounded">
						R
					</Avatar>
				}
				title={
					<Typography
						fontWeight={600}
						component="a"
						href={props.link}
						target="_blank"
						sx={{ color: (theme) => theme.palette.default.main }}
					>
						{props.title}
					</Typography>
				}
			/>
			<CardActionArea onClick={props.onClick}>
				<CardMedia
					component="div"
					sx={{
						background: `#00000020 url(${props.pictures[0]}) no-repeat center center / cover`,
						'&::before': {
							content: '""',
							display: 'block',
							paddingTop: '100%',
						},
					}}
				/>
			</CardActionArea>
		</Card>
	);
};

const Projects: React.FC = () => {
	const [previewOpen, setPreviewOpen] = React.useState<boolean>(false);
	const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
	const [effect, setEffect] = React.useState<EffectType>('cards');
	return (
		<React.Fragment>
			{/* <Button
				variant="contained"
				onClick={() => {
					setVal((val) => !val);
				}}
			>
				Test
			</Button> */}
			<Grid container spacing={2} mt={4}>
				{INFO.projects.map((item, index) => (
					<Grid item xs={12} md={6} lg={4} key={index}>
						<Project
							{...item}
							onClick={() => {
								setPreviewOpen(true);
								setSelectedIndex(index);
								setEffect(effects[Math.floor(Math.random() * 3)]);
							}}
						/>
					</Grid>
				))}
			</Grid>

			<Modal
				open={previewOpen}
				onClose={() => {
					setPreviewOpen(false);
				}}
				// keepMounted
			>
				<Box
					sx={{
						position: 'absolute',
						width: '100vw',
						height: '100vh',
						outline: 'none',
					}}
				>
					<Button
						variant="contained"
						color="secondary"
						sx={{
							minWidth: 0,
							padding: '14px',
							borderRadius: '50px',
							position: 'absolute',
							top: 10,
							right: 10,
							zIndex: 99,
						}}
						onClick={() => {
							setPreviewOpen(false);
						}}
					>
						<CloseIcon />
					</Button>
					<Swiper
						// onSwiper={(_swiper: SwiperType) => setSwiper(_swiper)}
						effect={effect}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={1}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: false,
						}}
						creativeEffect={{
							prev: {
								shadow: false,
								translate: [0, 0, -400],
							},
							next: {
								translate: ['100%', 0, 0],
							},
						}}
						cardsEffect={{
							slideShadows: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						zoom={true}
						keyboard={{
							enabled: true,
						}}
						modules={[
							EffectCards,
							EffectCoverflow,
							EffectCreative,
							Keyboard,
							Navigation,
							Pagination,
							Zoom,
						]}
					>
						{INFO.projects[selectedIndex].pictures.map((url, index) => (
							<SwiperSlide
								key={index}
								style={{
									height: '100vh',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									userSelect: 'none',
								}}
							>
								<Box className="swiper-zoom-container">
									<Box
										sx={{
											width: '100%',
											height: '100%',
											background: `url(${url}) no-repeat center center/contain`,
										}}
									/>
								</Box>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</Modal>
		</React.Fragment>
	);
};

export default Projects;
