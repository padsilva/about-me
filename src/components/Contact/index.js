import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  makeStyles,
  TextField
} from '@material-ui/core'
import { Email, GitHub, LinkedIn, Twitter } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6)
    }
  },
  content: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3)
    }
  },
  actions: {
    backgroundColor: theme.palette.primary.light
  }
}))

const Contact = () => {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="sm">
      <Card
        component="form"
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
        className={classes.paper}
      >
        <CardHeader
          title="Contact me"
          titleTypographyProps={{
            variant: 'h4',
            align: 'center'
          }}
        />
        <CardContent className={classes.content}>
          <Grid container spacing={2} item>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="email"
                id="email"
                name="email"
                label="Email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="subject"
                name="subject"
                label="Subject"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="message"
                name="message"
                label="Message"
                multiline
                rows={12}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" color="primary" type="submit">
                  Send
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.actions}>
          <Grid container justify="space-evenly">
            <Grid item>
              <IconButton
                color="inherit"
                href="mailto:pauloalexandreduartesilva@gmail.com"
                aria-label="Email"
              >
                <Email />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
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
      </Card>
    </Container>
  )
}

export default Contact
