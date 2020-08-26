import React, { useContext } from 'react';
import { Cards, LineChart, PieChart, CountryPicker, Header, Footer } from './components';
import { Grid } from '@material-ui/core';

import { GlobalContext } from './context/GlobalState';

import styles from './App.module.css';

function App() {
	const { country } = useContext(GlobalContext);

	return (
		<div className={styles.container}>
			<Grid container spacing={3} direction="row" justify="space-around" alignItems="center">
				<Grid item xs={12} md={12} zeroMinWidth>
					<Header />
					<CountryPicker />
				</Grid>

				<Grid item xs={12} md={3} zeroMinWidth>				
					<Cards />
				</Grid>

				<Grid item xs={12} md={8} zeroMinWidth>
					{country ? <PieChart /> : <LineChart />}				
				</Grid>

				{/* <Grid item xs={12} md={12} zeroMinWidth>
					<Footer />
				</Grid>		 */}
				<Footer />
			</Grid>
		</div>
	);
}

export default App;
