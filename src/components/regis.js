import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { Typography } from '../../node_modules/@material-ui/core';


const styles = {
  card: {
    minWidth: 275,
    marginTop: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};                                                                                                                                                                                                                                                                        
                                                         
function SimpleCard(props) {
  const { classes } = props;
 

  return (  
    <Grid container className={classes.root} spacing={16}>
    <Grid item xs={12}>
      <Grid container className={classes.demo} justify="center" >
    <div>
      <Card className={classes.card}>
        <CardContent>
            <Typography variant="subheading">
                <center>registrasi</center>
            </Typography>    



            

        </CardContent>
        <CardActions>
        <Grid  container className={classes.demo} justify="center">
        <Button variant="contained" color="primary" className={classes.button}>
            daftar
            </Button>
        </Grid>
        </CardActions>
      </Card>
    </div>
    </Grid>
        </Grid>
            </Grid>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
