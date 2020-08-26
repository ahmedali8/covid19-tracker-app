import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Card.module.css';

const CardComponent = ({ className, cardTitle, value, lastUpdate, cardSubtitle, borderStyle }) => {
    return (
        <Grid item component={Card} elevation={3} className={cx(styles.card, className)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {cardTitle}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    <CountUp
                        start={0}
                        end={value}
                        duration={2.4}
                        separator=","
                        style={borderStyle}
                    />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="subtitle2">
                    {cardSubtitle}
                </Typography>
            </CardContent>
        </Grid>
    );
};

export default CardComponent;
