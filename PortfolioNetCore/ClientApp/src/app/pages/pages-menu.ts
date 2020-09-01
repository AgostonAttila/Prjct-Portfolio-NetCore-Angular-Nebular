import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Áttekintés',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },  
  {
    title: 'Portfolio',
    group: true,
  },
  {
    title: 'Térképek',
    icon: 'nb-location',
    children: [     
      {
        title: 'Buborék térkép',
        link: '/pages/maps/bubble',
      },    
    ],
  },
  {
    title: 'Diagrammok',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  }, 
  {
    title: 'Táblázatok',
    icon: 'nb-tables',
    children: [
      {
        title: 'Alap adatok',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Alapok',
        link: '/pages/tables/smart-table2',
      },
    ],
  },
];
