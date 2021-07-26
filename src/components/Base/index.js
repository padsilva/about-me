import PropTypes from 'prop-types'
import { Box, useMediaQuery, useTheme } from '@material-ui/core'

import Footer from 'components/Footer'
import TopBar from 'components/TopBar'

const Base = ({ children }) => {
  const theme = useTheme()
  const spacing = useMediaQuery((theme) => theme.breakpoints.up('sm'))
    ? theme.spacing(6)
    : theme.spacing(3)

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <TopBar />

      <Box
        sx={{
          mt: spacing,
          mb: spacing
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  )
}

Base.propTypes = {
  children: PropTypes.node.isRequired
}

export default Base
