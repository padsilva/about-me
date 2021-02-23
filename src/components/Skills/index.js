import Image from 'next/image'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  makeStyles,
  Typography,
  withStyles
} from '@material-ui/core'

import data from './data'

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
  },
  box: {
    marginLeft: theme.spacing(0),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginLeft: theme.spacing(-1)
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
          <Grid container spacing={4}>
            {data.map((tech) => (
              <Grid
                key={tech.name}
                container
                item
                justify="space-evenly"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  sm={3}
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={3}>
                    <IconButton
                      href={tech.link}
                      aria-label={tech.name}
                      target="_blank"
                      rel="noopener no referrer"
                    >
                      <Image src={tech.imgSrc} alt={tech.name} layout="fill" />
                    </IconButton>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="body2">{tech.name}</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={10} sm={8}>
                  <Box className={classes.box}>
                    <BorderLinearProgress
                      variant="determinate"
                      value={tech.percentage}
                      size={100}
                    />
                  </Box>
                </Grid>
                <Grid item xs={2} sm={1}>
                  <Box ml={2}>
                    <Typography variant="body2">
                      {`${tech.percentage}%`}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Skills
