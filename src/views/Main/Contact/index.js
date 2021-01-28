import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import ContactForm from './ContactForm';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(18),
    height: '100vh',
  },
  paper: {
    minHeight: 200,
    paddingTop: spacing(8),
    paddingBottom: spacing(8),
    paddingLeft: spacing(6),
    paddingRight: spacing(6),
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="contact">
      <Typography variant="h1" component="h2" align="center" color="textSecondary">
        Contact
      </Typography>
      <Box my="2rem">
        <Paper className={classes.paper} elevation={8}>
          <ContactForm />
        </Paper>
      </Box>
    </div>
  );
}

export default Contact;
