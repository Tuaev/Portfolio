import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import WorkCard from 'src/components/WorkCard';

const workProject = [
  {
    id: '1',
    title: 'Tournament Manager',
    description:
      'A combat sports event and tournament management system. Wresmnr allows you to create and manage events easily with prebuilt Olympic Wrestling brackets.',
    tags: ['Full-Stack', 'React.js', 'Node.js'],
    website: 'https://wresmnr.netlify.app/',
    image: '/static/work/wresmnr-home-min.png',
    button: 'Visit Website',
  },
  {
    id: '2',
    title: 'Wrestling Ireland',
    description:
      'The official website of the Irish Amateur Wrestling Association. A Full-Stack application to manage membership, tournaments and events with secure payments.',
    tags: ['Node.js', 'MongoDB', 'Express'],
    website: 'https://www.irishwrestling.ie/',
    image: '/static/work/wrestling-admin-min.png',
    button: 'Visit Website',
  },
  {
    id: '3',
    title: 'React E-Commerce',
    description:
      'My first Full-Stack application using the MERN stack. A complete e-commerce website with order management and secure PayPal payment system. Complete with Admin panel.',
    tags: ['MERN Stack', 'React.js', 'Node.js'],
    website: 'https://github.com/Tuaev/E-commerce-MERN',
    image: '/static/work/ecommerce-react-min.png',
    button: 'Visit GitHub',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(18),
    // height: '100vh',
  },
}));

function Work() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="work">
      <Typography variant="h1" component="h2" align="center" color="textSecondary">
        Work
      </Typography>
      <Box mt="6rem">
        <Grid container spacing={3} justify="center" alignItems="center">
          {workProject.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <WorkCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Work;
