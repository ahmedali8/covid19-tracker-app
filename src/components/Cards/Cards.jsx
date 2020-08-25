import React, { useContext } from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import { GlobalContext } from '../../context/GlobalState';

import styles from './Cards.module.css';

const Cards = () => {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = useContext(GlobalContext);
    console.log({ confirmed, recovered, deaths, lastUpdate });

    if(!confirmed) {
        return "Loading...";
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} className={cx(styles.card, styles.confirmed)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={2.7}
                                separator=","
                                style={{ borderBottom: '2px solid rgba(255, 145, 0, 0.5)' }}
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="subtitle2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2.7}
                                separator=","
                                style={{ borderBottom: '2px solid rgba(0, 255, 0, 0.5)' }}
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="subtitle2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2.7}
                                separator=","
                                style={{ borderBottom: '2px solid rgba(255, 0, 0, 0.5)' }}
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="subtitle2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
