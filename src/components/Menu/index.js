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
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import InternalLink from 'components/InternalLink'
import data from 'components/Menu/data'
import ToggleTheme from 'components/ToggleTheme'
import ToggleLang from 'components/ToggleLang'

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
