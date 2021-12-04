import { Container, ThemeProvider, createTheme, Grid, makeStyles } from '@material-ui/core';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Main from './components/Main';
import Post from './components/Post';
import Sidebar from './components/Sidebar';
import { featuredPosts, sidebar } from './data/Data';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop : theme.spacing(3),
  },
}));

function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
      <Header/>
      <Banner/>
      <br/>
      <Grid container spacing={4}>
        {featuredPosts.map(post => (
          <Post key = {post.title} post={post}/>
        ))}
      </Grid>
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title ="From The Firehose"/>
        <Sidebar 
        title={sidebar.title}
        description={sidebar.description}
        archives={sidebar.archives}
        social={sidebar.social}
        />
      </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
