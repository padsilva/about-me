import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color:
        theme.palette.type === 'light'
          ? theme.palette.primary.dark
          : theme.palette.primary.main
    }
  },
  active: {
    color:
      theme.palette.type === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
    textDecoration: 'none'
  }
}))

const InternalLink = ({ isActive = false, href, children, ...props }) => {
  const classes = useStyles()
  const router = useRouter()

  const getClass = (href) =>
    isActive && router.pathname === href ? classes.active : classes.link

  return (
    <Link href={href} {...props}>
      <a className={getClass(href)}>{children}</a>
    </Link>
  )
}

InternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default InternalLink
