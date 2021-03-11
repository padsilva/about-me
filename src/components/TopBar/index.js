import PropTypes from 'prop-types'
import { AppBar, Box, Grid, Toolbar, Typography } from '@material-ui/core'

import Menu from 'components/Menu'
import InternalLink from 'components/InternalLink'

const TopBar = ({ onToggleDark }) => (
  <>
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Grid container direction="row" justify="center" alignItems="baseline">
          <Grid item xs>
            <InternalLink href="/">
              <Box mr={1} display="inline">
                <Typography variant="h4" display="inline">
                  Paulo Silva
                </Typography>
              </Box>
              <Typography variant="caption">Software Developer</Typography>
            </InternalLink>
          </Grid>
          <Grid
            container
            item
            xs={2}
            sm={1}
            md={8}
            lg={6}
            xl={4}
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Menu onToggleDark={onToggleDark} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    {/* necessary for content to be below app bar */}
    <Toolbar id="back-to-top-anchor" />
  </>
)

TopBar.propTypes = {
  onToggleDark: PropTypes.func.isRequired
}

export default TopBar
