import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import arrowLeftIcon from '@/assets/arrow_left.svg';
import doneIcon from '@/assets/done.svg';
import InputMask from './InputMask';

import {
    registerRecipientRequest,
    updateRecipientRequest,
} from '@/store/modules/recipient/actions';

import RegisterWrapper from '@/components/RegisterWrapper';
import ContentHeader from '@/components/ContentHeader';
import { Container } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    street: Yup.string().required('A rua é obrigatória'),
    number: Yup.string().required('O número é obrigatório'),
    city: Yup.string().required('A cidade é obrigatória'),
    state: Yup.string().required('O estado é obrigatório'),
    zip_code: Yup.string().required('O CEP é obrigatório'),
});

export default function RegisterRecipient(props) {
    const dispatch = useDispatch();
    const editingParams = props.location.state;

    function handleSubmit(data) {
        const params = data;
        if (editingParams) {
            params.id = editingParams.id;
            dispatch(updateRecipientRequest(data));
            return;
        }
        dispatch(registerRecipientRequest(data));
    }

    const initialData = editingParams;

    return (
        <Container>
            <ContentHeader
                title={`${
                    editingParams ? 'Edição' : 'Cadastro'
                } de destinatário`}
            >
                <div className="button-group">
                    <button
                        type="button"
                        onClick={() => {
                            props.history.goBack();
                        }}
                    >
                        <img src={arrowLeftIcon} alt="Ícone de voltar" />
                        Voltar
                    </button>
                    <button className="primary" type="submit" form="form">
                        <img src={doneIcon} alt="Ícone de finalizado" />
                        Salvar
                    </button>
                </div>
            </ContentHeader>
            <RegisterWrapper>
                <Form
                    id="form"
                    name="form"
                    schema={schema}
                    onSubmit={handleSubmit}
                    initialData={initialData}
                >
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
                            <label htmlFor="state">Estado</label>
                            <Input
                                id="state"
                                name="state"
                                type="text"
                                placeholder="São Paulo"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="zip_code">CEP</label>
                            <InputMask
                                id="zip_code"
                                name="zip_code"
                                type="text"
                                mask="99999-999"
                                placeholder="12345-678"
                            />
                        </div>
                    </div>
                </Form>
            </RegisterWrapper>
        </Container>
    );
}
