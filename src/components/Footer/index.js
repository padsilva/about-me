import PropTypes from 'prop-types'
import { Box, Typography, makeStyles, Grid } from '@material-ui/core'
import ToggleTheme from 'components/ToggleTheme'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}))

const Footer = ({ onToggleDark }) => {
  const classes = useStyles()

  return (
    <Box
      component="footer"
      marginTop="auto"
      padding={3}
      className={classes.footer}
    >
      <Grid item xs={12}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <ToggleTheme onToggleDark={onToggleDark} />
          </Grid>
          <Grid item>
            <Typography variant="body2" align="center">
              {`Copyright © Paulo Silva ${new Date().getFullYear()}.`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* <ToggleTheme onToggleDark={onToggleDark} />
      <Typography variant="body2" align="center">
        {`Copyright © Paulo Silva ${new Date().getFullYear()}.`}
      </Typography> */}
    </Box>
  )
}

Footer.propTypes = {
  onToggleDark: PropTypes.func.isRequired
}

export default Footer
