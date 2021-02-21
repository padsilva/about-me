import { CardActions, Grid, IconButton, makeStyles } from '@material-ui/core'
import { Email, GitHub, LinkedIn, Twitter } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  actions: {
    backgroundColor: theme.palette.primary.light
  }
}))

const SocialLinks = () => {
  const classes = useStyles()

  return (
    <CardActions className={classes.actions}>
      <Grid container justify="space-evenly">
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
            rel="noopener no referrer"
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
            rel="noopener no referrer"
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
            rel="noopener no referrer"
          >
            <Twitter />
          </IconButton>
        </Grid>
      </Grid>
    </CardActions>
  )
}

export default SocialLinks
