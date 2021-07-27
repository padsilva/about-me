import {
  Box,
  Fab,
  Zoom,
  useMediaQuery,
  useScrollTrigger,
  useTheme
} from '@material-ui/core'
import { KeyboardArrowUp } from '@material-ui/icons'

const ScrollTop = () => {
  const theme = useTheme()
  const spacing = useMediaQuery((theme) => theme.breakpoints.up('sm'))
    ? theme.spacing(10)
    : theme.spacing(6)
  const trigger = useScrollTrigger()

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: spacing,
          right: theme.spacing(2)
        }}
      >
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  )
}

export default ScrollTop
