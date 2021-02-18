import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'

import Menu from 'components/Menu'
import InternalLink from 'components/InternalLink'

const TopBar = () => (
  <>
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Box flexGrow={1}>
          <InternalLink href="/">
            <Box mr={1} display="inline">
              <Typography variant="h4" display="inline">
                Paulo Silva
              </Typography>
            </Box>
            <Typography variant="caption">Software Developer</Typography>
          </InternalLink>
        </Box>

        <Menu />
      </Toolbar>
    </AppBar>
    {/* necessary for content to be below app bar */}
    <Toolbar />
  </>
)

export default TopBar
