import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core'

const TopBar = () => (
  <>
    <AppBar position="fixed">
      <Toolbar>
        <Box flexGrow={1} alignItems="center">
          <Typography variant="h5">Paulo Silva</Typography>
          <Typography variant="caption">Software Developer</Typography>
        </Box>
        <Button color="inherit">Experience</Button>
        <Button color="inherit">Education</Button>
        <Button color="inherit">Skills</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
    {/* necessary for content to be below app bar */}
    <Toolbar />
  </>
)
export default TopBar
