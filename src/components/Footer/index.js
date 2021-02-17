import { Box, Container, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Box
      component="footer"
      marginTop="auto"
      padding={3}
      className={classes.footer}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          {`Copyright © Paulo Silva ${new Date().getFullYear()}.`}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
