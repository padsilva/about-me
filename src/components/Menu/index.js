import { useState } from 'react'
import {
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import InternalLink from 'components/InternalLink'
import data from 'components/Menu/data'

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Hidden smDown>
        {data.map((menu) => (
          <InternalLink key={menu.name} href={menu.link} isActive>
            <Grid container item spacing={1}>
              <Grid item>{menu.icon}</Grid>
              <Grid item>
                <Typography variant="button">{menu.name}</Typography>
              </Grid>
            </Grid>
          </InternalLink>
        ))}
      </Hidden>

      <Hidden mdUp>
        <IconButton
          aria-label="menu"
          color="primary"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <div
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
          >
            <List>
              <InternalLink href="/experience" isActive>
                <ListItem button>
                  <ListItemText primary="Experience" />
                </ListItem>
              </InternalLink>

              <InternalLink href="/education" isActive>
                <ListItem button>
                  <ListItemText primary="Education" />
                </ListItem>
              </InternalLink>

              <InternalLink href="/skills" isActive>
                <ListItem button>
                  <ListItemText primary="Skills" />
                </ListItem>
              </InternalLink>

              <InternalLink href="/projects" isActive>
                <ListItem button>
                  <ListItemText primary="Projects" />
                </ListItem>
              </InternalLink>

              <InternalLink href="/contact" isActive>
                <ListItem button>
                  <ListItemText primary="Contact" />
                </ListItem>
              </InternalLink>
            </List>
          </div>
        </Drawer>
      </Hidden>
    </>
  )
}

export default Menu
