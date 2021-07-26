import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import LevelTooltip from 'components/LevelTooltip'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black
  }
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow)

const SkillsTable = ({ label, data }) => {
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <TableContainer component={Paper}>
      <Table aria-label={`${label} table`}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>{f(label)}</StyledTableCell>
            <StyledTableCell align="right">
              <LevelTooltip text={f('levelTip')} label={f('level')} />
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.map((tech) => (
            <StyledTableRow key={tech.name}>
              <StyledTableCell component="th" scope="row">
                <Link
                  href={tech.link}
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                >
                  <strong>{tech.name}</strong>
                </Link>
              </StyledTableCell>
              <StyledTableCell align="right">{f(tech.level)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

SkillsTable.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default SkillsTable
