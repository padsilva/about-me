import { useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Container,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  TextField
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { Close } from '@material-ui/icons'

import SocialLinks from 'components/SocialLinks'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3)
    }
  }
}))

const Contact = () => {
  const classes = useStyles()
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({
    captcha: '',
    open: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
    subject: '',
    firstName: '',
    lastName: ''
  })
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prevStatus) => ({
      ...prevStatus,
      [e.target.id]: e.target.value
    }))
    setStatus((prevStatus) => ({
      ...prevStatus,
      open: false,
      submitting: false,
      info: { error: false, msg: null }
    }))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({
      ...prevStatus,
      open: false,
      submitting: true
    }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        captcha: '',
        open: true,
        submitting: false,
        info: { error: false, msg }
      })
      setInputs({
        email: '',
        message: '',
        subject: '',
        firstName: '',
        lastName: ''
      })
      recaptchaRef.current.reset()
    } else {
      setStatus((prevStatus) => ({
        ...prevStatus,
        open: true,
        submitting: false,
        info: { error: true, msg }
      }))
    }
  }

  return (
    <Container component="main" maxWidth="sm">
      <Card component="form" autoComplete="off" onSubmit={handleOnSubmit}>
        <CardHeader
          title={f('contact')}
          titleTypographyProps={{
            variant: 'h4',
            align: 'center'
          }}
        />
        <Divider />
        <CardContent className={classes.content}>
          <Grid container spacing={2} item>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label={f('firstName')}
                fullWidth
                value={inputs.firstName}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label={f('lastName')}
                fullWidth
                value={inputs.lastName}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="email"
                id="email"
                name="email"
                label="Email"
                fullWidth
                value={inputs.email}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="subject"
                name="subject"
                label={f('subject')}
                fullWidth
                value={inputs.subject}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="message"
                name="message"
                label={f('message')}
                multiline
                rows={12}
                fullWidth
                variant="outlined"
                value={inputs.message}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} container justify="flex-end">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE}
                onChange={(value) =>
                  setStatus((prevStatus) => ({
                    ...prevStatus,
                    captcha: value
                  }))
                }
              />
            </Grid>
            <Grid item xs={12} container justify="flex-end">
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={
                  !status.captcha || status.submitting || status.info.error
                }
              >
                {f('sendButton')}
              </Button>
            </Grid>
            {status.info.msg && (
              <Grid item xs={12}>
                <Collapse in={status.open}>
                  <Alert
                    severity={status.info.error ? 'error' : 'success'}
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() =>
                          setStatus((prevStatus) => ({
                            ...prevStatus,
                            open: false
                          }))
                        }
                      >
                        <Close fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    {f(status.info.msg)}
                  </Alert>
                </Collapse>
              </Grid>
            )}
          </Grid>
        </CardContent>
        <SocialLinks />
      </Card>
    </Container>
  )
}

export default Contact
