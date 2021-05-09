import {
  Code,
  ContactSupport,
  Home,
  Notes,
  School,
  Work
} from '@material-ui/icons'

export default [
  {
    icon: <Home fontSize="small" />,
    link: '/',
    name: 'home'
  },
  {
    icon: <Work fontSize="small" />,
    link: '/experience',
    name: 'experience'
  },
  {
    icon: <School fontSize="small" />,
    link: '/education',
    name: 'education'
  },
  {
    icon: <Notes fontSize="small" />,
    link: '/skills',
    name: 'skills'
  },
  {
    icon: <Code fontSize="small" />,
    link: '/projects',
    name: 'projects'
  },
  {
    icon: <ContactSupport fontSize="small" />,
    link: '/contacts',
    name: 'contacts'
  }
]
