import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';

import { GlobalContext } from '../../context/GlobalState';

import styles from './Cards.module.css';

const Cards = () => {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = useContext(GlobalContext);

    if(!confirmed) {
        return "Loading...";
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} direction="column" justify="center" alignItems="center">
                
                <CardComponent 
                    className={styles.confirmed}
                    cardTitle="Infected"
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of active cases from COVID-19."
                    borderStyle={{ borderBottom: '2px solid rgba(255, 145, 0, 0.5)' }}
                />

                <CardComponent 
                    className={styles.recovered}
                    cardTitle="Recovered"
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of recoveries from COVID-19."
                    borderStyle={{ borderBottom: '2px solid rgba(0, 255, 0, 0.5)' }}
                />

                <CardComponent 
                    className={styles.deaths}
                    cardTitle="Deaths"
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of deaths caused by COVID-19."
                    borderStyle={{ borderBottom: '2px solid rgba(255, 0, 0, 0.5)' }}
                />

                <div className={styles.text}>Rotate the screen on mobile phone</div>
            </Grid>
        </div>
    );
};

export default Cards;
