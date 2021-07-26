import {
  Fab,
  useScrollTrigger,
  Zoom,
  useMediaQuery,
  useTheme,
  Box
} from '@material-ui/core'
import { KeyboardArrowUp } from '@material-ui/icons'

const ScrollTop = () => {
  const theme = useTheme()
  const spacing = useMediaQuery((theme) => theme.breakpoints.up('sm')) ? 10 : 6
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
          bottom: theme.spacing(spacing),
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
