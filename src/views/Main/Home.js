import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { FiArrowDownCircle } from 'react-icons/fi';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
    },
  },
  heading: {
    [theme.breakpoints.down('md')]: {
      fontSize: 44,
    },
  },
  feature: {
    height: '85%',
    display: 'flex',
    alignItems: 'center',
    '& h1': {
      [theme.breakpoints.down('sm')]: {
        fontSize: 44,
      },
    },
  },
  shape: {
    // position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
    },
  },
  viewWork: {
    marginTop: 14,
    fontSize: '24px',
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px !important',
    },
    '& svg': {
      fontSize: '28px !important',
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="home">
      <Grid container spacing={3} className={classes.feature}>
        <Grid item md={12} lg={6}>
          <Typography variant="h1" color="textSecondary">
            Soslan Tuaev
          </Typography>
          <Box mt="1rem">
            <Typography variant="h5" component="p" color="textPrimary">
              A Computer Science graduate and JavaScript Developer based in Dublin who is
              actively seeking{' '}
              <i>
                <strong>New Opportunities </strong>
              </i>
              for Software Developer roles.
            </Typography>

            <Button
              className={classes.viewWork}
              component={AnchorLink}
              color="secondary"
              startIcon={<FiArrowDownCircle />}
              href={'#work'}
              offset="185"
            >
              View My Work
            </Button>
          </Box>
        </Grid>
        <Grid item md={12} lg={6}>
          <Box position="relative" align="center">
            <div className={classes.shape}>
              <img alt="Shapes" src="/static/home/shapes.svg" />
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
