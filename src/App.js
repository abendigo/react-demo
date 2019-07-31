import React from 'react';
// import 'typeface-roboto';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

const enthicity = [
  'American Indian',
  'Asian',
  'Black',
  'Hispanic',
  'Pacific Islander',
  'White'
];

const bust = ['A', 'B', 'C', 'D', 'E+'];

const name = ['Crystal', 'Tiffany', 'Amber','Brandy', 'Lola',
'Angel', 'Ginger', 'Candy', 'Charity', 'Anistasia', 'Cherry',
'Kitty', 'Jade', 'Destiny', 'Devon', 'Chastity', 'Raven',
'Scarlett', 'Bambi', 'Star', 'Paris', 'Dallas', 'Diamond',
'Skye', 'Trinity', 'Tawny', 'Layla', 'Lexie', 'Roxy', 'Prosche',
'Nevaeh', 'Ashlynn', 'Aspen', 'Chyna', 'Lexus', 'Unique',
'Chardonnay', 'Houston', 'London', 'Coco', 'Luscious', 'Capri',
'Trixie', 'Cinnamon', 'Fifi'];

const icon = ['face', 'two'];

function random(max) {
  return Math.floor(Math.random() * max);
}

function randomItem(items) {
  return items[random(items.length)];
}

function generateRandomGirl() {
  return {
    name: randomItem(name),
    ethnicity: randomItem(enthicity),
    bust: randomItem(bust),
    height: 145 + random(50),   // cm
    icon: randomItem(icon)
  }
}


const clubs = [
  { name: 'Deja Vu' },
  { name: 'Airport Strip' },
  { name: 'New Locomotion' },
  { name: 'Midway Invader' },
  { name: 'Diamonds' },
  { name: 'Pure Gold' },
  { name: 'Cafe Atlantis' },
  { name: 'Million Dollar' },
  { name: 'Brass Rail' },
  { name: 'Bliss Gentlemens Lounge' },
  { name: 'Filmores' },
  { name: 'For Your Eyes Only' },
  { name: 'House of Lancaster' },
  { name: 'Landing Strip' },
  { name: 'Zanzibar' },
  { name: 'Club Paradise' },
  { name: 'Remingtons' },
  { name: 'Upper Brass' },
  { name: 'Backstage Theatre' },
  { name: 'Whiskey A-Go-Go' },
  { name: 'Club Pro' }
];

for (let i = 0; i < clubs.length; i++) {
  const girls = 10 + random(10);
  const club = clubs[i];

  club.girls = [];
  for (let j = 0; j < girls; j++)
    club.girls.push(generateRandomGirl());
}

console.log({clubs});

function applyFilters() {
  let filtered = [];
  for (let i = 0; i < clubs.length; i++) {
    const club = {
      name: clubs[i].name,
      girls: clubs[i].girls,
      filtered: clubs[i].girls.filter(next => {
        return next.ethnicity === 'White';
      })
    };

    filtered.push(club);
  }

  return filtered;
}

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
  const classes = useStyles();

  const filtered = applyFilters();

  const items = filtered.map(club => {
    const girls = club.filtered.map(girl => (
      <span>
        {girl.name}
      </span>
    ));
    return (
      <div key={club.name}>
        <div>{club.name}</div>
        <div>{club.filtered.length} / {club.girls.length} Girls</div>
        <div>
          {girls}
        </div>
      </div>
    );
  });

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
          <Button color="inherit">Filter</Button>
        </Toolbar>
      </AppBar>
      {items}
    </div>
  );
}

export default App;
