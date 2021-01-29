import { Box, Link, List, ListItem, makeStyles } from '@material-ui/core';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const useStyles = makeStyles((theme) => ({
  link: {
    fontSize: 24,
    fontWeight: theme.typography.fontWeightBold,
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function DrawerContent({ setOpenMobileNav }) {
  const classes = useStyles();
  return (
    <Box p={2} mt={6}>
      <List>
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
            offset="64"
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
            offset="64"
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
            offset="64"
            href="#contact"
            onClick={() => setOpenMobileNav(false)}
          >
            CONTACT
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default DrawerContent;
