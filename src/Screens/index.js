import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Link: {
      textDecoration: 'none',
      color: '#fff'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" align="right" className={classes.title}> 
            <Link to="/Login" className={classes.Link}><Button color="inherit">Login</Button></Link>
            <Link to="/Daftar" className={classes.Link}><Button color="inherit">Daftar</Button></Link>
          </Typography>
        </Toolbar>
      </AppBar>
        <Paper align="center" className={classes.space}>
          <Typography variant="h5" component="h3">
            Selamat Datang
          </Typography>
          <Typography component="p">
            Silahkan Login
          </Typography>
        </Paper>
    </div>
  );
}
