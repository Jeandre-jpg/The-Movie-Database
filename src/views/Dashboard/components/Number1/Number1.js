import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '7vw',
    backgroundColor: '#aed3f2',
    color: 'black',
    marginTop: '-5vw'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  }
}));

const TotalProfit = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="inherit"
              gutterBottom
              variant="body2"
            >
              NUMBER 1 CAUSE OF DEATH IN SOUTH AFRICA:
            </Typography>
            <Typography
              color="inherit"
              variant="h3"
            >
              Tuberculosis
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalProfit.propTypes = {
  className: PropTypes.string
};

export default TotalProfit;
