import { FormattedDate, useIntl } from 'react-intl'
import {
  Avatar,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'

import SocialLinks from 'components/SocialLinks'

const useStyles = makeStyles((theme) => ({
  actions: {
    backgroundColor: theme.palette.primary.light
  },
  large: {
    width: theme.spacing(26),
    height: theme.spacing(26)
  }
}))

const Home = () => {
  const classes = useStyles()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <Container component="main" maxWidth="md">
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid
              container
              spacing={2}
              item
              sm={5}
              direction="column"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item>
                <Avatar
                  alt="Paulo Silva"
                  src="/img/profile.jpg"
                  className={classes.large}
                />
              </Grid>
              <Grid
                container
                direction="column"
                item
                justify="center"
                alignItems="center"
              >
                <Typography variant="h4" component="h5">
                  Paulo Silva
                </Typography>
                <Typography variant="subtitle2">Software Developer</Typography>
              </Grid>
              <Grid
                container
                direction="column"
                item
                justify="center"
                alignItems="center"
              >
                <Typography variant="body2">
                  <FormattedDate
                    value="1988/09/04"
                    year="numeric"
                    month="long"
                    day="2-digit"
                  />
                </Typography>
                <Typography variant="body2" paragraph>
                  {`${f('hometown')}, Portugal`}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              item
              sm={7}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography
                component="div"
                variant="body1"
                align="justify"
                dangerouslySetInnerHTML={{ __html: f('abstract') }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <SocialLinks />
      </Card>
    </Container>
  )
}

export default Home
