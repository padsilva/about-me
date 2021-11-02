import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, useTheme } from '@mui/material'

const InternalLink = ({ isActive = false, href, children, ...props }) => {
  const theme = useTheme()
  const router = useRouter()
  const active = {
    color:
      theme.palette.mode === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
    textDecoration: 'none'
  }
  const link = {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.primary.dark
          : theme.palette.primary.main
    }
  }

  const getClass = (href) =>
    isActive && router.pathname === href ? active : link

  return (
    <Link href={href} passHref {...props}>
      <Box component="a" sx={getClass(href)}>
        {children}
      </Box>
    </Link>
  )
}

InternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default InternalLink
