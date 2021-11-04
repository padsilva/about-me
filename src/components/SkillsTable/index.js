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
  TableRow,
  Typography,
  useTheme
} from '@mui/material'

import LevelTooltip from 'components/LevelTooltip'

const StyledTableCell = ({ children, ...props }) => {
  const theme = useTheme()

  return (
    <TableCell
      sx={{
        backgroundColor: theme.palette.primary.main,
        color:
          theme.palette.mode === 'dark'
            ? theme.palette.common.black
            : theme.palette.common.white
      }}
      {...props}
    >
      {children}
    </TableCell>
  )
}

StyledTableCell.propTypes = {
  children: PropTypes.node.isRequired
}

const StyledTableRow = ({ children, ...props }) => {
  const theme = useTheme()

  return (
    <TableRow
      sx={{
        '&:nth-of-type(even)': {
          backgroundColor: theme.palette.action.hover
        }
      }}
      {...props}
    >
      {children}
    </TableRow>
  )
}

StyledTableRow.propTypes = {
  children: PropTypes.node.isRequired
}

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
            <TableRow key={tech.name}>
              <TableCell component="th" scope="row">
                <Link
                  href={tech.link}
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                >
                  <Typography variant="subtitle2">{tech.name}</Typography>
                </Link>
              </TableCell>
              <TableCell align="right">{f(tech.level)}</TableCell>
            </TableRow>
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
