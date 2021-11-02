import { Grid, Switch, useTheme } from '@mui/material'
import { Brightness3, Brightness5 } from '@mui/icons-material'

import { useColorMode } from 'hooks/colorMode'

const ToggleTheme = () => {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()
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
        onClick={toggleColorMode}
        inputProps={{ 'aria-label': 'toggle theme' }}
      />
      <Brightness3 fontSize="small" sx={darkMode ? iconActive : null} />
    </Grid>
  )
}

export default ToggleTheme
