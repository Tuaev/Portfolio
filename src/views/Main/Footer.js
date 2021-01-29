import { Box, Link } from '@material-ui/core';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Footer() {
  return (
    <Box mt="3rem" mb="2rem" align="center">
      <Link
        component={AnchorLink}
        color="textPrimary"
        underline="none"
        offset="185"
        href="#home"
      >
        <img alt="logo" src="/static/logo.svg" style={{ height: '88px' }} />
      </Link>
    </Box>
  );
}

export default Footer;
