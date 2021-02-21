import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
  withStyles
} from '@material-ui/core'
import Image from 'next/image'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.light
  }
}))(LinearProgress)

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
  }
}))

const Skills = () => {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="sm">
      <Card className={classes.paper}>
        <CardHeader
          title="Skills"
          titleTypographyProps={{
            variant: 'h4',
            align: 'center'
          }}
        />
        <CardContent className={classes.content}>
          <Grid container spacing={3}>
            <Grid container item justify="center" alignItems="center">
              <Grid item xs={12} sm={2}>
                <Typography variant="body2">JavaScript</Typography>
              </Grid>
              <Grid item xs={9}>
                <BorderLinearProgress
                  variant="determinate"
                  value={80}
                  size={100}
                />
              </Grid>
              <Grid item xs={1}>
                <Box ml={2}>
                  <Typography variant="body2">80%</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container item justify="center" alignItems="center">
              <Grid item xs={12} sm={2}>
                <Typography variant="body2">ReactJS</Typography>
              </Grid>
              <Grid item xs={9}>
                <BorderLinearProgress
                  variant="determinate"
                  value={70}
                  size={100}
                />
              </Grid>
              <Grid item xs={1}>
                <Box ml={2}>
                  <Typography variant="body2">70%</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container item justify="center" alignItems="center">
              <Grid item xs={12} sm={2}>
                <Typography variant="body2">Next.js</Typography>
              </Grid>
              <Grid item xs={9}>
                <BorderLinearProgress
                  variant="determinate"
                  value={70}
                  size={100}
                />
              </Grid>
              <Grid item xs={1}>
                <Box ml={2}>
                  <Typography variant="body2">70%</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container item justify="center" alignItems="center">
              <Grid item xs={12} sm={2}>
                <Typography variant="body2">GraphQL</Typography>
              </Grid>
              <Grid item xs={9}>
                <BorderLinearProgress
                  variant="determinate"
                  value={65}
                  size={100}
                />
              </Grid>
              <Grid item xs={1}>
                <Box ml={2}>
                  <Typography variant="body2">70%</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container item justify="center" alignItems="center">
              <Grid item xs={12} sm={2}>
                <Typography variant="body2">Strapi</Typography>
              </Grid>
              <Grid item xs={9}>
                <BorderLinearProgress
                  variant="determinate"
                  value={60}
                  size={100}
                />
              </Grid>
              <Grid item xs={1}>
                <Box ml={2}>
                  <Typography variant="body2">60%</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container item justify="center" alignItems="center">
              <Grid item xs={12} sm={2}>
                <Typography variant="body2">Jest</Typography>
              </Grid>
              <Grid item xs={9}>
                <BorderLinearProgress
                  variant="determinate"
                  value={50}
                  size={100}
                />
              </Grid>
              <Grid item xs={1}>
                <Box ml={2}>
                  <Typography variant="body2">50%</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container item justify="center" alignItems="center">
              <Grid item xs={12} sm={2}>
                <Typography variant="body2">Storybook</Typography>
              </Grid>
              <Grid item xs={9}>
                <BorderLinearProgress
                  variant="determinate"
                  value={50}
                  size={100}
                />
              </Grid>
              <Grid item xs={1}>
                <Box ml={2}>
                  <Typography variant="body2">50%</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container item justify="center" alignItems="center">
              <Grid item xs={12} sm={2}>
                <Typography variant="body2">Apollo</Typography>
              </Grid>
              <Grid item xs={9}>
                <BorderLinearProgress
                  variant="determinate"
                  value={40}
                  size={100}
                />
              </Grid>
              <Grid item xs={1}>
                <Box ml={2}>
                  <Typography variant="body2">50%</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Skills
