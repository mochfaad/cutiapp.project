import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";


const styles = {
  card: {
    maxWidth: 345,
    marginTop: '30%', 
  }, 
  media: {
    height: 0,
    pawwwwddingTop: '56.25%', // 16:9
  },
  button: {
    maxWidth: 345,
  }
};  

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" >
    <div>
      <Card className={classes.card}>
        
        <CardContent>

          <Typography variant="display1"component="h2"  gutterBottom align="center">
            Login
          </Typography>
          <Typography><center>login dulu bosss...!!</center></Typography>
          <Grid  container className={classes.demo} justify="center">
          <br></br>
         <TextField
          id="input"
          label="username"
          className={classes.textField}
          type="Input"
          autoComplete="current-password"
          margin="normal" 

        />
         <TextField
          id="password-input"
          label="Password"
          className={classes.textField}
          type="password" 
          autoComplete="current-password"
          margin="normal"
        />
          </Grid>
        </CardContent>
        <CardActions>
            <Grid  container className={classes.demo} justify="center">
            <Link to="/dashboard"><Button variant="contained" color="primary" className={classes.button}>
            login
            </Button></Link>
            </Grid>
         </CardActions>
         <Typography><center>belum punya akun..? <Button href="/regis">registrasi</Button></center></Typography>
         <br></br>
      </Card>
    </div>
    </Grid>
      </Grid>
        </Grid>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
  