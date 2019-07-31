import React from 'react';
// import 'typeface-roboto';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import Slider from '@material-ui/core/Slider';

import { clubs } from './data';
console.log({clubs});

// import './App.css';

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
}));

function App() {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [state, setState] = React.useState({
    native: true,
    asian: true,
    black: true,
    hispanic: true,
    pacific: true,
    white: true
  });
  const [height, setHeight] = React.useState([0, 100]);
  const [age, setAge] = React.useState([0, 100]);

  function applyFilters(state, height) {
    let filtered = [];
    for (let i = 0; i < clubs.length; i++) {
      const club = {
        name: clubs[i].name,
        members: clubs[i].members,
        filtered: clubs[i].members.filter(next => {
          return state[next.ethnicity] &&
            next.height >= (height[0] + 140) && next.height <= (height[1] + 140);
        })
      };

      filtered.push(club);
    }

    return filtered;
  }


  const classes = useStyles();

  const filtered = applyFilters(state, height);

  const items = filtered.map(club => {
    const members = club.filtered.map(member => (
      <span>
        {member.name}
      </span>
    ));
    return (
      <div key={club.name}>
        <div>{club.name}</div>
        <div>{club.filtered.length} / {club.members.length} Members</div>
        <div>
          {members}
        </div>
      </div>
    );
  });

  function handleClickFilter() {
    setFilterOpen(true);
  }

  function handleCloseFilter() {
    // applyFilters(state);
    setFilterOpen(false);
  }

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleChangeHeight = (event, newValue) => {
    setHeight(newValue);
  };
  const handleChangeAge = (event, newValue) => {
    setAge(newValue);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Clubs
          </Typography>
          <Button color="inherit" onClick={handleClickFilter}>Filter</Button>
        </Toolbar>
      </AppBar>
      <Dialog open={filterOpen} onClose={handleCloseFilter} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Filter</DialogTitle>
        <DialogContent>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Ethnicity</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={state.native} onChange={handleChange('native')} value="native" />}
                label="American Indian"
              />
              <FormControlLabel
                control={<Checkbox checked={state.asian} onChange={handleChange('asian')} value="asian" />}
                label="Asian"
              />
              <FormControlLabel
                control={<Checkbox checked={state.black} onChange={handleChange('black')} value="black" />}
                label="Black"
              />
              <FormControlLabel
                control={<Checkbox checked={state.hispanic} onChange={handleChange('hispanic')} value="hispanic" />}
                label="Hispanic"
              />
              <FormControlLabel
                control={<Checkbox checked={state.pacific} onChange={handleChange('pacific')} value="pacific" />}
                label="Pacific Islander"
              />
              <FormControlLabel
                control={<Checkbox checked={state.white} onChange={handleChange('white')} value="white" />}
                label="White"
              />
            </FormGroup>
          </FormControl>
          <h4>Height</h4>
          <Slider value={height} onChange={handleChangeHeight} />
          <h4>Age</h4>
          <Slider value={age} onChange={handleChangeAge} />

          {/* <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Ethnicity</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={state.native} onChange={handleChange('native')} value="native" />}
                label="American Indian"
              />
              <FormControlLabel
                control={<Checkbox checked={state.asian} onChange={handleChange('asian')} value="asian" />}
                label="Asian"
              />
              <FormControlLabel
                control={<Checkbox checked={state.black} onChange={handleChange('black')} value="black" />}
                label="Black"
              />
              <FormControlLabel
                control={<Checkbox checked={state.hsipanic} onChange={handleChange('hispanic')} value="hispanic" />}
                label="Hispanic"
              />
              <FormControlLabel
                control={<Checkbox checked={state.pacific} onChange={handleChange('pacific')} value="pacific" />}
                label="Pacific Islander"
              />
              <FormControlLabel
                control={<Checkbox checked={state.white} onChange={handleChange('white')} value="white" />}
                label="White"
              />
            </FormGroup>
          </FormControl> */}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFilter} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
      {items}
    </div>
  );
}

export default App;
