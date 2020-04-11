import React, { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import arrowLeftIcon from '@/assets/arrow_left.svg';
import doneIcon from '@/assets/done.svg';

import {
    registerDeliverymanRequest,
    updateDeliverymanRequest,
} from '@/store/modules/deliveryman/actions';

import RegisterWrapper from '@/components/RegisterWrapper';
import ContentHeader from '@/components/ContentHeader';
import AvatarInput from './AvatarInput';
import { Container } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().required('O email é obrigatório'),
    avatar_id: Yup.string(),
});

export default function RegisterDeliveryman(props) {
    const dispatch = useDispatch();
    const editingParams = props.location.state;
    const [username, setUsername] = useState('John Doe');

    async function handleSubmit(data) {
        const params = data;
        if (editingParams) {
            params.id = editingParams.id;
            dispatch(updateDeliverymanRequest(params));
            return;
        }
        dispatch(registerDeliverymanRequest(data));
    }

    function handleAvatar(e) {
        setUsername(e.currentTarget.value);
    }

    const initialData = editingParams;

    return (
        <Container>
            <ContentHeader
                title={`${editingParams ? 'Edição' : 'Cadastro'} de entregador`}
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
                        <AvatarInput
                            username={initialData ? initialData.name : username}
                            name="avatar_id"
                        />
                    </div>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="name">Nome</label>
                            <Input
                                id="name"
                                name="name"
                                type="name"
                                placeholder="John Doe"
                                onKeyUp={handleAvatar}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="street">Email</label>
                            <Input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="example@rocketseat.com"
                            />
                        </div>
                    </div>
                </Form>
            </RegisterWrapper>
        </Container>
    );
}
