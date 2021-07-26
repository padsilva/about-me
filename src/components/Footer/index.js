import { Box, Grid, Hidden, Typography, useTheme } from '@material-ui/core'

import ToggleLang from 'components/ToggleLang'
import ToggleTheme from 'components/ToggleTheme'

const Footer = () => {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      marginTop="auto"
      padding={3}
      sx={{
        bgcolor:
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800]
      }}
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
