import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'gatsby';
import styles from './styles';

const MAX = 6;
const MIN = 1;
let ID;

ID = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
if (typeof window !== 'undefined' && window) {
  if (localStorage.getItem('flag')) {
    ID = localStorage.getItem('id');
  }

  localStorage.setItem('id', ID);
  localStorage.setItem('flag', true);
}

const AuthorOfTheDay = ({
  data: { headline, linkPage, info },
  classes: {
    root, subtitle, image, img, button,
  },
}) => (
  <div>
    {JSON.parse(JSON.stringify(info)).filter(value => value.id === ID)
      .map(({
        name, photo, place, day, link,
      }) => (
        <Paper className={root}>
          <Grid container spacing={2}>
            <Grid item xs={10} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" className={subtitle}>
                    {headline}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {day}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {place}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <ButtonBase className={image}>
                <img className={img} alt="complex" src={photo} />
              </ButtonBase>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              <ButtonBase>
                <Link to={`/writer/${link}/`} className={button}>{linkPage}</Link>
              </ButtonBase>
            </Typography>
          </Grid>
        </Paper>
      ))}
  </div>
);

AuthorOfTheDay.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(AuthorOfTheDay);
