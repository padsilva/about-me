import PropTypes from 'prop-types'
import { Box, Container } from '@material-ui/core'

import Footer from 'components/Footer'
import TopBar from 'components/TopBar'

const Base = ({ children }) => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    <TopBar />

    <Container>
      <Box my={2}>{children}</Box>
    </Container>

    <Footer />
  </Box>
)

Base.propTypes = {
  children: PropTypes.node.isRequired
}

export default Base
