import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  Alert,
  Button,
  Card,
  CardContent,
  Collapse,
  Container,
  FormHelperText,
  Grid,
  IconButton,
  TextField,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import { Close } from '@material-ui/icons'

import SocialLinks from 'components/SocialLinks'
import { sendEmailValidate } from 'utils/formValidations'
import { useDarkMode } from 'hooks/darkMode'

const Contacts = () => {
  const theme = useTheme()
  const { locale } = useRouter()
  const recaptchaRef = useRef(null)
  const { darkMode } = useDarkMode()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })
  const spacing = useMediaQuery((theme) => theme.breakpoints.up('sm'))
    ? theme.spacing(3)
    : theme.spacing(2)

  const [key, setKey] = useState(0)
  const [status, setStatus] = useState({
    open: false,
    submitting: false,
    info: { error: false, msg: null },
    fieldError: {}
  })
  const [inputs, setInputs] = useState({
    captcha: '',
    email: '',
    message: '',
    subject: '',
    firstName: '',
    lastName: ''
  })

  useEffect(() => {
    setKey(`${darkMode ? 'dark' : 'light'}_${locale}`)
  }, [key, darkMode, locale])

  const handleOnChange = (e) => {
    setInputs((prevStatus) => ({
      ...prevStatus,
      [e.target.id]: e.target.value
    }))
    setStatus((prevStatus) => ({
      ...prevStatus,
      open: false,
      submitting: false,
      info: { error: false, msg: null },
      fieldError: {}
    }))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    const errors = sendEmailValidate(inputs)

    if (Object.keys(errors).length) {
      setStatus((prevStatus) => ({
        ...prevStatus,
        fieldError: errors
      }))
      return
    }

    setStatus((prevStatus) => ({
      ...prevStatus,
      open: false,
      submitting: true,
      fieldError: {}
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
        open: true,
        submitting: false,
        info: { error: false, msg },
        fieldError: {}
      })
      setInputs({
        captcha: '',
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
        info: { error: true, msg },
        fieldError: {}
      }))
    }
  }

  return (
    <Container component="main" maxWidth="sm">
      <Card
        component="form"
        autoComplete="off"
        onSubmit={handleOnSubmit}
        raised
      >
        <CardContent
          sx={{
            p: spacing
          }}
        >
          <Grid container spacing={2} item>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                name="firstName"
                label={`${f('firstName')} *`}
                fullWidth
                variant="standard"
                value={inputs.firstName}
                onChange={handleOnChange}
                error={!!status.fieldError.firstName}
                helperText={
                  status.fieldError.firstName && f(status.fieldError.firstName)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                name="lastName"
                label={`${f('lastName')} *`}
                fullWidth
                variant="standard"
                value={inputs.lastName}
                onChange={handleOnChange}
                error={!!status.fieldError.lastName}
                helperText={
                  status.fieldError.lastName && f(status.fieldError.lastName)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email *"
                fullWidth
                variant="standard"
                value={inputs.email}
                onChange={handleOnChange}
                error={!!status.fieldError.email}
                helperText={
                  status.fieldError.email && f(status.fieldError.email)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="subject"
                name="subject"
                label={`${f('subject')} *`}
                fullWidth
                variant="standard"
                value={inputs.subject}
                onChange={handleOnChange}
                error={!!status.fieldError.subject}
                helperText={
                  status.fieldError.subject && f(status.fieldError.subject)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="message"
                name="message"
                label={`${f('message')} *`}
                multiline
                rows={12}
                fullWidth
                value={inputs.message}
                onChange={handleOnChange}
                error={!!status.fieldError.message}
                helperText={
                  status.fieldError.message && f(status.fieldError.message)
                }
              />
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs={12}>
                <ReCAPTCHA
                  key={key}
                  id="captcha"
                  name="captcha"
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE}
                  onChange={(value) =>
                    setInputs((prevStatus) => ({
                      ...prevStatus,
                      captcha: value
                    }))
                  }
                  hl={locale}
                  theme={darkMode ? 'dark' : 'light'}
                  value={inputs.captcha}
                />
              </Grid>
              <Grid item xs={12}>
                {status.fieldError.captcha && (
                  <FormHelperText error={true}>
                    {f(status.fieldError.captcha)}
                  </FormHelperText>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="flex-end">
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={
                  status.submitting || status.info.error || !status.fieldError
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

export default Contacts
