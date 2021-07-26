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
            {educations.map(
              ({ date, grade, institution, description }, index) => (
                <TimelineItem key={`education-${index}`}>
                  <TimelineOppositeContent>{f(date)}</TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card raised sx={paper}>
                      <Typography variant="h5">
                        <Link href={grade.link} target="_blank" rel="noopener">
                          {f(grade.name)}
                        </Link>
                      </Typography>
                      <Typography variant="h6">{f(institution)}</Typography>
                      <Typography
                        align="justify"
                        dangerouslySetInnerHTML={{ __html: f(description) }}
                      />
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              )
            )}
          </Timeline>
        </Container>
      </Hidden>
      <Hidden mdUp>
        <Container component="main" maxWidth="sm">
          {educations.map(
            ({ date, grade, institution, description }, index) => (
              <Card key={`education-${index}`} raised sx={paper}>
                <CardContent>
                  <Typography variant="subtitle1" color="textSecondary">
                    {f(date)}
                  </Typography>
                  <Typography variant="h5">
                    <Link href={grade.link} target="_blank" rel="noopener">
                      {f(grade.name)}
                    </Link>
                  </Typography>
                  <Typography variant="h6">{f(institution)}</Typography>
                  <Typography
                    align="justify"
                    dangerouslySetInnerHTML={{ __html: f(description) }}
                  />
                </CardContent>
              </Card>
            )
          )}
        </Container>
      </Hidden>
    </>
  )
}

export default Experience
