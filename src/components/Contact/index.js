import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
}))

const Contact = () => {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        className={classes.paper}
        component="form"
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <Box pb={3}>
          <Typography component="h1" variant="h4" align="center">
            Contact me
          </Typography>
        </Box>
        <Grid container spacing={3}>
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
        </Grid>

        <Box display="flex" justifyContent="flex-end" mt={3}>
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default Contact
