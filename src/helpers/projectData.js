import whosPlaying from '../assets/screenshots/whosplaying.jpg';
import clubReads from '../assets/screenshots/clubreads.jpg';
import movieTracker from '../assets/screenshots/movietracker.jpg';
import weathrly from '../assets/screenshots/weathrly.jpg';
import comp2 from '../assets/screenshots/comp2.jpg';
import comp3 from '../assets/screenshots/comp3.jpg';


const projectData = [
  {
    name: 'WhosPlaying',
    screenshot: whosPlaying,
    altText:'WhosPlaying Web Application | Web-app to quickly find local concerts - built in React.',
    repoLink: 'https://github.com/dstock48/whosplaying',
    description: 'A web app built in <strong>React.js</strong> & <strong>Redux.js</strong> to find new artists and local concerts in your area, or search other locations.',
  },
  {
    name: 'Club Reads',
    screenshot: clubReads,
    altText:'Club Reads Web Application | Web-app for book clubs - built in React.',
    repoLink: 'https://github.com/lindsaywparker/club-reads-frontend',
    liveLink: 'https://club-reads.herokuapp.com/',
    description: 'A web app built in <strong>React.js</strong> for book club members to suggest & vote on books to read.',
  },
  {
    name: 'Movie Tracker',
    screenshot: movieTracker,
    altText:'Movie Tracker Web Application | Project to build a New Movie Releases grid interface - built in React & Redux.',
    repoLink: 'https://github.com/dstock48/movie-tracker',
    description: 'A project built in <strong>React.js</strong> & <strong>Redux.js</strong> providing a "New Movie Releases" grid interface using The Movie Database API, connected to a Node backend storing user accounts and favorites.',
  },
  {
    name: 'Weathrly',
    screenshot: weathrly,
    altText:'Weathrly Web Application | Web-app using Weather Underground API to provide weather forecasts and current conditions - built in React.',
    repoLink: 'https://github.com/dstock48/weathrly',
    description: 'A weather app built in <strong>React.js</strong> using the Weather Underground API. Provides an immediate 7 hr and 10 day forecast, with a 24 hr forcast for a selected day.',
  },
  {
    name: 'Admin Dashboard Comp',
    screenshot: comp3,
    altText:'HTML & CSS Challenge | A fully responsive admin dashboard interface using flexbox, positioning, and media queries.',
    liveLink: 'https://dstock48.github.io/dw-comp-challenge-3/',
    repoLink: 'https://github.com/dstock48/dw-comp-challenge-3',
    description: 'A challenge to bring a given dashboard design to life with HTML & CSS using flexbox, positioning, and media queries for full responsiveness.',
  },
  {
    name: 'Card Layout Comp',
    screenshot: comp2,
    altText:'HTML & CSS Challenge | A fully responsive card interface with hover effects.',
    liveLink: 'https://dstock48.github.io/dw-comp-challenge-2/',
    repoLink: 'https://github.com/dstock48/dw-comp-challenge-2',
    description: 'A challenge to design and build a card interface in HTML & CSS with hover effects and media queries for full responsiveness.',
  },
]

export default projectData;
