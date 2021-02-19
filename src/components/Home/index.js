import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography
} from '@material-ui/core'
import { Email, GitHub, LinkedIn, Twitter } from '@material-ui/icons'

import DateFormatter from 'utils/date'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6)
    }
  },
  actions: {
    backgroundColor: theme.palette.primary.light
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30)
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="md">
      <Card className={classes.paper}>
        <CardContent>
          <Grid container spacing={4}>
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
                <Typography variant="body2">Lisbon, Portugal</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              item
              sm={7}
              direction="column"
              justify="space-evenly"
              alignItems="center"
            >
              <Typography variant="body1" align="justify" paragraph>
                {`Com formação em Engenharia Informática, procuro novos desafios que possibilitem a construção da minha carreira nesta área à qual me tenho dedicado com entusiasmo ao longo destes anos.`}
              </Typography>
              <Typography variant="body1" align="justify" paragraph>
                {`Pretendo demonstrar todo o meu potencial e em simultâneo valorizar o meu trabalho com foco numa realização competente e eficaz.`}
              </Typography>
              <Typography variant="body1" align="justify" paragraph>
                {`Para além da minha área de formação académica existem outras das quais tenho interesse, nomeadamente: cinema, desporto, música e natureza.`}
              </Typography>
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

export default Home
