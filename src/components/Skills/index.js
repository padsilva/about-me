import { Box, Container, Grid, Hidden } from '@material-ui/core'

import SkillsTable from 'components/SkillsTable'

import { arch, cms, db, dev, lang, lib, scm } from './data'

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

const Skills = () => (
  <>
    <Hidden smDown>
      <Container component="main" maxWidth="lg">
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          gridTemplateRows="repeat(9, auto)"
          gridGap={75}
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
            <SkillsTable label="lang" data={lang} />
          </GridItem>
          <GridItem gridArea="Lib">
            <SkillsTable label="lib" data={lib} />
          </GridItem>
          <GridItem gridArea="DB">
            <SkillsTable label="db" data={db} />
          </GridItem>
          <GridItem gridArea="SCM">
            <SkillsTable label="scm" data={scm} />
          </GridItem>
          <GridItem gridArea="Arch">
            <SkillsTable label="arch" data={arch} />
          </GridItem>
          <GridItem gridArea="Dev">
            <SkillsTable label="dev" data={dev} />
          </GridItem>
          <GridItem gridArea="CMS">
            <SkillsTable label="cms" data={cms} />
          </GridItem>
        </Box>
      </Container>
    </Hidden>
    <Hidden mdUp>
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
    </Hidden>
  </>
)

export default Skills
