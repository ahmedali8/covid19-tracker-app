import React from 'react';
import { Cards, LineChart, PieChart, CountryPicker, Header } from './components';

import { Grid } from '@material-ui/core';

import styles from './App.module.css';

function App() {
	return (
		<div className={styles.container}>
			<Grid container spacing={3}>
				<Grid item spacing={3} xs={12} md={12}>
					<Header />
				</Grid>
				<Grid item spacing={3} xs={12} md={4}>
					<Cards />
					<PieChart />
				</Grid>
				<Grid item spacing={3} xs={12} md={8}>
					<CountryPicker />
					<LineChart />
				</Grid>			
			</Grid>
		</div>
	);
}

export default App;
