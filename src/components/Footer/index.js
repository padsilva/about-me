import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import {
  Box,
  Typography,
  makeStyles,
  Grid,
  Divider,
  Button,
  Hidden
} from '@material-ui/core'

import ToggleTheme from 'components/ToggleTheme'
import InternalLink from 'components/InternalLink'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}))

const Footer = ({ onToggleDark }) => {
  const { pathname } = useRouter()
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
          <Grid item container justify="flex-start" sm={3}>
            <Hidden smDown>
              <Grid item>
                <ToggleTheme onToggleDark={onToggleDark} />
              </Grid>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm>
            <Typography variant="body2" align="center">
              {`Copyright © Paulo Silva ${new Date().getFullYear()}.`}
            </Typography>
          </Grid>
          <Grid item container justify="flex-end" sm={3}>
            <Hidden smDown>
              <Grid item>
                <InternalLink href={pathname} locale="en" shallow>
                  <Button size="small" color="primary">
                    EN
                  </Button>
                </InternalLink>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item>
                <InternalLink href={pathname} locale="pt" shallow>
                  <Button size="small" color="primary">
                    PT
                  </Button>
                </InternalLink>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

Footer.propTypes = {
  onToggleDark: PropTypes.func.isRequired
}

export default Footer
