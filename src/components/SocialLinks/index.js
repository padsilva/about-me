import { CardActions, Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Email, GitHub, LinkedIn, Twitter } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  actions: {
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.primary.light
        : theme.palette.primary.dark
  }
}))

const SocialLinks = () => {
  const classes = useStyles()

  return (
    <CardActions className={classes.actions}>
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
