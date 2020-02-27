import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import RegisterWrapper from '@/components/RegisterWrapper';
import { Container } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    street: Yup.string().required('A rua é obrigatória'),
    number: Yup.string().required('O número é obrigatório'),
    adjunct: Yup.string().required('O complemento é obrigatório'),
    city: Yup.string().required('A cidade é obrigatória'),
    state: Yup.string().required('O estado é obrigatório'),
    zip_code: Yup.string().required('O CEP é obrigatório'),
});

export default function RegisterDelivery() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <Container>
            <RegisterWrapper>
                <Form schema={schema} onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="name">Nome</label>
                            <Input
                                id="name"
                                name="name"
                                type="name"
                                placeholder="Ludwig van Beethoven"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="street">Rua</label>
                            <Input
                                id="street"
                                name="street"
                                type="text"
                                placeholder="Rua Beethoven"
                            />
                        </div>
                        <div className="field sm">
                            <label htmlFor="number">Número</label>
                            <Input
                                id="number"
                                name="number"
                                type="text"
                                placeholder="1729"
                            />
                        </div>
                        <div className="field sm">
                            <label htmlFor="adjunct">Complemento</label>
                            <Input id="adjunct" name="adjunct" type="text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <Input
                                id="city"
                                name="city"
                                type="text"
                                placeholder="Diadema"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="state">Cidade</label>
                            <Input
                                id="state"
                                name="state"
                                type="text"
                                placeholder="Diadema"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="state">Nome</label>
                            <Input
                                id="state"
                                name="state"
                                type="text"
                                placeholder="São Paulo"
                            />
                        </div>
                    </div>
                </Form>
            </RegisterWrapper>
        </Container>
    );
}
