import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '@/store/modules/auth/actions';

import Logo from '@/assets/logo.svg';

import { Wrapper } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <Wrapper>
            <img src={Logo} alt="Logo da empresa FastFeet" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <p>Seu e-mail</p>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="exemplo@email.com"
                />
                <p>Sua senha</p>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="************"
                />

                <button type="submit">
                    {loading ? 'Carregando...' : 'Entrar no sistema'}
                </button>
            </Form>
        </Wrapper>
    );
}
