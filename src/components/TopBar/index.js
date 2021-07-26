import { useRouter } from 'next/router'
import {
  AppBar,
  Box,
  Grid,
  Hidden,
  Toolbar,
  Typography,
  useTheme
} from '@material-ui/core'
import { useIntl } from 'react-intl'

import Menu from 'components/Menu'

const TopBar = () => {
  const theme = useTheme()
  const darkMode = theme.palette.mode === 'dark'
  const { pathname } = useRouter()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  const breadCrumb = () => ' / ' + f(pathname.replace('/', '') || 'home')

  return (
    <>
      <AppBar
        position="fixed"
        color={darkMode ? 'grey' : 'default'}
        enableColorOnDark
      >
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
                  sx={{
                    color: darkMode
                      ? theme.palette.primary.main
                      : theme.palette.primary.dark
                  }}
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
