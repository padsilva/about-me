import PropTypes from 'prop-types'
import { parseISO, format } from 'date-fns'

const DateFormatter = ({ dateString }) => {
  const isoDate = new Date(dateString).toISOString()
  const date = parseISO(isoDate)
  return <time dateTime={isoDate}>{format(date, 'LLLL d, yyyy')}</time>
}

DateFormatter.propTypes = {
  dateString: PropTypes.string.isRequired
}

export default DateFormatter
