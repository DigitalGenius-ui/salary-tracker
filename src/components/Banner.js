import React from 'react';
import Card from '@material-ui/core/Card';
import { Button, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    card: {
        padding: "35px 25px",
        backgroundImage: `url(https://images.alphacoders.com/180/thumb-1920-180291.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    title:{
        fontSize: 40,
    },
});

const Banner = () => {
    const classes = useStyle();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    Title of a longer featured blog post
                </Typography>
                <Typography variant="h5" >
                    Multiple lines of text that form the lede, informing new readers quickly and efficiently 
                    about what is most interesting in the blog post.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="text">Read More....</Button>
            </CardActions>
        </Card>
    )
}

export default Banner
