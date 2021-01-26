import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(26),
  },
}));

function Work() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="about">
      <Typography variant="h1" component="h2" align="center" color="textSecondary">
        Work
      </Typography>
      <Box mt="3rem"></Box>
    </div>
  );
}

export default Work;
