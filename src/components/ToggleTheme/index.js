import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Grid, makeStyles, Switch, useTheme } from '@material-ui/core'
import { Brightness3, Brightness5 } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  iconActive: {
    color: '#ffca28'
  }
}))

const ToggleTheme = ({ onToggleDark }) => {
  const theme = useTheme()
  const classes = useStyles()
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    setIsChecked(theme.palette.type === 'dark')
  }, [theme])

  return (
    <Grid component="label" container justify="center" alignItems="center">
      <Brightness5
        fontSize="small"
        className={!isChecked ? classes.iconActive : null}
      />
      <Switch size="small" checked={isChecked} onChange={onToggleDark} />
      <Brightness3
        fontSize="small"
        className={isChecked ? classes.iconActive : null}
      />
    </Grid>
  )
}

ToggleTheme.propTypes = {
  onToggleDark: PropTypes.func.isRequired
}

export default ToggleTheme
