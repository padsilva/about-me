import { CardActions, Grid, IconButton, useTheme } from '@mui/material'
import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material'

const SocialLinks = () => {
  const theme = useTheme()

  return (
    <CardActions
      sx={{
        bgcolor:
          theme.palette.mode === 'light'
            ? theme.palette.primary.light
            : theme.palette.primary.dark
      }}
    >
      <Grid container justifyContent="space-evenly">
        <Grid item>
          <IconButton
            size="small"
            color="inherit"
            href="mailto:pauloalexandreduartesilva@gmail.com"
            aria-label="Email"
          >
            <Email />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            size="small"
            color="inherit"
            href="https://github.com/padsilva"
            aria-label="Github"
            target="_blank"
            rel="noopener"
          >
            <GitHub />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            size="small"
            color="inherit"
            href="https://www.linkedin.com/in/padsilva88/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener"
          >
            <LinkedIn />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            size="small"
            color="inherit"
            href="https://twitter.com/padsilva88"
            aria-label="Twitter"
            target="_blank"
            rel="noopener"
          >
            <Twitter />
          </IconButton>
        </Grid>
      </Grid>
    </CardActions>
  )
}

export default SocialLinks
