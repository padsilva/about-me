import { Grid, Switch, useTheme } from '@material-ui/core'
import { Brightness3, Brightness5 } from '@material-ui/icons'
import { useDarkMode } from 'hooks/darkMode'

const ToggleTheme = () => {
  const { toggleTheme } = useDarkMode()
  const theme = useTheme()
  const darkMode = theme.palette.mode === 'dark'
  const iconActive = {
    color: '#ffca28'
  }

  return (
    <Grid
      component="label"
      container
      justifyContent="center"
      alignItems="center"
    >
      <Brightness5 fontSize="small" sx={!darkMode ? iconActive : null} />
      <Switch
        color="secondary"
        size="small"
        checked={darkMode}
        onChange={toggleTheme}
        inputProps={{ 'aria-label': 'toggle theme' }}
      />
      <Brightness3 fontSize="small" sx={darkMode ? iconActive : null} />
    </Grid>
  )
}

export default ToggleTheme
