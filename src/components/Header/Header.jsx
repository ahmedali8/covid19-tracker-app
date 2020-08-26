import React from 'react';
import { Typography } from '@material-ui/core';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <Typography variant="h2" className={styles.h2Typo}>
                COVID-19 TRACKER
            </Typography>

            <Typography variant="h6" className={styles.h6Typo}>
                By Ahmed Ali
            </Typography>
        </div>
    );
};

export default Header;
