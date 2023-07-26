import { type Palette, type ThemeOptions } from '@mui/material/styles';

export const components = (palette: Palette): ThemeOptions['components'] => ({
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
				background: palette.primary.main,
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
