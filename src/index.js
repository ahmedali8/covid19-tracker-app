import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { GlobalProvider } from './context/GlobalState';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(
	<GlobalProvider>
		<ThemeProvider theme={theme}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<App />
		</ThemeProvider>
	</GlobalProvider>,
	document.getElementById('root')
);