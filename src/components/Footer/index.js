import { Box, Grid, Hidden, makeStyles, Typography } from '@material-ui/core'

import ToggleLang from 'components/ToggleLang'
import ToggleTheme from 'components/ToggleTheme'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Box
      component="footer"
      marginTop="auto"
      padding={3}
      className={classes.footer}
    >
      <Grid item xs={12}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item container justifyContent="flex-start" sm={3}>
            <Hidden smDown>
              <Grid item>
                <ToggleTheme />
              </Grid>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm>
            <Typography variant="body2" align="center">
              {`Copyright © Paulo Silva ${new Date().getFullYear()}.`}
            </Typography>
          </Grid>
          <Grid item container justifyContent="flex-end" sm={3}>
            <Hidden smDown>
              <ToggleLang />
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
