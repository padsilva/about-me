import PropTypes from 'prop-types'
import { Box, Tooltip, Typography, useTheme } from '@material-ui/core'

const LevelTooltip = ({ text, label }) => {
  const theme = useTheme()
  const color = theme.palette.mode === 'dark' ? 'black' : 'white'

  return (
    <Tooltip
      disableFocusListener
      enterTouchDelay={0}
      placement="right-start"
      title={
        <Typography
          variant="subtitle2"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      }
    >
      <Box component="a" sx={{ borderBottom: `1px dotted ${color}` }}>
        {label}
      </Box>
    </Tooltip>
  )
}

LevelTooltip.propTypes = {
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default LevelTooltip
