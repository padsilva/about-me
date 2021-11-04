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
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  Typography,
  useTheme
} from '@mui/material'
import { Close, Info } from '@mui/icons-material'

import data from './data'

const initialStatus = {
  name: '',
  title: '',
  github: '',
  live: '',
  techs: []
}

const Projects = () => {
  const theme = useTheme()
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
    <Container component="main" maxWidth="md">
      <ImageList rowHeight={200}>
        {data.map((proj) => (
          <ImageListItem
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
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
              }}
              title={proj.title}
              actionIcon={
                <IconButton
                  aria-label={`info about ${proj.title}`}
                  sx={{ color: 'white' }}
                  onClick={() => handleClickOpen(proj)}
                >
                  <Info />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          sx={{
            m: 0,
            p: theme.spacing(2),
            backgroundColor: theme.palette.primary.main,
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.common.black
                : theme.palette.common.white
          }}
          component="span"
        >
          <Typography variant="h5" component="h2">
            {info.title}
          </Typography>
          <IconButton
            aria-label="close"
            sx={{
              position: 'absolute',
              right: theme.spacing(1),
              top: theme.spacing(1),
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.common.black
                  : theme.palette.common.white
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: theme.spacing(2) }}>
          <Typography variant="h6" gutterBottom>
            {f('title.desc')}
          </Typography>
          {info.name && (
            <Typography
              component="div"
              variant="body2"
              align="justify"
              dangerouslySetInnerHTML={{
                __html: f(`${info.name}.description`)
              }}
              gutterBottom
            />
          )}

          <br />

          <Typography gutterBottom variant="h6" paragraph>
            {f('title.techs')}
          </Typography>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="flex-start"
          >
            {info.techs.map((tech) => (
              <Grid
                container
                item
                xs={6}
                sm={3}
                key={tech.name}
                direction="column"
                justifyContent="center"
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
                  <Typography noWrap variant="caption">
                    {tech.name}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>

          <br />

          {(info.live || info.github) && (
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
          )}

          {info.live && (
            <Typography variant="body2">
              {f('live')}
              <Link href={info.live} target="_blank" rel="noopener">
                {info.live}
              </Link>
            </Typography>
          )}

          {info.github && (
            <Typography variant="body2">
              {f('repo')}
              <Link href={info.github} target="_blank" rel="noopener">
                {info.github}
              </Link>
            </Typography>
          )}
        </DialogContent>

        {info.udemy && (
          <DialogActions sx={{ p: theme.spacing(2) }}>
            <DialogContentText variant="caption">
              {f('udemy')}
              <Link href={info.udemy.link} target="_blank" rel="noopener">
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
