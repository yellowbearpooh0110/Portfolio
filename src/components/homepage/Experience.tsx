import * as React from 'react';

import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	timelineItemClasses,
	TimelineSeparator,
} from '@mui/lab';
import { Avatar, Paper, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const histories = [
	{
		from: new Date('2018/01'),
		to: 'Present',
		companyAvatar: './images/company_logos/forecastable.jfif',
		company: 'Forecastable',
		role: 'Chief Technology Officer',
		location: 'Orlando, Florida, United States',
		description:
			'The Future of B2B Revenue is Here: Real-Time Co-Selling, Between Partners, Across Any CRM',
	},
	{
		from: new Date('2016/02'),
		to: 'Present',
		company: 'Complete Strategic Solutions, LLC',
		role: 'Managing Director - Sr. Software Developer',
		location: 'Orlando, Florida Area, United States',
	},
	{
		from: new Date('2012/02'),
		to: new Date('2015/12'),
		companyAvatar: './images/company_logos/health_fitness_corporation.jfif',
		company: 'Health Fitness Corporation',
		role: 'Sr. Developer',
		location: 'Lake Forest, Illinois, United States',
		description:
			'Health Fitness offers corporate wellness solution to organizations. The system is an Enterprise multi tenancy health and wellness web site which leverages Kentico CMS built on ASP.Net technologies. The HFit platform incorporates the web technologies including but not limited to Knockout, Ajax and Azure Service Bus. This solution is hosted in Azure on a web farm built to scale. We successfully developed this project using an agile approach with 3 week sprints.',
	},
	{
		from: new Date('2012/10'),
		to: new Date('2012/12'),
		companyAvatar: './images/company_logos/lightmaker.jfif',
		company: 'Lightmaker',
		role: 'Sr. Web Developer (Contractor)',
		location: 'Lake Forest, Illinois, United States',
		description:
			'Lightmaker is a leader in digital media who recently entered the enterprise development market. Now in the enterprise space, Lightmaker has been tasked with rewriting an enterprise application for an online car auction company called Copart. I was brought on as an enterprise web developer. My responsibilities included utilizing MVC, JavaScript, jQuery and Crown Peak CMS.',
	},
	{
		from: new Date('2006/05'),
		to: new Date('2012/10'),
		company: 'Fidelity National Information Services',
		companyAvatar:
			'./images/company_logos/fidelity_national_information_services.jfif',
		role: 'Sr. Software Developer',
		description:
			"FIS is the world's largest global provider dedicated to banking and payments technologies. FIS serves more than 14,000 institutions in over 100 countries. FIS provides payment processing and banking solutions software.",
	},
	{
		from: new Date('2006/04'),
		to: new Date('2006/07'),
		companyAvatar: './images/company_logos/gartner.jfif',
		company: 'Gartner',
		role: 'Sr. Software Consultant (Contractor)',
		description:
			'Gartner serves 10,000 organizations including corporations and government agencies. The Company consists of Gartner Research, Gartner Executive Programs, Gartner Consulting and Gartner Events. Founded in 1979 and has 3,700 associates, including 1,200 research analysts and consultants in 75 countries worldwide.',
	},
	{
		from: new Date('2006/01'),
		to: new Date('2006/03'),
		company: 'MEDai',
		role: 'Sr. Web Development (Contractor)',
		description:
			'Medical artificial intelligence MEDai, Inc. is a leading health information company. MEDai provides medical companies with solutions that incorporate disease focused severity adjustCment, benchmarking and evidence-based processes of care to improve outcomes in a hospital-based setting.',
	},
	{
		from: new Date('2005/02'),
		to: new Date('2005/12'),
		company: 'Kirchman Corporation',
		role: 'Sr. Software Developer (Contractor)',
		description:
			'Kirchman Corporation is a software development company in the banking industry. Kirchman provides a variety of applications from banking to call center applications for small to large banks. Also there is an international version of their main banking software Bankway.',
	},
	{
		from: new Date('2003/11'),
		to: new Date('2005/02'),
		company: 'IntegraSys',
		role: 'Software Developer',
		description:
			'IntegraSys specializes in software development for small to large credit unions; currently they are converting their existing application to .Net. The existing app was written in Probe (a C-like language) with SQL Server for the back-end. IntegraSys operates at a level 2 CMM process; they embrace the full process development cycle using Microsoft standards and object-oriented methodologies. As a member of a 13 person .Net team, responsibilities included designing and implementing functional areas of the application based on business design requirements delivered by business analysts and product subject matter experts.',
	},
	{
		from: new Date('2003/04'),
		to: new Date('2003/08'),
		company: 'VoloCommunications',
		role: 'Software Engineer',
		description:
			'Member of a 5 person .Net team responsible for developing applications for a new communications system. This start-up company offered brand new technologies in the telecom industry, which required that the engineers be quick learners and fast coders. During the short period of time at Volo I developed more than five applications and created and developed the company’s web site.',
	},
	{
		from: new Date('2002/02'),
		to: new Date('2003/03'),
		company: 'Hirecheck Inc',
		role: 'Web Developer',
		location: 'Tampa/St. Petersburg, Florida Area, United States',
		description:
			'Mid-Level programmer as a member of a 7 person .Net team responsible for the new development and maintenance of three DB2 web sites to perform the following activities: background screening, order submission, employment application submission and management, employment history, and reference checking.',
	},
	{
		from: new Date('2001/09'),
		to: new Date('2001/12'),
		companyAvatar: './images/company_logos/osceola_county_school_district.jfif',
		company: 'Osceola County School District',
		role: 'Web Developer (Contractor)',
		description:
			'Created web site for Student Services. In this site I used DHTML and JavaScript for client-side validation as well as development and design tools such as MS-Visual InterDev and Photoshop.',
	},
];

const Experience: React.FC = () => {
	return (
		<Paper
			sx={{
				py: (theme) => theme.spacing(4),
				mt: (theme) => theme.spacing(4),
			}}
		>
			<Typography
				textAlign="center"
				component="h2"
				variant="h2"
				color="primary"
				fontWeight={700}
			>
				Experience
			</Typography>
			<Timeline
				sx={{
					mt: 0,
					[`& .${timelineItemClasses.root}:before`]: {
						flex: 0,
						padding: 0,
					},
				}}
			>
				{histories.map((item, index) => (
					<TimelineItem key={index}>
						<TimelineSeparator>
							<TimelineDot sx={{ bgcolor: 'transparent' }}>
								<Avatar
									src={item.companyAvatar}
									sx={{ bgcolor: deepPurple[500], color: 'white' }}
								>
									{item.company.charAt(0)}
								</Avatar>
							</TimelineDot>
							{index < histories.length - 1 ? <TimelineConnector /> : null}
						</TimelineSeparator>
						<TimelineContent sx={{ px: 2 }}>
							<Typography
								variant="h6"
								component="h6"
								fontWeight={600}
								sx={{ color: (theme) => theme.palette.success.main }}
							>
								{item.from.toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'short',
								})}{' '}
								-{' '}
								{typeof item.to === 'string'
									? item.to
									: item.to.toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'short',
									  })}
							</Typography>
							<Typography
								variant="h4"
								component="h4"
								fontWeight={700}
								color="secondary"
							>
								{item.role}
							</Typography>
							<Typography
								variant="h5"
								component="h5"
								fontWeight={600}
								color="primary"
							>
								{item.company}
							</Typography>
							<Typography
								variant="h5"
								component="h5"
								fontWeight={600}
								sx={{ color: (theme) => theme.palette.grey[500] }}
							>
								{item.location}
							</Typography>
							<Typography
								variant="h5"
								component="h5"
								fontWeight={600}
								sx={{ color: (theme) => theme.palette.grey[700] }}
							>
								{item.description}
							</Typography>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Paper>
	);
};

export default Experience;
