import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import Footer from 'components/Footer'
import TopBar from 'components/TopBar'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6)
    }
  }
}))

const Base = ({ children }) => {
  const classes = useStyles()

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <TopBar />

      <Box className={classes.container}>{children}</Box>

      <Footer />
    </Box>
  )
}

Base.propTypes = {
  children: PropTypes.node.isRequired
}

export default Base
