import PropTypes from 'prop-types'
import { Box, Container, Grid, useMediaQuery } from '@mui/material'

import SkillsTable from 'components/SkillsTable'

const GridItem = (props) => (
  <Box
    color="white"
    p={1}
    borderRadius={1}
    textAlign="center"
    fontSize={20}
    fontWeight="bold"
    {...props}
  />
)

const Skills = ({ skills }) => {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const arch = skills.filter((entry) => entry.label === 'arch')[0]
  const cms = skills.filter((entry) => entry.label === 'cms')[0]
  const db = skills.filter((entry) => entry.label === 'db')[0]
  const dev = skills.filter((entry) => entry.label === 'dev')[0]
  const lang = skills.filter((entry) => entry.label === 'lang')[0]
  const lib = skills.filter((entry) => entry.label === 'lib')[0]
  const scm = skills.filter((entry) => entry.label === 'scm')[0]

  return mdUp ? (
    <Container component="main" maxWidth="lg">
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="repeat(9, auto)"
        gap={8}
        gridTemplateAreas={`"Lang Lib Arch"
            "Lang Lib Arch"
            "Lang Lib Arch"
            "Lang Lib Dev"
            "DB Lib Dev"
            "DB CMS Dev"
            "DB CMS SCM"
            "DB CMS SCM"
            ". . SCM"`}
      >
        <GridItem gridArea="Lang">
          <SkillsTable data={lang} />
        </GridItem>
        <GridItem gridArea="Lib">
          <SkillsTable data={lib} />
        </GridItem>
        <GridItem gridArea="DB">
          <SkillsTable data={db} />
        </GridItem>
        <GridItem gridArea="SCM">
          <SkillsTable data={scm} />
        </GridItem>
        <GridItem gridArea="Arch">
          <SkillsTable data={arch} />
        </GridItem>
        <GridItem gridArea="Dev">
          <SkillsTable data={dev} />
        </GridItem>
        <GridItem gridArea="CMS">
          <SkillsTable data={cms} />
        </GridItem>
      </Box>
    </Container>
  ) : (
    <Container component="main" maxWidth="xs">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <SkillsTable label="lang" data={lang} />
        </Grid>
        <Grid item xs={12}>
          <SkillsTable label="lib" data={lib} />
        </Grid>
        <Grid item xs={12}>
          <SkillsTable label="db" data={db} />
        </Grid>
        <Grid item xs={12}>
          <SkillsTable label="scm" data={scm} />
        </Grid>
        <Grid item xs={12}>
          <SkillsTable label="arch" data={arch} />
        </Grid>
        <Grid item xs={12}>
          <SkillsTable label="dev" data={dev} />
        </Grid>
        <Grid item xs={12}>
          <SkillsTable label="cms" data={cms} />
        </Grid>
      </Grid>
    </Container>
  )
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired
}

export default Skills
