import { useState } from 'react'
import { useIntl } from 'react-intl'
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery
} from '@mui/material'
import {
  Code,
  ContactSupport,
  Home,
  Menu as MenuIcon,
  Notes,
  School,
  Work
} from '@mui/icons-material'

import InternalLink from 'components/InternalLink'
import ToggleTheme from 'components/ToggleTheme'
import ToggleLang from 'components/ToggleLang'

const data = [
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

const Menu = () => {
  const [open, setOpen] = useState(false)
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'))

  return mdUp ? (
    data.map((menu) => (
      <InternalLink key={menu.name} href={menu.link} isActive>
        <Grid container item spacing={1}>
          <Grid item>{menu.icon}</Grid>
          <Grid item>
            <Typography variant="button">{f(menu.name)}</Typography>
          </Grid>
        </Grid>
      </InternalLink>
    ))
  ) : (
    <>
      <IconButton
        aria-label="menu"
        color="inherit"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ width: 190 }}
      >
        <List>
          {data.map((menu) => (
            <InternalLink key={menu.name} href={menu.link} isActive>
              <ListItem button onClick={() => setOpen(false)}>
                <Grid container spacing={1}>
                  <Grid item>{menu.icon}</Grid>
                  <Grid item>
                    <Typography variant="button">{f(menu.name)}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
            </InternalLink>
          ))}
          <Box position="fixed" bottom={10}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ToggleTheme />
              </Grid>

              <Grid
                container
                item
                alignItems="center"
                justifyContent="center"
                xs={12}
              >
                <ToggleLang />
              </Grid>
            </Grid>
          </Box>
        </List>
      </Drawer>
    </>
  )
}

export default Menu
