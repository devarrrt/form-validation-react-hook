import React from 'react'
import { Controller } from 'react-hook-form'
import Dropzone from 'react-dropzone'
import {CloudUpload, InsertDriveFile } from '@material-ui/icons'
import {List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {
     backgroundColor: '#eee',
     textAlign: 'center',
     cursor: 'pointer',
     color: '#333',
     padding: '10px',
     marginTop: '20px',
     outline: 'none'
    },
    icon: {
        marginTop: '16px',
        color: '#888',
        fontSize: '42px'
    }
  }))

const FileInput = ({ control, name }) => {
    const styles = useStyles()

    return (
        <Controller 
        control={ control }
        name={ name }
        defaultValue={[]}
        render={ ({ onChange, onBlur, value}) => (
            <>
               <Dropzone onDrop={ onChange }>
                { 
                ({ getRootProps, getInputProps } ) => ( 
                <Paper
                className={ styles.root }
                    variant='outlined'
                    { ...getRootProps() } >
                        <CloudUpload className={ styles.icon } />
                        <input { ...getInputProps() } onBlur={ onBlur } name={name} />
                        <p> Выберите нужный файл и просто перетащите его сюда </p>
                </Paper> )}
            </Dropzone>
            <List>
                    {  
                    value.map( (f, index )=> (
                        <ListItem key={ index }>
                            <ListItemIcon>
                                <InsertDriveFile/>
                            </ListItemIcon>
                            <ListItemText primary={ f.name } secondary={ f.size } />
                        </ListItem>
                    ) )
                    }
                </List>

            </>
        )}
        />
    )
}

export default FileInput
