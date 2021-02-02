import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { FiArrowDownCircle } from 'react-icons/fi';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import programmer from 'src/assets/lotties/programming';
import programmer from 'src/assets/lotties/working-man';
import { Lottie } from '@crello/react-lottie';

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
      maxWidth: '100%',
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
  order: {
    [theme.breakpoints.down('md')]: {
      order: 1,
    },
  },
}));

function Home() {
  const classes = useStyles();
  const SVGRendererConfig = { preserveAspectRatio: 'xMidYMid meet' };

  return (
    <div className={classes.root} id="home">
      <Grid container spacing={3} className={classes.feature}>
        <Grid item md={12} lg={6} className={classes.order}>
          <Typography variant="h1" color="textSecondary">
            Soslan Tuaev
          </Typography>
          <Box mt="1rem">
            <Typography variant="h5" component="p" color="textPrimary">
              A Computer Science graduate and Front-End Developer based in Dublin, Ireland
              who is actively seeking{' '}
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
              <Lottie
                config={{
                  animationData: programmer,
                  rendererSettings: SVGRendererConfig,
                  loop: true,
                }}
                style={{
                  margin: '0 auto',
                  position: 'absolute',
                  left: '0',
                  right: '-10%',
                  // top: '-30%',
                }}
                // height="400px"
                // width="110px"
              />
              <img alt="Shapes" src="/static/home/shapes.svg" />
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
