import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
  image: {
    maxWidth: 78,
  },
  centerImage: {
    textAlign: 'center',
  },
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="about">
      <Typography variant="h1" component="h2" align="center" color="textSecondary">
        About Me
      </Typography>
      <Box my="3rem">
        {/* <Typography variant="h5" component="p" color="textPrimary">
          I graduated with a Computer Science Bachlor's degree 👨‍💻 from the Dublin
          Institute of Technology in 2016. Since then I've done freelance web development
          work and ran a non-software related company for 4 years. In my free time I enjoy
          designing and creating real world Single Page Applications as side projects.
          Some technologies that I enjoy working with are React.js, MongoDB, Node.js and
          Express with a recent interest in TypeScript.
        </Typography> */}
        <Typography variant="h5" component="p" color="textPrimary">
          Graduated with a Computer Science Bachlor's degree from the Dublin Institute of
          Technology in 2016. Worked as a freelance web development in my off time and ran
          a non-software related company for 4 years. In my free time I enjoy designing
          and creating real world Single Page Applications as side projects. Some
          technologies that I enjoy working with are React.js, MongoDB, Node.js and
          Express with a recent interest in TypeScript.
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          className={classes.centerImage}
        >
          <Grid item xs={4} md={2}>
            <img
              src="/static/skills/javascript-original.svg"
              alt="javascript"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <img
              src="/static/skills/react-original.svg"
              alt="react"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <img
              src="/static/skills/nodejs-original.svg"
              alt="nodejs"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <img
              src="/static/skills/mongodb-original.svg"
              alt="mongodb"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <img
              src="/static/skills/html5-original.svg"
              alt="html5"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={4} md={2}>
            <img
              src="/static/skills/css3-original.svg"
              alt="css3"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
