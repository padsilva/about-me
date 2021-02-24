import Image from 'next/image'
import { useState } from 'react'
import {
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Typography
} from '@material-ui/core'
import { Close, GitHub, Info } from '@material-ui/icons'

import data from './data'

const useStyles = makeStyles((theme) => ({
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
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
  }
}))

const Projects = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')

  const handleClickOpen = (name) => {
    setName(name)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  return (
    <Container maxWidth="md">
      <GridList cellHeight={200} spacing={6}>
        {data.map((tile) => (
          <GridListTile
            key={tile.name}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <Image
              src={tile.img}
              alt={tile.title}
              layout="fill"
              objectFit="cover"
            />
            <GridListTileBar
              titlePosition="top"
              actionIcon={
                <IconButton
                  href={tile.link}
                  aria-label={`${tile.title} repository url`}
                  target="_blank"
                  rel="noopener no referrer"
                  className={classes.icon}
                >
                  <GitHub />
                </IconButton>
              }
              className={classes.titleBar}
            />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                  onClick={() => handleClickOpen(tile.title)}
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
          <Typography variant="h6">{name}</Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers className={classes.content}>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export default Projects
