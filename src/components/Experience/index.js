import { useIntl } from 'react-intl'
import {
  Card,
  Container,
  Divider,
  Link,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab'

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
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const paper = {
    p: theme.spacing(3),
    mb: theme.spacing(3)
  }

  return mdUp ? (
    <Container component="main" maxWidth="lg">
      <Timeline position="alternate">
        {jobs.map(({ date, institution, position, description }, index) => (
          <TimelineItem key={`job-${index}`}>
            <TimelineOppositeContent color="textSecondary">
              {f(date)}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                color={theme.palette.mode === 'dark' ? 'secondary' : 'primary'}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card raised sx={paper}>
                <Typography variant="h6">
                  <Link href={institution.link} target="_blank" rel="noopener">
                    {f(institution.name)}
                  </Link>
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  {f(position)}
                </Typography>
                <Typography
                  component="div"
                  variant="body2"
                  align="justify"
                  dangerouslySetInnerHTML={{ __html: f(description) }}
                />
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  ) : (
    <Container component="main" maxWidth="sm">
      {jobs.map(({ date, position, institution, description }, index) => (
        <Card key={`job-${index}`} raised sx={paper}>
          <Typography
            component="div"
            align="right"
            gutterBottom
            color="textSecondary"
          >
            {f(date)}
            <Divider />
          </Typography>
          <Typography variant="h6">
            <Link href={institution.link} target="_blank" rel="noopener">
              {f(institution.name)}
            </Link>
          </Typography>
          <Typography variant="subtitle2" paragraph>
            {f(position)}
          </Typography>
          <Typography
            component="div"
            variant="body2"
            align="justify"
            dangerouslySetInnerHTML={{ __html: f(description) }}
          />
        </Card>
      ))}
    </Container>
  )
}

export default Experience
