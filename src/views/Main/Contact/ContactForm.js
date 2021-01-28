import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { RiSendPlaneFill } from 'react-icons/ri';
const useStyles = makeStyles((theme) => ({
  alignRight: {
    textAlign: 'right',
  },
  button: {
    fontSize: 19,
    fontWeight: 'bold',
  },
}));
function ContactForm() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();
  const [message, setMessage] = useState();

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit="submit"
    >
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <TextField
            name="fullName"
            variant="outlined"
            fullWidth
            color="secondary"
            label="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            name="email"
            variant="outlined"
            fullWidth
            color="secondary"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            name="message"
            variant="outlined"
            fullWidth
            color="secondary"
            multiline
            rows={8}
            label="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <div hidden>
          <input name="bot-field" />
        </div>
        <Grid item sm={12} className={classes.alignRight}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            endIcon={<RiSendPlaneFill style={{ marginTop: -3 }} />}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactForm;
