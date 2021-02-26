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

const Experience = () => {
  const classes = useStyles()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <Container component="main" maxWidth="md">
      <Card>
        <CardHeader
          title={f('experience')}
          titleTypographyProps={{
            variant: 'h4',
            align: 'center'
          }}
        />
        <Divider />
        <CardContent className={classes.content}>
          <Hidden smDown>
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>2017-Present</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      JOB POSITION
                    </Typography>
                    <Typography align="justify">
                      This is a great place for you to tell a story and let your
                      users know a little more about you.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>2016-2017</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      JOB POSITION
                    </Typography>
                    <Typography align="justify">
                      This is a great place for you to tell a story and let your
                      users know a little more about you.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>2014-2015</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      JOB POSITION
                    </Typography>
                    <Typography align="justify">
                      This is a great place for you to tell a story and let your
                      users know a little more about you.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Hidden>
          <Hidden mdUp>
            <Card elevation={0}>
              <CardContent>
                <Typography variant="subtitle1" color="textSecondary">
                  2017-Present
                </Typography>
                <Typography variant="h6" component="h1">
                  JOB POSITION
                </Typography>
                <Typography align="justify">
                  This is a great place for you to tell a story and let your
                  users know a little more about you.
                </Typography>
              </CardContent>
            </Card>

            <Card elevation={0}>
              <CardContent>
                <Typography variant="subtitle1" color="textSecondary">
                  2016-2017
                </Typography>
                <Typography variant="h6" component="h1">
                  JOB POSITION
                </Typography>
                <Typography align="justify">
                  This is a great place for you to tell a story and let your
                  users know a little more about you.
                </Typography>
              </CardContent>
            </Card>

            <Card elevation={0}>
              <CardContent>
                <Typography variant="subtitle1" color="textSecondary">
                  2014-2015
                </Typography>
                <Typography variant="h6" component="h1">
                  JOB POSITION
                </Typography>
                <Typography align="justify">
                  This is a great place for you to tell a story and let your
                  users know a little more about you.
                </Typography>
              </CardContent>
            </Card>
          </Hidden>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Experience
