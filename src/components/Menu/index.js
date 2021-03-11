import PropTypes from 'prop-types'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import InternalLink from 'components/InternalLink'
import data from 'components/Menu/data'
import ToggleTheme from 'components/ToggleTheme'

const Menu = ({ onToggleDark }) => {
  const [open, setOpen] = useState(false)
  const { pathname } = useRouter()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <>
      <Hidden smDown>
        {data.map((menu) => (
          <InternalLink key={menu.name} href={menu.link} isActive>
            <Grid container item spacing={1}>
              <Grid item>{menu.icon}</Grid>
              <Grid item>
                <Typography variant="button">{f(menu.name)}</Typography>
              </Grid>
            </Grid>
          </InternalLink>
        ))}
      </Hidden>

      <Hidden mdUp>
        <IconButton
          aria-label="menu"
          color="inherit"
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
              {data.map((menu) => (
                <InternalLink key={menu.name} href={menu.link} isActive>
                  <ListItem button>
                    <Grid container spacing={1}>
                      <Grid item>{menu.icon}</Grid>
                      <Grid item>
                        <Typography variant="button">{f(menu.name)}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                </InternalLink>
              ))}
              <Box position="fixed" bottom={0}>
                <ListItem>
                  <ToggleTheme onToggleDark={onToggleDark} />
                </ListItem>
                <ListItem>
                  <Grid container spacing={1}>
                    <Grid item>
                      <InternalLink href={pathname} locale="en" shallow>
                        <Button size="small" color="primary">
                          EN
                        </Button>
                      </InternalLink>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item>
                      <InternalLink href={pathname} locale="pt" shallow>
                        <Button size="small" color="primary">
                          PT
                        </Button>
                      </InternalLink>
                    </Grid>
                  </Grid>
                </ListItem>
              </Box>
            </List>
          </div>
        </Drawer>
      </Hidden>
    </>
  )
}

Menu.propTypes = {
  onToggleDark: PropTypes.func.isRequired
}

export default Menu
