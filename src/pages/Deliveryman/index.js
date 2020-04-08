import React, { useEffect, useState } from 'react';
import api from '@/services/api';

import { useDispatch } from 'react-redux';
import { deleteDeliverymanRequest } from '@/store/modules/deliveryman/actions';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';
import { toast } from 'react-toastify';

import { Add, Create, Delete } from '@material-ui/icons';
import { Dimmer, Loader } from 'semantic-ui-react';

import { Container } from './styles';

export default function Deliveryman(props) {
    const dispatch = useDispatch();

    function handleDelete(data) {
        const confirmed = window.confirm(
            'Você está prestes a excluir uma encomenda. Deseja continuar?'
        );
        if (confirmed == true) {
            dispatch(deleteDeliverymanRequest(data.id));
            loadDeliverymen();
        }
    }

    const [deliverymen, setDeliverymen] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadDeliverymen(query = '') {
        setLoading(true);
        try {
            const { data } = await api.get('deliveryman', {
                params: { page: 1, q: query },
            });

            const deliverymen = [];

            data.forEach(delivery => {
                deliverymen.push({
                    ...delivery,
                });
            });

            setDeliverymen(deliverymen);
            setLoading(false);
        } catch {
            toast.error('Falha ao trazer as informações dos entregadores.');
            setLoading(false);
        }
    }

    useEffect(() => {
        loadDeliverymen();
    }, []);

    const actions = [
        {
            text: 'Editar',
            icon: Create,
            action: data => {
                props.history.push('/register/deliveryman', data);
            },
        },
        {
            text: 'Excluir',
            icon: Delete,
            action: data => handleDelete(data),
        },
    ];

    function handleRegisterLink() {
        props.history.push('/register/deliveryman');
    }

    return (
        <Container>
            <Dimmer active={loading} inverted>
                <Loader>Loading</Loader>
            </Dimmer>
            <ContentHeader
                title="Gerenciando entregadores"
                placeholder="Buscar por entregadores"
                querySearch={loadDeliverymen}
            >
                <div className="button-group">
                    <button
                        onClick={handleRegisterLink}
                        className="primary"
                        type="button"
                    >
                        <Add /> Cadastrar
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
        widthProportion: 2,
    },
    {
        title: 'Foto',
        key: 'avatar',
        widthProportion: 4,
    },
    {
        title: 'Nome',
        key: 'name',
        widthProportion: 4,
    },
    {
        title: 'Email',
        key: 'email',
        widthProportion: 4,
    },
    {
        title: 'Ações',
        key: 'actions',
        widthProportion: 1,
    },
];
