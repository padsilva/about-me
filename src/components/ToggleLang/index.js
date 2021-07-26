import { useRouter } from 'next/router'
import { ToggleButton, ToggleButtonGroup, useTheme } from '@material-ui/core'

const ToggleLang = () => {
  const { locale, pathname, push } = useRouter()
  const theme = useTheme()
  const button = {
    color:
      theme.palette.mode === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.main
  }
  const selected = {
    cursor: 'default',
    pointerEvents: 'none'
  }

  const handleChange = (_, newLocale) =>
    push(pathname, pathname, { locale: newLocale })

  return (
    <ToggleButtonGroup
      value={locale}
      sx={{ color: 'grey' }}
      exclusive
      aria-label="language"
      size="small"
      onChange={handleChange}
    >
      <ToggleButton
        value="en"
        aria-label="english"
        sx={locale === 'en' ? selected : button}
        disabled={locale === 'en'}
      >
        ENG
      </ToggleButton>
      <ToggleButton
        value="pt"
        aria-label="portuguese"
        sx={locale === 'pt' ? selected : button}
        disabled={locale === 'pt'}
      >
        POR
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ToggleLang
