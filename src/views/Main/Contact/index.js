import {
  Box,
  Button,
  Divider,
  Link,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import React from 'react';
import ContactForm from './ContactForm';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SaveIcon from '@material-ui/icons/Save';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    marginTop: spacing(12),
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
    // marginLeft: spacing(2),
    [breakpoints.down('md')]: {
      // fontSize: 14,
      marginLeft: spacing(5),
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
    // boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
    transition: 'box-shadow 0.3s ease-in-out',

    '&:hover': {
      backgroundColor: '#ffffff',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    },
  },
  divider: {
    width: 1,
    height: 54,
    position: 'absolute',
    marginLeft: spacing(5),
    marginTop: spacing(-1.5),
    // marginRight: spacing(1),
    backgroundColor: '#d4d4d4',
  },
}));

function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('md'));
  console.log(smUp);
  return (
    <div className={classes.root} id="contact">
      <Typography variant="h1" component="h2" align="center" color="textSecondary">
        Contact
      </Typography>
      <Box my="3.5rem">
        <Paper className={classes.paper} elevation={8}>
          {smUp && (
            <div className={classes.chipBox}>
              <Button
                component={Link}
                href="mailto:soslan@tuaev.com"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.button}
                startIcon={
                  <>
                    <MailOutlineIcon style={{ fontSize: 30, marginRight: 12 }} />
                    <Divider className={classes.divider} />
                  </>
                }
              >
                soslan@tuaev.com
              </Button>
              <Button
                component={Link}
                href="mailto:soslan@tuaev.com"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.button}
                startIcon={
                  <>
                    <LinkedInIcon style={{ fontSize: 30, marginRight: 12 }} />
                    <Divider className={classes.divider} />
                  </>
                }
              >
                Soslan Tuaev
              </Button>
              <Button
                component={Link}
                href="mailto:soslan@tuaev.com"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.button}
                startIcon={
                  <>
                    <SaveIcon style={{ fontSize: 30, marginRight: 12 }} />
                    <Divider className={classes.divider} />
                  </>
                }
              >
                Resume
              </Button>
            </div>
          )}
          <ContactForm />
        </Paper>
      </Box>
    </div>
  );
}

export default Contact;
