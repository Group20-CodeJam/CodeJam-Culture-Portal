import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import styles from './styles';

const AuthorOfTheDay = ({
  classes: {
    root, subtitle, image, img,
  },
}) => (
  <Paper className={root}>
    <Grid container spacing={2}>
      <Grid item xs={10} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" className={subtitle}>
                  Писатель дня
            </Typography>
            <Typography variant="body2" gutterBottom>
                  Василь Быков
            </Typography>
            <Typography variant="body2" color="textSecondary">
                  19.06.1924
            </Typography>
            <Typography variant="body2" color="textSecondary">
                  Белорусский писатель, общественный деятель.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <ButtonBase className={image}>
          <img className={img} alt="complex" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vasil_Bykov_%28cropped%29.jpg/267px-Vasil_Bykov_%28cropped%29.jpg" />
        </ButtonBase>
      </Grid>
    </Grid>
    <Grid item>
      <Typography variant="body2">
        <ButtonBase>
            Перейти
        </ButtonBase>
      </Typography>
    </Grid>
  </Paper>
);
AuthorOfTheDay.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(AuthorOfTheDay);
