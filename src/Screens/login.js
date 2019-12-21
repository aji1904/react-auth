import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';

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
}
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" align="right" className={classes.title}> 
            <Link to="/" className={classes.Link}><Button color="inherit">Home</Button></Link>
          </Typography>
        </Toolbar>
      </AppBar>
        <Paper align="center" className={{marginTop: 300,}}>
          <Typography variant="h5" component="h3">
            Selamat Datang
          </Typography>
          <Typography component="p">
            Silahkan Login
          </Typography>
        </Paper>

        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    </div>
  );
}
