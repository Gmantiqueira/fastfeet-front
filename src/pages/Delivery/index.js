import React, { useEffect, useState } from 'react';
import api from '@/services/api';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';
import TransitionsModal from '@/components/TransitionsModal';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { deleteDeliveryRequest } from '@/store/modules/delivery/actions';

import { Add, Create, Delete, RemoveRedEye } from '@material-ui/icons';
import { Dimmer, Loader } from 'semantic-ui-react';

import { Container } from './styles';

export default function Delivery(props) {
    const actions = [
        {
            text: 'Visualizar',
            icon: RemoveRedEye,
            action: data => handleOpen(data),
        },
        {
            text: 'Editar',
            icon: Create,
            action: data => {
                props.history.push('/register/delivery', data);
            },
        },
        {
            text: 'Excluir',
            icon: Delete,
            action: data => handleDelete(data),
        },
    ];

    const dispatch = useDispatch();

    function handleDelete(data) {
        const confirmed = window.confirm(
            'Você está prestes a excluir uma encomenda. Deseja continuar?'
        );
        if (confirmed == true) {
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
            <Dimmer active={loading} inverted>
                <Loader>Loading</Loader>
            </Dimmer>
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
            <Grid settings={gridSettings} data={deliveries} actions={actions} />
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
        widthProportion: 1.1,
    },
    {
        title: 'Destinatário',
        key: 'recipient',
        widthProportion: 1,
    },
    {
        title: 'Entregador',
        key: 'deliveryman',
        widthProportion: 1,
    },
    {
        title: 'Cidade',
        key: 'city',
        widthProportion: 1,
    },
    {
        title: 'Estado',
        key: 'state',
        widthProportion: 1,
    },
    {
        title: 'Status',
        key: 'status',
        widthProportion: 1,
    },
    {
        title: 'Ações',
        key: 'actions',
        widthProportion: 1.1,
    },
];
