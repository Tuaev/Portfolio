import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Box, CardActions, Typography, Link } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import { nanoid } from 'nanoid';

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(1), // 16px
    position: 'relative',
    maxWidth: 500,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: spacing(2),
    marginBottom: spacing(8),
    '&:hover $media': {
      top: '-6px',
      boxShadow: '0 0 1px 0 rgba(0,0,0,0.70), 0 12px 22px -8px rgba(0,0,0,0.50)',
    },
  },
  media: {
    zIndex: '1',
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-5),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(0.5),
    backgroundColor: '#fff',
    position: 'relative',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.70), 0 6px 12px -4px rgba(0,0,0,0.50)',
    top: 0,
    WebkitTransition: ' 0.3s ease',
    MozTransition: ' 0.3s ease',
    MsTransition: ' 0.3s ease',
    OTransition: ' 0.3s ease',
    transition: ' 0.3s ease',
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    paddingLeft: spacing(3),
    paddingRight: spacing(3),
    paddingBottom: spacing(1),
    paddingTop: spacing(1),
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
  cardActions: {
    paddingRight: spacing(3),
    paddingTop: 0,
    justifyContent: 'flex-end',
  },
  button: {
    textTransform: 'none',
    textDecoration: 'none !important',
  },
  chipBox: {
    zIndex: '2',
    marginTop: '-12px',
    marginLeft: spacing(4),
    [breakpoints.down('md')]: {
      marginLeft: spacing(5),
    },
  },
  chip: {
    borderRadius: spacing(0.3),
    background: palette.secondary.main,
    padding: '5px 15px',
    paddingTop: spacing(0.5),
    paddingBottom: spacing(0.3),
    paddingLeft: spacing(1.5),
    paddingRight: spacing(1.5),
    marginLeft: spacing(1),
    marginBottom: spacing(0.5),
    color: 'white',
    fontWeight: '500',
    display: 'inline-block',
    fontSize: 16,
    [breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: spacing(0.5),
      paddingTop: spacing(0.3),
      paddingBottom: spacing(0.1),
      paddingLeft: spacing(1),
      paddingRight: spacing(1),
    },
    [breakpoints.down('sm')]: {
      fontSize: 13,
      marginLeft: 0,
      marginRight: spacing(1),
      paddingTop: spacing(0.3),
      paddingBottom: spacing(0.3),
      paddingLeft: spacing(1),
      paddingRight: spacing(1),
    },
  },
}));

function WorkCard({ project }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised={true}>
      <CardMedia className={classes.media} image={project.image} />
      <Box className={classes.chipBox}>
        {project.tags.map((tag) => (
          <div className={classes.chip} key={nanoid()}>
            {tag}
          </div>
        ))}
      </Box>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: 'bold' }}>
          {project.title}
        </Typography>
        <Typography variant="h6" component="p">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {project.website.map((website) => (
          <Button
            component={Link}
            endIcon={<LaunchIcon />}
            variant="outlined"
            color="secondary"
            href={website.link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.button}
          >
            {website.button}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}

export default WorkCard;
