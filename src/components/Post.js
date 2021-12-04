import { Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    cardMedia:{
        width: 160
    },
    card:{
        display: "flex"
    },
    detiles:{
        flex: 1
    }
});

const Post = ({post}) => {
    const classes = useStyle();
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <div className={classes.detiles}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" style={{color: "skyblue"}}>
                                Continue Reading....
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia}
                            image={post.image}
                            title={post.imageText}
                        />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default Post
