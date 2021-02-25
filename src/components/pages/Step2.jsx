import React from 'react'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Typography from '@material-ui/core/Typography'

import { useData } from '../../DataContext'

import {
    MainContainer,
    Form,
    Input,
    PrimaryButton
} from '../UI/index'



const schema = yup.object().shape({
    email: yup.string().email('Email должен быть валидным')
        .required('Поле обязательно для заполнения')
})


const Step2 = () => {

    const { data, setValues } = useData()
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm({
        defaultValues: { email: data.email },
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const onSubmit = (value) => {
        history.push('/step3')
        setValues(value)
        console.log( value )
    }

    return (
        <MainContainer>
            <Typography
                component='h2'
                variant='h5'> Шаг 2 </Typography>

            <Form onSubmit={handleSubmit(onSubmit)} >
                <Input
                    ref={register}
                    id="email"
                    name="email"
                    label="Введите Ваш e-mail"
                    required
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />
                <PrimaryButton> Следующий шаг </PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default Step2
