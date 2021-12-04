import { Toolbar, IconButton, Typography, Badge, makeStyles, Divider } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyle = makeStyles((theme) => ({
    title: {
        flexGrow : 1,
    },
    tagline: {
        justifyContent : "center",
        fontSize:20,
        textTransform : "uppercase"
    },
    }));
const Header = () => {
    const classes = useStyle();
    return (
        <>
        <Toolbar>
            <IconButton color="inherit">
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Blogging Website
            </Typography>
            <IconButton color="inherit">
            <Badge badgeContent={4} color="primary">
                <NotificationsIcon/>
            </Badge>
            </IconButton>
            <IconButton color="inherit">
                <AccountCircleIcon/>
            </IconButton>
        </Toolbar>
        <Divider/>
        <Toolbar className={classes.tagline}>
            Express Your Emotions through words
        </Toolbar>
        </>
    );
}

export default Header
