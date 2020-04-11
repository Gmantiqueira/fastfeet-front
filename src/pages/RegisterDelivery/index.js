import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import api from '@/services/api';

import { Form, Input } from '@rocketseat/unform';
import UnformSelect from '@/components/UnformSelect';

import arrowLeftIcon from '@/assets/arrow_left.svg';
import doneIcon from '@/assets/done.svg';

import {
    registerDeliveryRequest,
    updateDeliveryRequest,
} from '@/store/modules/delivery/actions';

import RegisterWrapper from '@/components/RegisterWrapper';
import ContentHeader from '@/components/ContentHeader';

import { Container } from './styles';

const schema = Yup.object().shape({
    recipient_id: Yup.object({
        label: Yup.string(),
        value: Yup.number(),
    })
        .nullable()
        .required('O destinatário é obrigatório'),
    deliveryman_id: Yup.object({
        label: Yup.string(),
        value: Yup.number(),
    })
        .nullable()
        .required('O entregador é obrigatório'),
    product: Yup.string().required('O nome do produto é obrigatório'),
});

export default function RegisterDelivery(props) {
    const dispatch = useDispatch();
    const editingParams = props.location.state;

    function handleSubmit(data) {
        const params = {
            ...data,
            deliveryman_id: data.deliveryman_id.value,
            recipient_id: data.recipient_id.value,
            product: data.product,
        };

        if (editingParams) {
            params.id = editingParams.id;
            dispatch(updateDeliveryRequest(params));
            return;
        }
        dispatch(registerDeliveryRequest(params));
    }

    async function loadRecipients(input) {
        const response = await api.get('recipient', {
            params: { page: 1 },
        });

        const options = [];

        response.data.forEach(({ name, id, ...rest }) => {
            if (name.toLowerCase().includes(input.toLowerCase())) {
                options.push({ ...rest, label: name, value: id });
            }
        });

        return options;
    }

    async function loadDeliveryman(input) {
        const response = await api.get('deliveryman', {
            params: { page: 1 },
        });

        const options = [];

        response.data.forEach(({ name, id, ...rest }) => {
            if (name.toLowerCase().includes(input.toLowerCase())) {
                options.push({ ...rest, label: name, value: id });
            }
        });

        return options;
    }

    const initialData = {
        deliveryman_id: editingParams
            ? {
                  label: editingParams.deliveryman.name,
                  value: editingParams.deliveryman.id,
              }
            : null,
        recipient_id: editingParams
            ? {
                  label: editingParams.recipient.name,
                  value: editingParams.recipient.id,
              }
            : null,
        product: editingParams ? editingParams.product : null,
    };

    return (
        <Container>
            <ContentHeader
                title={`${editingParams ? 'Edição' : 'Cadastro'} de encomenda`}
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
                    schema={schema}
                    onSubmit={handleSubmit}
                    initialData={initialData}
                >
                    <div className="row">
                        <div className="field">
                            <UnformSelect
                                name="recipient_id"
                                label="Destinatário"
                                loadOptions={loadRecipients}
                                placeholder="Ludwig van Beethoven"
                                defaultValue={initialData.recipient_id}
                            />
                        </div>
                        <div className="field">
                            <UnformSelect
                                name="deliveryman_id"
                                label="Entregador"
                                loadOptions={loadDeliveryman}
                                placeholder="John Doe"
                                defaultValue={initialData.deliveryman_id}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field">
                            <Input
                                id="product"
                                name="product"
                                type="text"
                                placeholder="Rua Beethoven"
                                label="Nome do produto"
                            />
                        </div>
                    </div>
                </Form>
            </RegisterWrapper>
        </Container>
    );
}
