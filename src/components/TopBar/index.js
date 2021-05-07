import {
  AppBar,
  Box,
  Grid,
  Hidden,
  Toolbar,
  Typography
} from '@material-ui/core'
import { useIntl } from 'react-intl'

import Menu from 'components/Menu'

const TopBar = () => {
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="baseline"
          >
            <Grid item xs>
              <Box mr={1} display="inline">
                <Typography variant="h4" display="inline">
                  Paulo Silva
                </Typography>
              </Box>
              <Hidden mdDown>
                <Typography variant="caption">{f('position')}</Typography>
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
              justify="space-around"
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
