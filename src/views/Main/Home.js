import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
    },
  },
  feature: {
    height: '85%',
    display: 'flex',
    alignItems: 'center',
  },
  shape: {
    // position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="home">
      <Grid container spacing={3} className={classes.feature}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" color="textSecondary">
            Soslan Tuaev
          </Typography>
          <Box mt="1rem">
            <Typography variant="h5" component="p" color="textPrimary">
              A Computer Science graduate and JavaScript Developer based in Dublin who is
              actively seeking{' '}
              <i>
                <strong>New Opportunities </strong>
              </i>
              for Software Developer roles.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box position="relative">
            <div className={classes.shape}>
              <img alt="Shapes" src="/static/home/shapes.svg" />
            </div>
            {/* <div className={classes.image}>
                <img alt="Presentation" src="/static/home/categories-dashboard.jpg" />
              </div> */}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
