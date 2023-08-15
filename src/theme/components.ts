import { type ThemeOptions } from '@mui/material/styles';

export const components = (): ThemeOptions['components'] => ({
	MuiButton: {
		styleOverrides: {
			root: {
				textTransform: 'unset',
			},
			contained: {
				boxShadow: 'none',
				'&:hover': {
					boxShadow: 'none',
				},
			},
		},
	},

	MuiButtonGroup: {
		styleOverrides: {
			root: {
				boxShadow: 'none',
			},
		},
	},
});
