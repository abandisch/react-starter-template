import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'

const styles = {
  grow: {
    flexGrow: 1
  },
  root: {
    flexGrow: 1
  }
}

function TopBar (props: any) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar color='primary' position='static'>
        <Toolbar>
          <Typography variant='headline' color='inherit' className={classes.grow}>
            App Name
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(TopBar)
