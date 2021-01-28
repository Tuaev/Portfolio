import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

function ContactForm() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', fullName, email, message }),
    })
      .then(() => {
        alert('Success!');
        setEmail('');
        setFullName('');
        setMessage('');
      })
      .catch((error) => alert(error));
  };

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <Grid container spacing={3}>
        <input type="hidden" name="form-name" value="contact" />
        <Grid item xs={12} md={6}>
          <TextField
            required
            type="text"
            name="fullName"
            value={fullName}
            variant="outlined"
            fullWidth
            color="secondary"
            label="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type="email"
            name="email"
            value={email}
            variant="outlined"
            fullWidth
            color="secondary"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type="text"
            name="message"
            value={message}
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
        <Grid item xs={12} className={classes.alignRight}>
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
