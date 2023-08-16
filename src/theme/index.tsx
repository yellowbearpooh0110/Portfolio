import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useTheme } from './hooks';
/**
 * This component makes the `theme` available down the React tree.
 */
export function ThemeProvider(props: {
	children: React.ReactNode;
}): JSX.Element {
	return <MuiThemeProvider theme={useTheme()} {...props} />;
}
