import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Logo from '@/assets/logo.svg';

import { Wrapper } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <Wrapper>
            <img src={Logo} alt="Logo da empresa FastFeet" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <span>Seu e-mail</span>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="exemplo@email.com"
                />
                <span>Sua senha</span>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="************"
                />

                <button type="submit">Entrar no sistema</button>
            </Form>
        </Wrapper>
    );
}
