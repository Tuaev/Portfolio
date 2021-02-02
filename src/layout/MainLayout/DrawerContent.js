import { Box, IconButton, Link, List, ListItem, makeStyles } from '@material-ui/core';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  link: {
    fontSize: 24,
    fontWeight: theme.typography.fontWeightBold,
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
  centerList: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& li': {
      display: 'block',
      textAlign: 'center',
    },
  },
  icon: {
    fontSize: 50,
    color: '#000000',
  },
}));

function DrawerContent({ setOpenMobileNav }) {
  const classes = useStyles();
  return (
    <Box p={2} mt={6} height="100%">
      <List className={classes.centerList}>
        <ListItem>
          <IconButton aria-label="close drawer" onClick={() => setOpenMobileNav(false)}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        </ListItem>

        <ListItem>
          <Link
            component={AnchorLink}
            className={classes.link}
            color="textPrimary"
            underline="none"
            offset="64"
            href="#home"
            onClick={() => setOpenMobileNav(false)}
          >
            HOME
          </Link>
        </ListItem>
        <ListItem>
          <Link
            component={AnchorLink}
            className={classes.link}
            color="textPrimary"
            underline="none"
            offset="100"
            href="#about"
            onClick={() => setOpenMobileNav(false)}
          >
            ABOUT
          </Link>
        </ListItem>
        <ListItem>
          <Link
            component={AnchorLink}
            className={classes.link}
            color="textPrimary"
            underline="none"
            offset="100"
            href="#work"
            onClick={() => setOpenMobileNav(false)}
          >
            WORK
          </Link>
        </ListItem>
        <ListItem>
          <Link
            component={AnchorLink}
            className={classes.link}
            color="textPrimary"
            underline="none"
            offset="100"
            href="#contact"
            onClick={() => setOpenMobileNav(false)}
          >
            CONTACT
          </Link>
        </ListItem>
        <Box flexGrow={1} />
        <ListItem>
          <Link
            component={AnchorLink}
            className={classes.link}
            color="textPrimary"
            underline="none"
            offset="64"
            href="#home"
            onClick={() => setOpenMobileNav(false)}
          >
            <img alt="logo" src="/static/logo.svg" style={{ height: '54px' }} />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default DrawerContent;
