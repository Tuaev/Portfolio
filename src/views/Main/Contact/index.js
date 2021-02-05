import {
  Box,
  Button,
  Link,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import ContactForm from './ContactForm';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { MdPictureAsPdf } from 'react-icons/md';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    marginTop: spacing(8),
  },
  paper: {
    zIndex: '1',
    minHeight: 200,
    paddingTop: spacing(8),
    paddingBottom: spacing(4),
    paddingLeft: spacing(6),
    paddingRight: spacing(6),
    [breakpoints.down('sm')]: {
      padding: spacing(3),
    },
  },
  chipBox: {
    zIndex: '2',
    marginTop: '-90px',
    marginBottom: '30px',
    [breakpoints.down('sm')]: {
      marginTop: '-40px',
      marginLeft: spacing(0),
      marginBottom: 10,
    },
  },
  button: {
    fontSize: 24,
    paddingLeft: spacing(2),
    paddingRight: spacing(3),
    marginRight: spacing(3),
    textTransform: 'none',
    textDecoration: 'none !important',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.70), 0 5px 8px -2px rgba(0,0,0,0.50)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#ffffff',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    },
    [breakpoints.down('sm')]: {
      fontSize: 16,
      paddingLeft: spacing(2),
      paddingRight: spacing(1),
      marginRight: spacing(1),
      marginBottom: spacing(2),
    },
  },
  icon: {
    fontSize: '30px !important',
    [breakpoints.down('sm')]: {
      fontSize: '24px !important',
    },
  },
}));

function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <div className={classes.root} id="contact">
      <Typography variant="h1" component="h2" align="center" color="textSecondary">
        Contact
      </Typography>
      <Box my="3.5rem">
        <Paper className={classes.paper} elevation={8}>
          <div className={classes.chipBox}>
            <Button
              component={Link}
              href="mailto:soslan@tuaev.com"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.button}
              startIcon={
                <>
                  <MailOutlineIcon className={classes.icon} />
                </>
              }
            >
              soslan@tuaev.com
            </Button>

            <Button
              component={Link}
              href="https://www.linkedin.com/in/tuaev/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.button}
              startIcon={
                <>
                  <LinkedInIcon className={classes.icon} />
                </>
              }
            >
              Soslan Tuaev
            </Button>
            {mdUp && (
              <Button
                component={Link}
                href="/pdf/Soslan-Tuaev-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.button}
                startIcon={
                  <>
                    <MdPictureAsPdf className={classes.icon} />
                  </>
                }
              >
                Resume
              </Button>
            )}
          </div>
          <ContactForm />
        </Paper>
      </Box>
    </div>
  );
}

export default Contact;
