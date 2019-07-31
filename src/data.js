
const enthicity = [
  'native', //'American Indian',
  'asian', //'Asian',
  'black', //'Black',
  'hispanic', //'Hispanic',
  'pacific', //'Pacific Islander',
  'white'  //'White'
];

// native: true,
// asian: true,
// black: true,
// hispanic: true,
// pacific: true,
// white: true

const name = ['Crystal', 'Tiffany', 'Amber', 'Brandy', 'Lola',
  'Angel', 'Ginger', 'Candy', 'Charity', 'Anistasia', 'Cherry',
  'Kitty', 'Jade', 'Destiny', 'Devon', 'Chastity', 'Raven',
  'Scarlett', 'Bambi', 'Star', 'Paris', 'Dallas', 'Diamond',
  'Skye', 'Trinity', 'Tawny', 'Layla', 'Lexie', 'Roxy', 'Prosche',
  'Nevaeh', 'Ashlynn', 'Aspen', 'Chyna', 'Lexus', 'Unique',
  'Chardonnay', 'Houston', 'London', 'Coco', 'Luscious', 'Capri',
  'Trixie', 'Cinnamon', 'Fifi'
];

const icon = ['face', 'two'];

function random(max) {
  return Math.floor(Math.random() * max);
}

function randomItem(items) {
  return items[random(items.length)];
}

function generateRandomMember() {
  return {
    name: randomItem(name),
    ethnicity: randomItem(enthicity),
    icon: randomItem(icon)
  }
}


const _clubs = [
  {name: 'Atlanta Hawks'},
  {name: 'Boston Celtics'},
  {name: 'Broklyn Nets'},
  {name: 'Charlotte Hornets'},
  {name: 'Chicago Bulls'},
  {name: 'Cleveland Cavaliers'},
  {name: 'Dallas Mavericks'},
  {name: 'Denver Nuggets'},
  {name: 'Detroit Pistons'},
  {name: 'Goden State Warriors'},
  {name: 'Houston Rockets'},
  {name: 'Indiana Pacers'},
  {name: 'LA Clippers'},
  {name: 'Los Angeles Lakers'},
  {name: 'Memphis Grizzlies'},
  {name: 'Miama Heat'},
  {name: 'Milwaukee Bucks'},
  {name: 'Minnesota Timberwolves'},
  {name: 'New Orleans Pelicans'},
  {name: 'New York Knicks'},
  {name: 'Oklahoma City Thunder'},
  {name: 'Orlando Magic'},
  {name: 'Philadelphia 76ers'},
  {name: 'Phoenix Suns'},
  {name: 'Portland Trail Blazers'},
  {name: 'Sacramento Kings'},
  {name: 'San Antonio Spurs'},
  {name: 'Toronto Raptors'},
  {name: 'Utah Jazz'},
  {name: 'Washington Wizards\'s'}
];

for (let i = 0; i < _clubs.length; i++) {
  const members = 10 + random(10);
  const club = _clubs[i];

  club.members = [];
  for (let j = 0; j < members; j++)
    club.members.push(generateRandomMember());
}

export const clubs = _clubs;
