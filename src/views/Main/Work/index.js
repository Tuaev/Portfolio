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
    website: [{ link: 'https://wresmnr.netlify.app/', button: 'Live Website' }],
    image: '/static/work/wresmnr-home-min.png',
    button: 'Live Website',
  },
  {
    id: '6',
    title: 'Virtual Bank',
    description:
      'A virtual bank landing page that demonstrates the use of smooth-scrolling, custom CSS and styled-components in React. ',
    tags: ['React.js', 'Styled-Components'],
    website: [
      { link: 'https://virtualbank7.netlify.app/', button: 'Live Website' },
      { link: 'https://github.com/Tuaev/VirtualBank-styled-comp-layout', button: 'GitHub' },
    ],
    image: '/static/work/virtual-bank.jpg',
    button: 'Live Website',
  },
  {
    id: '2',
    title: 'Wrestling Ireland',
    description:
      'The official website of the Irish Amateur Wrestling Association. A Full-Stack application to manage membership, tournaments and events with secure payments.',
    tags: ['Node.js', 'MongoDB', 'Express'],
    website: [{ link: 'https://www.irishwrestling.ie/', button: 'Live Website' }],
    image: '/static/work/wrestling-admin-min.png',
    button: 'Live Website',
  },
  {
    id: '3',
    title: 'React E-Commerce',
    description:
      'A Full-Stack application using the MERN stack. A complete e-commerce website with order management and secure PayPal payment system. Complete with Admin panel.',
    tags: ['MERN', 'Redux', 'React.js', 'Node.js'],
    website: [{ link: 'https://github.com/Tuaev/E-commerce-MERN', button: 'GitHub' }],
    image: '/static/work/ecommerce-react-min.png',
    button: 'GitHub',
  },
  {
    id: '4',
    title: 'UI Colour Picker',
    description:
      'A React palette generator and colour picker based on Flat UI Colors and Material UI Color. Created as part of Colt Steeles React Bootcamp Assigment.',
    tags: ['React.js', 'JSS', 'Material-UI'],
    website: [
      { link: 'https://ui-colour-picker.netlify.app/', button: 'Live Website' },
      { link: 'https://github.com/Tuaev/ui-color-picker/', button: 'GitHub' },
    ],
    image: '/static/work/ui-color-picker.png',
    button: 'Live Website',
  },
  {
    id: '5',
    title: 'Job Listings Filter',
    description:
      'Fully responsive Job Listing App built on React. Filters by job level, category and language. Part of the Front-End Mentor job listing challenger',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS'],
    website: [
      { link: 'https://job-listing-appjs.netlify.app/', button: 'Live Website' },
      { link: 'https://github.com/Tuaev/Job-Listing-Filter-App', button: 'GitHub' },
    ],
    image: '/static/work/job-listing-min.png',
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
        <Grid container spacing={3} justify="center">
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
