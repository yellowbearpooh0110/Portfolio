import {
	PaletteColor,
	PaletteColorOptions,
	type PaletteOptions,
} from '@mui/material/styles';

export const light: PaletteOptions = {
	mode: 'light',

	default: {
		main: '#27272a',
	},

	primary: {
		main: '#14b8a6',
	},

	background: {
		default: 'rgb(240,242,245)',
	},

	example: {
		primary: '#49b4ff',
		secondary: '#ef3054',
	},
};

export const dark: PaletteOptions = {
	mode: 'dark',

	default: {
		main: '#fff',
	},

	primary: {
		main: 'rgb(45,136,255)',
	},

	background: {
		default: 'rgb(24,25,26)',
	},

	example: {
		primary: '#49b4ff',
		secondary: '#ef3054',
	},
};

export default { light, dark };

/**
 * Append custom variables to the palette object.
 * https://mui.com/material-ui/customization/theming/#custom-variables
 */
declare module '@mui/material/styles' {
	interface Palette {
		default: PaletteColor;
		example: {
			primary: string;
			secondary: string;
		};
	}

	interface PaletteOptions {
		default: PaletteColorOptions;
		example: {
			primary: string;
			secondary: string;
		};
	}
}
