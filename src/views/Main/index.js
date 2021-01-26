import React from 'react';
import About from './About';
import Work from './Work';
import Home from './Home';
import { Container } from '@material-ui/core';

function Main() {
  return (
    <>
      <main id="main">
        <Container maxWidth="xl" style={{ paddingLeft: '48px', paddingRight: '48px' }}>
          <Home />
          <About />
          <Work />
        </Container>
      </main>
    </>
  );
}

export default Main;
