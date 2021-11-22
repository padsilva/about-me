import { useRouter } from 'next/router'
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { useIntl } from 'react-intl'

import Menu from 'components/Menu'

const TopBar = () => {
  const theme = useTheme()
  const darkMode = theme.palette.mode === 'dark'
  const { pathname } = useRouter()
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })
  const mdDown = useMediaQuery((theme) => theme.breakpoints.down('md'))

  const breadCrumb = () => ' / ' + f(pathname.replace('/', '') || 'home')

  return (
    <>
      <AppBar
        position="fixed"
        color={darkMode ? 'grey' : 'default'}
        enableColorOnDark
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="baseline"
          >
            <Grid item xs>
              <Typography variant="h4" display="inline">
                {process.env.NEXT_PUBLIC_AUTHOR || 'John Doe'}
              </Typography>

              {mdDown ? (
                <Typography
                  component="h5"
                  variant="subtitle2"
                  display="inline"
                  sx={{
                    color: darkMode
                      ? theme.palette.primary.main
                      : theme.palette.primary.dark
                  }}
                >
                  {breadCrumb()}
                </Typography>
              ) : null}
            </Grid>
            <Grid
              container
              item
              xs={2}
              sm={1}
              md={9}
              lg={8}
              xl={5}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Menu />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* necessary for content to be below app bar */}
      <Toolbar id="back-to-top-anchor" />
    </>
  )
}

export default TopBar
