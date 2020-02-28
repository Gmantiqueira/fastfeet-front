import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform';

import arrowLeftIcon from '@/assets/arrow_left.svg';
import doneIcon from '@/assets/done.svg';

import { RegisterDeliveryRequest, registerDeliveryRequest } from '@/store/modules/delivery/actions'

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

    return (
        <Container>
            <ContentHeader title="Cadastro de encomenda">
                <button type="button">
                    <img src={arrowLeftIcon} alt="Ícone de voltar" onClick={props.history.goBack}/>
                    Voltar
                </button>
                <button className="primary" type="submit" form="form">
                    <img src={doneIcon} alt="Ícone de finalizado" />
                    Salvar
                </button>
            </ContentHeader>
            <RegisterWrapper>
                <Form id="form" schema={schema} onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="field">
                            <label htmlFor="name">Destinatário</label>
                            <Input
                                id="recipient_id"
                                name="recipient_id"
                                type="text"
                                placeholder="Ludwig van Beethoven"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="name">Entregador</label>
                            <Input
                                id="deliveryman_id"
                                name="deliveryman_id"
                                type="text"
                                placeholder="Ludwig van Beethoven"
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
