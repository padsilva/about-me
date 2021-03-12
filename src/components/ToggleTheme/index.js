import { Grid, makeStyles, Switch } from '@material-ui/core'
import { Brightness3, Brightness5 } from '@material-ui/icons'
import { useDarkMode } from 'hooks/darkMode'

const useStyles = makeStyles(() => ({
  iconActive: {
    color: '#ffca28'
  }
}))

const ToggleTheme = () => {
  const { darkMode, toggleTheme } = useDarkMode()
  const classes = useStyles()

  return (
    <Grid component="label" container justify="center" alignItems="center">
      <Brightness5
        fontSize="small"
        className={!darkMode ? classes.iconActive : null}
      />
      <Switch
        size="small"
        checked={darkMode}
        onChange={toggleTheme}
        inputProps={{ 'aria-label': 'toggle theme' }}
      />
      <Brightness3
        fontSize="small"
        className={darkMode ? classes.iconActive : null}
      />
    </Grid>
  )
}

export default ToggleTheme
