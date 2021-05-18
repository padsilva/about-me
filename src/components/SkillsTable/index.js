import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles
} from '@material-ui/core'

import LevelTooltip from 'components/LevelTooltip'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
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
                {tech.name}
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
