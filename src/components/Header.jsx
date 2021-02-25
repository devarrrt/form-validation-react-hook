import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {
      fontFamily: 'Permanent Marker',
      margin: theme.spacing(3, 0, 2),
      textAlign: 'center',
      fontSize: '35px',
      color: 'gray',
      textShadow: '1px 1px darkmagenta',
      textTransform: 'upperCase'
    }
  }))



const Header = () => {
    const styles = useStyles()

    return (
      <Typography 
      className={ styles.root }
      component='h1'
      variant='h5'
      >
          Validations
      </Typography>
    )
}

export default Header
