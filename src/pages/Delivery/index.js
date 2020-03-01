import React, { useEffect, useState } from 'react';
import api from '@/services/api';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';
import TransitionsModal from '@/components/TransitionsModal';

import AddIcon from '@/assets/add.svg';
import CreateIcon from '@/assets/create.svg';
import DeleteIcon from '@/assets/delete.svg';
import SearchIcon from '@/assets/search.svg';
import ViewIcon from '@/assets/visibility.svg';

import { Container } from './styles';

export default function Delivery(props) {
    const actions = [
        {
            text: 'Visualizar',
            icon: ViewIcon,
            action: data => handleOpen(data),
        },
        {
            text: 'Editar',
            icon: CreateIcon,
            action: data => {
                props.history.push('/register/delivery', data);
            },
        },
        {
            text: 'Excluir',
            icon: DeleteIcon,
            action: () => console.log('Action de excluir'),
        },
    ];

    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleOpen = data => {
        setOpen(true);
        console.log(data);
        setModalData(data);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [deliveries, setDeliveries] = useState([]);

    async function loadDeliveries() {
        const { data } = await api.get('delivery', {
            params: { page: 1 },
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
    }

    useEffect(() => {
        loadDeliveries();
    }, []);

    return (
        <Container>
            <ContentHeader
                title="Gerenciando encomendas"
                placeholder="Buscar por encomendas"
            >
                <div className="button-group">
                    <button
                        onClick={() => {
                            props.history.push('/register/delivery');
                        }}
                        className="primary"
                        type="button"
                    >
                        <img src={AddIcon} alt="Ícone de adicionar" />
                        Cadastrar
                    </button>
                </div>
            </ContentHeader>
            <Grid settings={gridSettings} data={deliveries} actions={actions} />
            <TransitionsModal
                open={open}
                data={modalData}
                handleClose={handleClose}
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
