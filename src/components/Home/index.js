import { FormattedDate, useIntl } from 'react-intl'
import {
  Avatar,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme
} from '@mui/material'

import SocialLinks from 'components/SocialLinks'

const Home = () => {
  const theme = useTheme()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <Container component="main" maxWidth="md">
      <Card raised>
        <CardContent>
          <Grid container justifyContent="space-around">
            <Grid
              container
              spacing={2}
              item
              md={4}
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
                <Typography variant="body1" component="h6">
                  {f('position')}
                </Typography>
                <Typography variant="caption">
                  <FormattedDate
                    value="1988/09/04"
                    year="numeric"
                    month="long"
                    day="2-digit"
                  />
                </Typography>
                <Typography variant="caption">
                  {`${f('hometown')}, Portugal`}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              md={8}
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ padding: theme.spacing(3) }}
            >
              <Typography
                component="div"
                variant="body2"
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
