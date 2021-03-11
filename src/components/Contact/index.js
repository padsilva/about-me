import { useIntl } from 'react-intl'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  makeStyles,
  TextField
} from '@material-ui/core'
import SocialLinks from 'components/SocialLinks'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3)
    }
  }
}))

const Contact = () => {
  const classes = useStyles()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <Container component="main" maxWidth="sm">
      <Card
        component="form"
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <CardHeader
          title={f('contact')}
          titleTypographyProps={{
            variant: 'h4',
            align: 'center'
          }}
        />
        <Divider />
        <CardContent className={classes.content}>
          <Grid container spacing={2} item>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label={f('firstName')}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label={f('lastName')}
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
                label={f('subject')}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="message"
                name="message"
                label={f('message')}
                multiline
                rows={12}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" color="primary" type="submit">
                  {f('sendButton')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <SocialLinks />
      </Card>
    </Container>
  )
}

export default Contact
