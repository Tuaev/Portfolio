import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  Link,
  makeStyles,
  Container,
  IconButton,
  Hidden,
  SvgIcon,
  Drawer,
} from '@material-ui/core';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdPictureAsPdf } from 'react-icons/md';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerContent from './DrawerContent';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.only('md')]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
  },
  toolbar: {
    height: 64,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: theme.spacing(1.5),
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
    fontSize: 30,
    color: theme.palette.text.primary,
  },
  menuIcon: {
    color: theme.palette.secondary.main,
  },
  mobileDrawer: {
    width: 256,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

function TopNavBar() {
  const classes = useStyles();
  const [openMobileNav, setOpenMobileNav] = useState();

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
            <img
              alt="logo"
              src="/static/logo.svg"
              style={{ height: '54px', marginTop: '14px' }}
            />
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
            href={'https://www.linkedin.com/in/tuaev/'}
            target="_blank"
            rel="noopener noreferrer"
            component={IconButton}
            aria-label="LinkedIn"
            className={classes.icon}
            disableRipple
            disableFocusRipple
          >
            <FaLinkedin />
          </Link>
          <Link
            href={'/pdf/Soslan-Tuaev-CV.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            component={IconButton}
            aria-label="CV"
            className={classes.icon}
            disableRipple
            disableFocusRipple
          >
            <MdPictureAsPdf />
          </Link>

          <Box flexGrow={1} />
          <Hidden smDown>
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
          </Hidden>
          <Hidden mdUp>
            <IconButton color="inherit" onClick={() => setOpenMobileNav(true)}>
              <SvgIcon fontSize="large">
                <MenuIcon className={classes.menuIcon} />
              </SvgIcon>
            </IconButton>
          </Hidden>
          <Drawer
            anchor="right"
            classes={{ paper: classes.mobileDrawer }}
            onClose={() => setOpenMobileNav(false)}
            open={openMobileNav}
            variant="temporary"
          >
            <DrawerContent setOpenMobileNav={setOpenMobileNav} />
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopNavBar;
