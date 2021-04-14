import Image from 'next/image'
import { useIntl } from 'react-intl'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
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
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <Container component="main" maxWidth="sm">
      <Card>
        <CardHeader
          title={f('skills')}
          titleTypographyProps={{
            variant: 'h4',
            align: 'center'
          }}
        />
        <Divider />
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
                      rel="noopener"
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
                      aria-labelledby={`box-${tech.name}`}
                    />
                  </Box>
                </Grid>
                <Grid item xs={2} sm={1}>
                  <Box ml={2} id={`box-${tech.name}`}>
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
