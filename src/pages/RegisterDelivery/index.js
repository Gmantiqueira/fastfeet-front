import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import api from '@/services/api';

import { Form, Input } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';

import arrowLeftIcon from '@/assets/arrow_left.svg';
import doneIcon from '@/assets/done.svg';

import { registerDeliveryRequest } from '@/store/modules/delivery/actions';

import RegisterWrapper from '@/components/RegisterWrapper';
import ContentHeader from '@/components/ContentHeader';

import { Container } from './styles';

const schema = Yup.object().shape({
    recipient_id: Yup.string().required('O nome é obrigatório'),
    deliveryman_id: Yup.string().required('A rua é obrigatória'),
    product: Yup.string().required('O número é obrigatório'),
});

export default function RegisterDelivery(props) {
    const dispatch = useDispatch();
    function handleSubmit(data) {
        dispatch(registerDeliveryRequest(data));
    }

    const editingParams = props.location.state;

    const selectStyles = {
        control: styles => ({
            ...styles,
            height: '45px;',
            minHeight: 'fit-content',
        }),
    };

    async function loadRecipients(input) {
        const response = await api.get('recipients', {
            params: { page: 1 },
        });

        const options = [];

        response.data.forEach(({ name, ...rest }) => {
            if (name.toLowerCase().includes(input.toLowerCase())) {
                options.push({ ...rest, label: name });
            }
        });

        return options;
    }

    async function loadDeliveryman(input) {
        const response = await api.get('deliveryman', {
            params: { page: 1 },
        });

        const options = [];

        response.data.forEach(({ name, ...rest }) => {
            if (name.toLowerCase().includes(input.toLowerCase())) {
                options.push({ ...rest, label: name });
            }
        });

        return options;
    }

    return (
        <Container>
            <ContentHeader
                title={
                    editingParams
                        ? 'Edição de encomendas'
                        : 'Cadastro de encomendas'
                }
            >
                <div className="button-group">
                    <button type="button">
                        <img
                            src={arrowLeftIcon}
                            alt="Ícone de voltar"
                            onClick={props.history.goBack}
                        />
                        Voltar
                    </button>
                    <button className="primary" type="submit" form="form">
                        <img src={doneIcon} alt="Ícone de finalizado" />
                        Salvar
                    </button>
                </div>
            </ContentHeader>
            <RegisterWrapper>
                <Form id="form" schema={schema} onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="name">Destinatário</label>
                            <AsyncSelect
                                id="recipient_id"
                                name="recipient_id"
                                cacheOptions
                                loadOptions={loadRecipients}
                                defaultOptions
                                placeholder="Ludwig van Beethoven"
                                styles={selectStyles}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="name">Entregador</label>
                            <AsyncSelect
                                id="deliveryman_id"
                                name="deliveryman_id"
                                cacheOptions
                                loadOptions={loadDeliveryman}
                                defaultOptions
                                placeholder="John Doe"
                                styles={selectStyles}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="street">Nome do produto</label>
                            <Input
                                id="product"
                                name="product"
                                type="text"
                                placeholder="Rua Beethoven"
                            />
                        </div>
                    </div>
                </Form>
            </RegisterWrapper>
        </Container>
    );
}
