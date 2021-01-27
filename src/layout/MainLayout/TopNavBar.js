import React from 'react';
import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  Link,
  makeStyles,
  Container,
  IconButton,
} from '@material-ui/core';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdPictureAsPdf } from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    height: 64,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: theme.spacing(2),
    fontWeight: 'bold',
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
    width: 2,
    height: 45,
    // marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: '#d4d4d4',
  },
  icon: {
    fontSize: 34,
    color: theme.palette.text.primary,
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
            className={classes.logo}
            color="textSecondary"
            underline="none"
            offset="64"
            href="#home"
            style={{ fontSize: '44px' }}
          >
            ST
          </Link>
          <Divider className={classes.divider} />

          <Link
            href={'https://github.com/Tuaev'}
            target="_blank"
            rel="noopener noreferrer"
            component={IconButton}
            aria-label="GitHub"
            className={classes.icon}
            disableRipple
            disableFocusRipple
          >
            <FaGithubSquare />
          </Link>

          <Link
            href={'https://github.com/Tuaev'}
            target="_blank"
            rel="noopener noreferrer"
            component={IconButton}
            aria-label="GitHub"
            className={classes.icon}
            disableRipple
            disableFocusRipple
          >
            <FaLinkedin />
          </Link>
          <Link
            href={'/pdf/my-cv.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            component={IconButton}
            aria-label="GitHub"
            className={classes.icon}
            disableRipple
            disableFocusRipple
          >
            <MdPictureAsPdf />
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
            offset="185"
            href="#about"
          >
            ABOUT
          </Link>
          <Link
            component={AnchorLink}
            className={classes.link}
            color="textPrimary"
            underline="none"
            offset="185"
            href="#work"
          >
            WORK
          </Link>
          <Link
            component={AnchorLink}
            className={classes.link}
            color="textPrimary"
            underline="none"
            offset="185"
            href="#contact"
          >
            CONTACT
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopNavBar;
