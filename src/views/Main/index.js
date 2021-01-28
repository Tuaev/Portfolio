import React from 'react';
import About from './About';
import Work from './Work';
import Home from './Home';
import Footer from './Footer';
import { Container, makeStyles } from '@material-ui/core';
import Contact from './Contact';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    paddingLeft: spacing(6),
    paddingRight: spacing(6),
    [breakpoints.down('sm')]: {
      paddingLeft: spacing(2.5),
      paddingRight: spacing(2.5),
    },
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <>
      <main id="main">
        <Container maxWidth="xl" className={classes.root}>
          <Home />
          <About />
          <Work />
          <Contact />
          <Footer />
        </Container>
      </main>
    </>
  );
}

export default Main;
