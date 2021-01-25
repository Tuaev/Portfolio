import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Hidden,
  Typography,
  Link,
  makeStyles,
  Container,
} from '@material-ui/core';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },

  toolbar: {
    height: 64,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  link: {
    fontSize: 20,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

function TopNavBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Container maxWidth={'xl'}>
        <Toolbar className={classes.toolbar}>
          <Link
            component={AnchorLink}
            className={classes.link}
            color="textSecondary"
            underline="none"
            offset="64"
            href="#home"
            style={{ fontSize: '44px' }}
          >
            ST
          </Link>

          <Box flexGrow={1} />
          <Link
            component={AnchorLink}
            className={classes.link}
            color="textPrimary"
            underline="none"
            offset="64"
            href="#home"
          >
            HOME
          </Link>
          <Link
            component={AnchorLink}
            className={classes.link}
            color="textPrimary"
            underline="none"
            offset="64"
            href="#home"
          >
            ABOUT
          </Link>
          <Link
            component={AnchorLink}
            className={classes.link}
            color="textPrimary"
            underline="none"
            offset="64"
            href="#home"
          >
            WORK
          </Link>
          <Link
            component={AnchorLink}
            className={classes.link}
            color="textPrimary"
            underline="none"
            offset="64"
            href="#home"
          >
            CONTACT
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopNavBar;
