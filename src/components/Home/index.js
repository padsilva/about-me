import PropTypes from 'prop-types'
import { FormattedDate } from 'react-intl'
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

const Home = ({
  abstract: {
    avatar,
    name,
    position,
    birthdate,
    hometown,
    country,
    description
  }
}) => {
  const theme = useTheme()

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
                  alt={name}
                  src={avatar.url}
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
                  {name}
                </Typography>
                <Typography variant="body1" component="h6">
                  {position}
                </Typography>
                <Typography variant="caption">
                  <FormattedDate
                    value={birthdate}
                    year="numeric"
                    month="long"
                    day="2-digit"
                  />
                </Typography>
                <Typography variant="caption">
                  {`${hometown}, ${country}`}
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
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <SocialLinks />
      </Card>
    </Container>
  )
}

Home.propTypes = {
  abstract: PropTypes.object.isRequired
}

export default Home
