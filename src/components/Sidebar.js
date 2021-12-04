import React from 'react';
import { Paper, Grid, Typography, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles({
    paper:{
        padding : 15,
    },
    sidebar:{
        marginTop: 19
    }
})

const Sidebar = ({title, description,archives, social}) => {

    const classes = useStyles();
    return (
        <>
        <Grid xs={12} md={4}>
            <Paper elevation ={0} className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.sidebar}>
                Archives
            </Typography>
            {archives.map((archive) => (
                <Link
                display="block"
                variant="body1"
                href={archive.url}
                key={archive.title}
                >
                {archive.title}
                </Link>
            ))}
            <Typography variant="h6" gutterBottom className={classes.sidebar}>
                Social
            </Typography>
            {social.map((item) => (
                <Link display="block" variant="body1" key={item.title} href="#">
                    <Grid container direction="row" spacing={1} alignItems="center">
                        <Grid item>
                            <item.icon/>
                        </Grid>
                        <Grid item>
                            {item.name}
                        </Grid>
                    </Grid>
                </Link>
            ))}
        </Grid>
        </>
    )
}

export default Sidebar
