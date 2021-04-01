import Image from 'next/image'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core'
import { Close, Info } from '@material-ui/icons'

import data from './data'

const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'white'
  },
  content: {
    padding: theme.spacing(2)
  },
  title: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  link: {
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary.main
    }
  }
}))

const initialStatus = {
  name: '',
  title: '',
  github: '',
  live: '',
  techs: []
}

const Projects = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [info, setInfo] = useState(initialStatus)
  const { formatMessage } = useIntl()
  const f = (id) => formatMessage({ id })

  const handleClickOpen = (proj) => {
    setInfo({
      ...initialStatus,
      ...proj
    })
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  return (
    <Container maxWidth="md">
      <GridList cellHeight={200}>
        {data.map((proj) => (
          <GridListTile
            key={proj.name}
            cols={proj.featured ? 2 : 1}
            rows={proj.featured ? 2 : 1}
          >
            <Image
              src={`/img/projects/${proj.name}.jpg`}
              alt={proj.title}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
            <GridListTileBar
              title={proj.title}
              actionIcon={
                <IconButton
                  aria-label={`info about ${proj.title}`}
                  className={classes.icon}
                  onClick={() => handleClickOpen(proj)}
                >
                  <Info />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          disableTypography
          id="customized-dialog-title"
          className={classes.title}
        >
          <Typography variant="h4" component="h2">
            {info.title}
          </Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers className={classes.content}>
          <Typography variant="h6">{f('title.desc')}</Typography>
          <Typography align="justify" paragraph>
            {info.name && f(`${info.name}.description`)}
          </Typography>

          {info.live && (
            <Typography>
              {f('live')}
              <Link href={info.live} target="_blank">
                {info.live}
              </Link>
            </Typography>
          )}
          {info.github && (
            <Typography paragraph>
              {f('repo')}
              <Link href={info.github} target="_blank">
                {info.github}
              </Link>
            </Typography>
          )}

          <br />

          <Typography gutterBottom variant="h6">
            {f('title.techs')}
          </Typography>

          <Grid container spacing={3} justify="center" alignItems="flex-start">
            {info.techs.map((tech) => (
              <Grid
                container
                item
                xs={6}
                sm={3}
                key={tech.name}
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Image
                    src={tech.imgSrc}
                    alt={tech.name}
                    width={40}
                    height={40}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="caption">{tech.name}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        {info.udemy && (
          <DialogActions className={classes.content}>
            <DialogContentText variant="body2">
              {f('udemy')}
              <Link href={info.udemy.link} target="_blank">
                {info.udemy.name}
              </Link>
            </DialogContentText>
          </DialogActions>
        )}
      </Dialog>
    </Container>
  )
}

export default Projects
