import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  button: {
    color:
      theme.palette.type === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.main
  },
  selected: {
    cursor: 'default',
    pointerEvents: 'none'
  }
}))

const ToggleLang = () => {
  const { locale, pathname, push } = useRouter()
  const classes = useStyles()

  const handleChange = (event, newLocale) =>
    push(pathname, pathname, { locale: newLocale })

  return (
    <ToggleButtonGroup
      value={locale}
      exclusive
      aria-label="language"
      size="small"
      onChange={handleChange}
    >
      <ToggleButton
        value="en"
        aria-label="english"
        className={locale === 'en' ? classes.selected : classes.button}
        disabled={locale === 'en'}
      >
        ENG
      </ToggleButton>
      <ToggleButton
        value="pt"
        aria-label="portuguese"
        className={locale === 'pt' ? classes.selected : classes.button}
        disabled={locale === 'pt'}
      >
        POR
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ToggleLang
