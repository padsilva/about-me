import React from 'react'
import { useIntl } from 'react-intl'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Hidden,
  Paper,
  Typography
} from '@material-ui/core'
import { TimelineOppositeContent } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3)
    }
  },
  paper: {
    padding: '6px 16px',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(4)
    }
  }
}))

const educations = [
  {
    date: 'educationDate1',
    position: 'educationPosition1',
    description: 'educationDescription1'
  },
  {
    date: 'educationDate2',
    position: 'educationPosition2',
    description: 'educationDescription2'
  }
]

const Experience = () => {
  const classes = useStyles()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <Container component="main" maxWidth="md">
      <Card>
        <CardHeader
          title={f('education')}
          titleTypographyProps={{
            variant: 'h4',
            align: 'center'
          }}
        />
        <Divider />
        <CardContent className={classes.content}>
          <Hidden smDown>
            <Timeline align="alternate">
              {educations.map(({ date, position, description }, index) => (
                <TimelineItem key={`education-${index}`}>
                  <TimelineOppositeContent>{f(date)}</TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant="h6">
                        {f(position).toUpperCase()}
                      </Typography>
                      <Typography align="justify">{f(description)}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Hidden>
          <Hidden mdUp>
            {educations.map(({ date, position, description }, index) => (
              <Card elevation={0} key={`job-${index}`}>
                <CardContent>
                  <Typography variant="subtitle1" color="textSecondary">
                    {f(date)}
                  </Typography>
                  <Typography variant="h6">
                    {f(position).toUpperCase()}
                  </Typography>
                  <Typography align="justify">{f(description)}</Typography>
                </CardContent>
              </Card>
            ))}
          </Hidden>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Experience
