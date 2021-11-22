import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import {
  Link,
  Paper,
  Rating,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme
} from '@mui/material'
import { Circle, CircleOutlined } from '@mui/icons-material'

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

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconFilled': {
    color: theme.palette.success.main
  }
}))

const SkillsTable = ({ data: { label, title, skills } }) => {
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  return (
    <TableContainer component={Paper}>
      <Table aria-label={`${label} table`}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>{title}</StyledTableCell>
            <StyledTableCell align="right">
              <LevelTooltip text={f('levelTip')} label={f('level')} />
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {skills &&
            skills.map(({ name, link, level }) => (
              <TableRow key={name}>
                <TableCell component="th" scope="row">
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener"
                    color="inherit"
                  >
                    <Typography variant="subtitle2">{name}</Typography>
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <StyledRating
                    name="read-only"
                    value={level}
                    readOnly
                    size="small"
                    icon={<Circle fontSize="inherit" />}
                    emptyIcon={<CircleOutlined fontSize="inherit" />}
                    color="success"
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

SkillsTable.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
  }).isRequired
}

export default SkillsTable
