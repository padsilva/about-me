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

import DateFormatter from 'utils/date'

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
                <Typography variant="h4">Paulo Silva</Typography>
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
                  <DateFormatter dateString="1988/09/04" />
                </Typography>
                <Typography variant="body2" paragraph>
                  Lisbon, Portugal
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
              <Typography variant="body1" align="justify" paragraph>
                {`Com formação em Engenharia Informática, procuro novos desafios que possibilitem a construção da minha carreira nesta área à qual me tenho dedicado com entusiasmo ao longo destes anos.`}
              </Typography>
              <Typography variant="body1" align="justify" paragraph>
                {`Pretendo demonstrar todo o meu potencial e em simultâneo valorizar o meu trabalho com foco numa realização competente e eficaz.`}
              </Typography>
              <Typography variant="body1" align="justify">
                {`Para além da minha área de formação académica existem outras das quais tenho interesse, nomeadamente: cinema, desporto, música e natureza.`}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <SocialLinks />
      </Card>
    </Container>
  )
}

export default Home
