import PropTypes from 'prop-types'
import { Tooltip, Typography } from '@material-ui/core'

const LevelTooltip = ({ text, label }) => (
  <Tooltip
    disableFocusListener
    disableTouchListener
    placement="right-start"
    title={
      <Typography
        variant="subtitle2"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    }
  >
    <a style={{ borderBottom: '1px dotted white' }}>{label}</a>
  </Tooltip>
)

LevelTooltip.propTypes = {
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default LevelTooltip
