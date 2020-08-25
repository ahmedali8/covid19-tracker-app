import React from 'react';
import { Cards, LineChart, PieChart, CountryPicker, Header } from './components';

import './App.module.css';

function App() {
	return (
		<div>
			App
			<Header />
			<CountryPicker />
			<Cards />
			<PieChart />
			<LineChart />
		</div>
	);
}

export default App;
