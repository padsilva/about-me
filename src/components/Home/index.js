import { FormattedDate, useIntl } from 'react-intl'
import {
  Avatar,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme
} from '@material-ui/core'

import SocialLinks from 'components/SocialLinks'

const Home = () => {
  const theme = useTheme()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <Container component="main" maxWidth="md">
      <Card raised>
        <CardContent>
          <Grid container spacing={4} justifyContent="space-around">
            <Grid
              container
              spacing={2}
              item
              sm={4}
              direction="column"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item>
                <Avatar
                  alt="Paulo Silva"
                  src="/img/profile.jpg"
                  sx={{ width: theme.spacing(26), height: theme.spacing(26) }}
                />
              </Grid>
              <Grid
                container
                direction="column"
                item
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h4" component="h5">
                  Paulo Silva
                </Typography>
                <Typography variant="subtitle2">{f('position')}</Typography>
              </Grid>
              <Grid
                container
                direction="column"
                item
                justifyContent="center"
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
              item
              sm={7}
              direction="column"
              justifyContent="center"
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
