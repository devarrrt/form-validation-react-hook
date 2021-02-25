import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useData } from '../../DataContext'
import { yupResolver } from '@hookform/resolvers/yup'

import {
    MainContainer, 
    Form, 
    Input, 
    PrimaryButton} from '../UI/index'
    import * as yup from 'yup'

import Typography from '@material-ui/core/Typography'


const schema =  yup.object( ).shape({
    firstName: yup.string().matches( /^([^0-9]*)$/, 'Имя не должно содержать цифр')
    .required( 'Поле обязательно для заполнения' ),
    lastName: yup.string().matches( /^([^0-9]*)$/, 'Фамилия не должна содержать цифр' )
})




const Step1 = () => {
    const history = useHistory()
    const { data, setValues } = useData()
    const { register, handleSubmit, errors } = useForm({
        defaultValues: { firstName: data.firstName, lastName: data.lastName },
        mode: 'onBlur',
        resolver: yupResolver( schema ) 
    })

    const onSubmit = ( value )=> {
        history.push('/step2')
        setValues( value )
    }

    return (
        <MainContainer>
            <Typography
                component='h3'
                variant='h5'>
                Шаг 1
           </Typography>

            <Form onSubmit={ handleSubmit(onSubmit) } >
                <Input
                    id="firstName"
                    name="firstName"
                    label="Введите Ваше имя"
                    type="text"
                    ref={ register }
                    error={ !!errors.firstName }
                    helperText={ errors?.firstName?.message }
                />
                <Input
                    id="lastName"
                    name="lastName"
                    label="Введите Вашу фамилию"
                    type="text"
                    ref={ register }
                    error={ !!errors.firstName }
                    helperText={ errors?.firstName?.message }
                />
                 <PrimaryButton> Следующий шаг </PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default Step1
