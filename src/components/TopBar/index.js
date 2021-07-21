import { useRouter } from 'next/router'
import {
  AppBar,
  Box,
  Grid,
  Hidden,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core'
import { useIntl } from 'react-intl'

import Menu from 'components/Menu'

const useStyles = makeStyles((theme) => ({
  active: {
    color:
      theme.palette.type === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.main
  }
}))

const TopBar = () => {
  const classes = useStyles()
  const { pathname } = useRouter()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  const breadCrumb = () => ' / ' + f(pathname.replace('/', '') || 'home')

  return (
    <>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="baseline"
          >
            <Grid item xs>
              <Typography variant="h4" display="inline">
                Paulo Silva
              </Typography>
              <Hidden mdUp>
                <Typography
                  component="h5"
                  variant="subtitle2"
                  display="inline"
                  className={classes.active}
                >
                  {breadCrumb()}
                </Typography>
              </Hidden>
              <Hidden mdDown>
                <Box ml={1} display="inline">
                  <Typography variant="caption">{f('position')}</Typography>
                </Box>
              </Hidden>
            </Grid>
            <Grid
              container
              item
              xs={2}
              sm={1}
              md={9}
              lg={7}
              xl={5}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Menu />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* necessary for content to be below app bar */}
      <Toolbar id="back-to-top-anchor" />
    </>
  )
}

export default TopBar
