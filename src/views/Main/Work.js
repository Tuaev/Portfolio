import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(16),
  },
}));

function Work() {
  const classes = useStyles();

  return <div className={classes.root}>Work section</div>;
}

export default Work;
