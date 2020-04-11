import React, { useEffect, useState } from 'react';
import api from '@/services/api';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';
import TransitionsModal from './TransitionsModal';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { deleteDeliveryRequest } from '@/store/modules/delivery/actions';

import { Add, Create, Delete, RemoveRedEye } from '@material-ui/icons';

import { Container } from './styles';

export default function Delivery(props) {
    const actions = [
        {
            text: 'Visualizar',
            color: '#8E5BE8',
            icon: RemoveRedEye,
            action: data => handleOpen(data),
        },
        {
            text: 'Editar',
            color: '#4D85EE',
            icon: Create,
            action: data => {
                props.history.push('/register/delivery', data);
            },
        },
        {
            text: 'Excluir',
            color: '#DE3B3B',
            icon: Delete,
            action: data => handleDelete(data),
        },
    ];

    const dispatch = useDispatch();

    function handleDelete(data) {
        const confirmed = window.confirm(
            'Você está prestes a excluir uma encomenda. Deseja continuar?'
        );
        if (confirmed) {
            dispatch(deleteDeliveryRequest(data.id));
            loadDeliveries();
        }
    }

    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleOpen = data => {
        setOpen(true);
        setModalData(data);
    };

    const [deliveries, setDeliveries] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadDeliveries(query = '') {
        setLoading(true);
        try {
            const { data } = await api.get('delivery', {
                params: { page: 1, q: query },
            });

            const deliveries = [];

            data.forEach(delivery => {
                deliveries.push({
                    ...delivery,
                    city: delivery.recipient.city,
                    state: delivery.recipient.state,
                });
            });

            setDeliveries(deliveries);
            setLoading(false);
        } catch {
            toast.error('Falha ao trazer as informações das encomendas.');
            setLoading(false);
        }
    }

    useEffect(() => {
        loadDeliveries();
    }, []);

    return (
        <Container>
            <ContentHeader
                title="Gerenciando encomendas"
                placeholder="Buscar por encomendas"
                querySearch={loadDeliveries}
            >
                <div className="button-group">
                    <button
                        onClick={() => {
                            props.history.push('/register/delivery');
                        }}
                        className="primary"
                        type="button"
                    >
                        <Add />
                        Cadastrar
                    </button>
                </div>
            </ContentHeader>
            <Grid
                loading={loading}
                settings={gridSettings}
                data={deliveries}
                actions={actions}
            />
            <TransitionsModal
                open={open}
                data={modalData}
                handleClose={() => setOpen(false)}
            />
        </Container>
    );
}

const gridSettings = [
    {
        title: 'ID',
        key: 'id',
        widthProportion: 1,
    },
    {
        title: 'Destinatário',
        key: 'recipient',
        widthProportion: 2,
    },
    {
        title: 'Entregador',
        key: 'deliveryman',
        widthProportion: 2,
    },
    {
        title: 'Cidade',
        key: 'city',
        widthProportion: 2,
    },
    {
        title: 'Estado',
        key: 'state',
        widthProportion: 2,
    },
    {
        title: 'Status',
        key: 'status',
        widthProportion: 2,
    },
    {
        title: 'Ações',
        key: 'actions',
        widthProportion: 1,
    },
];
