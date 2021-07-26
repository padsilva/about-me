import React from 'react'
import { useIntl } from 'react-intl'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardContent,
  Container,
  Hidden,
  Link,
  Typography
} from '@material-ui/core'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
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
    <>
      <Hidden smDown>
        <Container component="main" maxWidth="lg">
          <Timeline position="alternate">
            {jobs.map(({ date, institution, position, description }, index) => (
              <TimelineItem key={`job-${index}`}>
                <TimelineOppositeContent>{f(date)}</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Card raised className={classes.paper}>
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
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Hidden>
      <Hidden mdUp>
        <Container component="main" maxWidth="sm">
          {jobs.map(({ date, position, institution, description }, index) => (
            <Card key={`job-${index}`} raised className={classes.paper}>
              <CardContent>
                <Typography variant="subtitle1" color="textSecondary">
                  {f(date)}
                </Typography>
                <Typography variant="h5">
                  <Link href={institution.link} target="_blank" rel="noopener">
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
        </Container>
      </Hidden>
    </>
  )
}

export default Experience
