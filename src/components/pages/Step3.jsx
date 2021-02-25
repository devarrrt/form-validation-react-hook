import React from 'react'
import { useHistory } from 'react-router-dom'
import { useData } from '../../DataContext'
import { useForm } from 'react-hook-form'

import Typography from '@material-ui/core/Typography'

import {
    MainContainer,
    PrimaryButton,
    Form,
    FileInput
} from '../UI/index'



const Step3 = () => {
    const history = useHistory()
    const { data, setValues } = useData()

    const { control, handleSubmit } = useForm({
        defaultValues: {
            files: data.files
        }
    })

    const onSubmit = (data) => {
        history.push('/result')
        setValues(data)
    }

    return (
        <MainContainer>
            <Typography
                component='h3'
                variant='h5'>
                Шаг 3
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput name="files" control={control}/>
                <PrimaryButton> Показать результат </PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default Step3
