import {
  Code,
  ContactSupport,
  Home,
  Notes,
  School,
  Work
} from '@mui/icons-material'

export default [
  {
    icon: <Home fontSize="small" />,
    link: '/',
    name: 'home'
  },
  {
    icon: <School fontSize="small" />,
    link: '/education',
    name: 'education'
  },
  {
    icon: <Work fontSize="small" />,
    link: '/experience',
    name: 'experience'
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
