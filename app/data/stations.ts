import { Station } from '../types/station';

export const stations: Station[] = [
  {
    id: '8st-nyu',
    name: '8 St - NYU',
    lines: ['R', 'W'],
    colors: ['#FCCC0A', '#FCCC0A', '#FCCC0A', '#FCCC0A'],
    position: { x: 25, y: 20 },
    description: 'Located in Greenwich Village, serving New York University',
    borough: 'Manhattan',
    link: 'https://xyspg.notion.site/8St-NYU-20fa61ed3a8c80b0bbbce593aeee95d4'
  },
  {
    id: 'sutphin-jfk',
    name: 'Sutphin Blvd - JFK Airport',
    lines: ['E', 'J', 'Z'],
    colors: ['#0039A6', '#996633', '#996633'],
    position: { x: 75, y: 60 },
    description: 'Major transportation hub connecting to JFK Airport',
    borough: 'Queens',
    link: 'https://xyspg.notion.site/jfk'
  },
  {
    id: 'wtc',
    name: 'World Trade Center',
    lines: ['1','2','3','4','5','A','C','E','J','Z','N','R','W'],
    colors: ['#0039A6'],
    position: { x: 30, y: 65 },
    description: 'Located at the site of the original World Trade Center',
    borough: 'Manhattan',
    link: 'https://xyspg.notion.site/WTC-20fa61ed3a8c80e88252c740e42725c9',
  },
  {
    id: 'coney-island',
    name: 'Coney Island - Stillwell Ave',
    lines: ['D', 'F', 'N', 'Q'],
    colors: ['#FF6319', '#FF6319', '#FCCC0A', '#FCCC0A'],
    position: { x: 75, y: 85 },
    description: 'Terminal station serving the famous Coney Island boardwalk',
    borough: 'Brooklyn',
    link: 'https://xyspg.notion.site/coney-island'
  },
  {
    id: 'levittown',
    name: 'Levittown',
    lines: ['LIRR'],
    colors: ['#0039A6'],
    position: { x: 90, y: 15 },
    borough: 'Long Island',
    link: 'https://xyspg.notion.site/Levittown-215a61ed3a8c80d29b34c820bb887a6c?source=copy_link'
  }
];