import React, { useState } from 'react'
import { useData } from '../../DataContext'
import { Link } from 'react-router-dom'

import { Typography, TableContainer, Paper, Table, TableBody, TableRow, TableCell, TableHead, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { InsertDriveFile } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { MainContainer } from '../UI/index'


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '30px',
        marginTop: '30px'
    },
    table: {
        marginBottom: '30px',
        marginTop: '30px'
    },
    link: {
        textDecoration: 'none',
        color: '#000',
        fontSize: '22px'
    },
    button: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'gray',
        cursor: 'pointer',
        padding: '7px 15px',
        borderRadius: '6px',
        textTransform: 'upperCase',
        color: '#fff',
        border: 'none'
    }
}))



const Result = () => {
    const [success, setSuccess] = useState(false)
    const styles = useStyles()
    const { data } = useData()
    const entries = Object.entries(data).filter((entry) => entry[0] !== 'files')


    const { files } = data
    const onSubmit = () => {
        setSuccess(true)
    }
    if (success) {
        return  <MainContainer>
            <Typography
        className={styles.title}
        component='h3'
        variant='h5'>
        Это успех!
    </Typography>
        </MainContainer>
    }

    return (
        <MainContainer>
            <Typography
                className={styles.title}
                component='h3'
                variant='h5'>
                Итого
            </Typography>
            <TableContainer
            className={ styles.root }
            component={ Paper }>
                    <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell> Поле</TableCell>
                            <TableCell align='right' > Данные </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry) => (
                            <TableRow key={entry[0]}>
                                <TableCell>{entry[0]}</TableCell>
                                <TableCell align='right'>
                                    {entry[1].toString()}
                                </TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {
                files && (
                    <>
                        <Typography
                            className={styles.titleFiles}
                            component='h2' variant='h5' >
                            📦Files
                    </Typography>
                        <List>
                            {files.map((f, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <InsertDriveFile />
                                    </ListItemIcon>
                                    <ListItemText primary={f.name} secondary={f.size} />
                                </ListItem>
                            ))}
                        </List>
                    </>
                )
            }
             <button
                className={styles.button}
                onClick={() => onSubmit()}
            >Отправить</button>
            <Link className={styles.link} to="/"> Заполнить данные </Link>

        </MainContainer>
    )
}

export default Result
