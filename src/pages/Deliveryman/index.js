import React, { useEffect, useState } from 'react';
import api from '@/services/api';

import { useDispatch } from 'react-redux';
import { deleteDeliverymanRequest } from '@/store/modules/deliveryman/actions';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';

import AddIcon from '@/assets/add.svg';
import CreateIcon from '@/assets/create.svg';
import DeleteIcon from '@/assets/delete.svg';

import { Container } from './styles';

export default function Deliveryman(props) {
    const dispatch = useDispatch();
    const [deliverymen, setDeliverymen] = useState([]);

    function handleDelete(data) {
        const confirmed = window.confirm(
            'Você está prestes a excluir uma encomenda. Deseja continuar?'
        );
        if (confirmed == true) {
            dispatch(deleteDeliverymanRequest(data.id));
            loadDeliverymen();
        }
    }

    async function loadDeliverymen() {
        const { data } = await api.get('deliveryman', {
            params: { page: 1 },
        });

        const deliverymen = [];

        data.forEach(delivery => {
            deliverymen.push({
                ...delivery,
            });
        });

        setDeliverymen(deliverymen);
    }

    useEffect(() => {
        loadDeliverymen();
    }, []);

    const actions = [
        {
            text: 'Editar',
            icon: CreateIcon,
            action: data => {
                props.history.push('/register/deliveryman', data);
            },
        },
        {
            text: 'Excluir',
            icon: DeleteIcon,
            action: data => handleDelete(data),
        },
    ];

    function handleRegisterLink() {
        props.history.push('/register/deliveryman');
    }

    return (
        <Container>
            <ContentHeader
                title="Gerenciando entregadores"
                placeholder="Buscar por entregadores"
            >
                <div className="button-group">
                    <button
                        onClick={handleRegisterLink}
                        className="primary"
                        type="button"
                    >
                        <img src={AddIcon} alt="Ícone de adicionar" />
                        Cadastrar
                    </button>
                </div>
            </ContentHeader>
            <Grid
                settings={gridSettings}
                data={deliverymen}
                actions={actions}
            />
        </Container>
    );
}

const gridSettings = [
    {
        title: 'ID',
        key: 'id',
        widthProportion: 1.3,
    },
    {
        title: 'Foto',
        key: 'avatar',
        widthProportion: 1,
    },
    {
        title: 'Nome',
        key: 'name',
        widthProportion: 1,
    },
    {
        title: 'Email',
        key: 'email',
        widthProportion: 1,
    },
    {
        title: 'Ações',
        key: 'actions',
        widthProportion: 1.3,
    },
];
