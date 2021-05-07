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
import Link from '@material-ui/core/Link'

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

const jobs = [
  {
    date: 'jobDate1',
    institution: {
      name: 'jobInstitution1',
      link: 'https://www.chinasystems.com/'
    },
    position: 'jobPosition1',
    description: 'jobDescription1'
  },
  {
    date: 'jobDate2',
    institution: {
      name: 'jobInstitution2',
      link: 'https://www.agap2-it.pt/'
    },
    position: 'jobPosition2',
    description: 'jobDescription2'
  },
  {
    date: 'jobDate3',
    institution: {
      name: 'jobInstitution3',
      link: 'https://www.ipn.pt/incubadora/empresa/140'
    },
    position: 'jobPosition3',
    description: 'jobDescription3'
  }
]

const Experience = () => {
  const classes = useStyles()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <Container component="main" maxWidth="lg">
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
              {jobs.map(
                ({ date, institution, position, description }, index) => (
                  <TimelineItem key={`job-${index}`}>
                    <TimelineOppositeContent>{f(date)}</TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h5">
                          <Link
                            href={institution.link}
                            target="_blank"
                            rel="noopener"
                          >
                            {f(institution.name)}
                          </Link>
                        </Typography>
                        <Typography variant="h6">{f(position)}</Typography>
                        <Typography
                          align="justify"
                          dangerouslySetInnerHTML={{ __html: f(description) }}
                        />
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                )
              )}
            </Timeline>
          </Hidden>
          <Hidden mdUp>
            {jobs.map(({ date, position, institution, description }, index) => (
              <Card elevation={0} key={`job-${index}`}>
                <CardContent>
                  <Typography variant="subtitle1" color="textSecondary">
                    {f(date)}
                  </Typography>
                  <Typography variant="h5">
                    <Link
                      href={institution.link}
                      target="_blank"
                      rel="noopener"
                    >
                      {f(institution.name)}
                    </Link>
                  </Typography>
                  <Typography variant="h6">{f(position)}</Typography>
                  <Typography
                    align="justify"
                    dangerouslySetInnerHTML={{ __html: f(description) }}
                  />
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
