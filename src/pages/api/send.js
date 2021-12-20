import sgMail from '@sendgrid/mail'

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.NEXT_SENDGRID_API_KEY)

  const { email, message, firstName, lastName, subject } = req.body

  const content = {
    to: process.env.NEXT_SENDGRID_EMAIL,
    from: process.env.NEXT_SENDGRID_EMAIL,
    subject: `${subject} - ${firstName} ${lastName} (${email})`,
    text: message
  }

  try {
    await sgMail.send(content)
    res.status(200).send('emailSuccess')
  } catch (error) {
    res.status(400).send('emailError')
  }
}

export default sendEmail
