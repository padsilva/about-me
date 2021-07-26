import { useIntl } from 'react-intl'
import {
  Card,
  CardContent,
  Container,
  Hidden,
  Link,
  Typography,
  useMediaQuery,
  useTheme
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
  const theme = useTheme()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })
  const spacing = useMediaQuery((theme) => theme.breakpoints.up('sm'))
    ? theme.spacing(4)
    : theme.spacing(2)
  const paper = {
    p: `${theme.spacing(1)} ${theme.spacing(2)}`,
    mb: spacing
  }

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
                  <Card raised sx={paper}>
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
            <Card key={`job-${index}`} raised sx={paper}>
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
