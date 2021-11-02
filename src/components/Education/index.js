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

const educations = [
  {
    date: 'educationDate1',
    grade: {
      name: 'educationGrade1',
      link: 'https://dei.uc.pt/mei/'
    },
    institution: 'educationInstitution1',
    description: 'educationDescription1'
  },
  {
    date: 'educationDate2',
    grade: {
      name: 'educationGrade2',
      link: 'https://dei.uc.pt/lei/'
    },
    institution: 'educationInstitution2',
    description: 'educationDescription2'
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
        {educations.map(({ date, grade, institution, description }, index) => (
          <TimelineItem key={`education-${index}`}>
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
                  <Link href={grade.link} target="_blank" rel="noopener">
                    {f(grade.name)}
                  </Link>
                </Typography>
                <Typography variant="subtitle2" paragraph>
                  {f(institution)}
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
      {educations.map(({ date, grade, institution, description }, index) => (
        <Card key={`education-${index}`} raised sx={paper}>
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
            <Link href={grade.link} target="_blank" rel="noopener">
              {f(grade.name)}
            </Link>
          </Typography>
          <Typography variant="subtitle2" paragraph>
            {f(institution)}
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
