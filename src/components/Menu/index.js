import { useState } from 'react'
import {
  Box,
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

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Hidden smDown>
        <Box>
          <Grid container spacing={6} justify="flex-end">
            <Grid item>
              <InternalLink href="/experience" isActive>
                <Typography variant="button">experience</Typography>
              </InternalLink>
            </Grid>

            <Grid item>
              <InternalLink href="/education" isActive>
                <Typography variant="button">education</Typography>
              </InternalLink>
            </Grid>

            <Grid item>
              <InternalLink href="/skills" isActive>
                <Typography variant="button">skills</Typography>
              </InternalLink>
            </Grid>

            <Grid item>
              <InternalLink href="/projects" isActive>
                <Typography variant="button">projects</Typography>
              </InternalLink>
            </Grid>

            <Grid item>
              <InternalLink href="/contact" isActive>
                <Typography variant="button">contact</Typography>
              </InternalLink>
            </Grid>
          </Grid>
        </Box>
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
