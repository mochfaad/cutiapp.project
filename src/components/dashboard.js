import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Home from '@material-ui/icons/Home';
import DraftsIcon from '@material-ui/icons/Drafts';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';



const styles = {

  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 1000,
    marginTop: '5%', 

  },

  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  ler:{
    marginLeft:410,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            E-CUTI
          </Typography>
          {/* <Button color="inherit"  href="/dashboard">home</Button> */}
          <Button color="inherit" href="/">Logout</Button>
        </Toolbar>  
      </AppBar>
      <Grid container spacing={24}>
        <Grid item xs="2">
            <List component="nav">
        <ListItem button component='a' href="/dashboard"> 
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="home" />
        </ListItem>
        <ListItem button component='a' href="/input">
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="pengajuan" />
        </ListItem>
         <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
         <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button component='a' href="/laporan">
          <ListItemText primary="Laporan" />
        </ListItem>
      </List>
        </Grid>
        <Grid item xs={9}>
           <Card className={classes.card}>
        <CardContent>
          <Typography>
          <center><h1>selamat datang</h1></center>
          </Typography>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </Typography>
        </CardContent>
        <CardActions className={classes.ler}>
        <Button variant="contained" color="primary" className={classes.button}>
        learn more
      </Button>
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid> 
         
      
            
</div>        
);
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);