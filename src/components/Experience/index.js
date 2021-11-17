import PropTypes from 'prop-types'
import { FormattedDate, useIntl } from 'react-intl'
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

const Experience = ({ experiences }) => {
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
        {experiences.map(
          ({
            id,
            position,
            url,
            institution,
            startDate,
            endDate,
            description
          }) => (
            <TimelineItem key={id}>
              <TimelineOppositeContent color="textSecondary">
                <FormattedDate value={startDate} year="numeric" />
                {`-`}
                {endDate ? (
                  <FormattedDate value={endDate} year="numeric" />
                ) : (
                  f('present')
                )}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  color={
                    theme.palette.mode === 'dark' ? 'secondary' : 'primary'
                  }
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card raised sx={paper}>
                  <Typography variant="h6">
                    <Link href={url} target="_blank" rel="noopener">
                      {institution}
                    </Link>
                  </Typography>
                  <Typography variant="subtitle2" paragraph>
                    {position}
                  </Typography>
                  <Typography
                    component="div"
                    variant="body2"
                    align="justify"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </Card>
              </TimelineContent>
            </TimelineItem>
          )
        )}
      </Timeline>
    </Container>
  ) : (
    <Container component="main" maxWidth="sm">
      {experiences.map(
        ({
          id,
          position,
          url,
          institution,
          startDate,
          endDate,
          description
        }) => (
          <Card key={id} raised sx={paper}>
            <Typography
              component="div"
              align="right"
              gutterBottom
              color="textSecondary"
            >
              <TimelineOppositeContent color="textSecondary">
                <FormattedDate value={startDate} year="numeric" />
                {`-`}
                <FormattedDate value={endDate} year="numeric" />
              </TimelineOppositeContent>
              <Divider />
            </Typography>
            <Typography variant="h6">
              <Link href={url} target="_blank" rel="noopener">
                {institution}
              </Link>
            </Typography>
            <Typography variant="subtitle2" paragraph>
              {position}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              align="justify"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Card>
        )
      )}
    </Container>
  )
}

Experience.propTypes = {
  experiences: PropTypes.array.isRequired
}

export default Experience
