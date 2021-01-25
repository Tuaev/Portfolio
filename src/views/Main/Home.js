import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';

function Home() {
  return (
    <div style={{ height: '100vh' }} id="home">
      <Container maxWidth="lg">
        <br />
        Just some random Text
        <br />
        <br />
        <Typography variant="h1" color="textPrimary">
          Product designer and Developer, based in Dublin
        </Typography>
        <Typography variant="h2" color="textPrimary">
          Product designer and Developer, based in Dublin
        </Typography>
        <Typography variant="h3" color="textPrimary">
          Product designer and Developer, based in Dublin
        </Typography>
        <Typography variant="h4" color="textPrimary">
          Product designer and Developer, based in Dublin
        </Typography>
        <Typography variant="h5" color="textPrimary">
          Product designer and Developer, based in Dublin
        </Typography>
        <Typography variant="h6" color="textPrimary">
          Product designer and Developer, based in Dublin
        </Typography>
        <Typography variant="subtitle1" color="textPrimary">
          Product designer and Developer, based in Dublin
        </Typography>
        <Typography variant="subtitle2" color="textPrimary">
          Product designer and Developer, based in Dublin
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Product designer and Developer, based in Dublin
        </Typography>
      </Container>
    </div>
  );
}

export default Home;
