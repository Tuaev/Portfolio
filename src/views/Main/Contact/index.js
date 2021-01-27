import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(18),
    height: '100vh',
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="contact">
      <Typography variant="h1" component="h2" align="center" color="textSecondary">
        Contact
      </Typography>
      <Box my="3rem"></Box>
    </div>
  );
}

export default Contact;
