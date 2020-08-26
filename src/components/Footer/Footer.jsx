import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        marginTop: '30px',
        textAlign: 'center',
    },
    footer: {
        padding: theme.spacing(3, 2),
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    linkColor: {
        color: '#000',
    },
}));


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1" color="textSecondary">
                        Created by: {' '}
                        <Link className={classes.linkColor} href="https://github.com/ahmedali8" target="_blank" rel="noopener noreferrer">
                            Ahmed Ali {'  '} <GitHubIcon />
                        </Link> 
                    </Typography>

                    <Typography variant="body2" color="textSecondary">
                        {'Copyright © '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;
