import React, { useEffect, useState } from 'react';
import api from '@/services/api';

import { useDispatch } from 'react-redux';
import { deleteDeliverymanRequest } from '@/store/modules/deliveryman/actions';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';
import { toast } from 'react-toastify';

import { Add, Create, Delete } from '@material-ui/icons';

import { Container } from './styles';

export default function Deliveryman(props) {
    const dispatch = useDispatch();

    function handleDelete(data) {
        const confirmed = window.confirm(
            'Você está prestes a remover um entregador. Deseja continuar?'
        );
        if (confirmed) {
            const dispatched = dispatch(deleteDeliverymanRequest(data.id));
            if (dispatched) {
                loadDeliverymen();
            }
        }
    }

    const [deliverymen, setDeliverymen] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingPage, setLoadingPage] = useState(false);
    const [haveMoreData, setHaveMoreData] = useState(true);
    const [querySearch, setQuerySearch] = useState('');
    const [page, setPagination] = useState(1);

    async function loadDeliverymen(resetPagination) {
        if (page > 1) {
            setLoadingPage(true);
        } else {
            setLoading(true);
        }
        try {
            const { data } = await api.get('deliveryman', {
                params: { page, q: querySearch },
            });

            const deliverymenArr = [];

            data.forEach(delivery => {
                deliverymenArr.push({
                    ...delivery,
                });
            });

            if (deliverymenArr.length === 0) {
                setHaveMoreData(false);
            }

            setDeliverymen(
                resetPagination || page === 1
                    ? deliverymenArr
                    : oldElements => [...oldElements, ...deliverymenArr]
            );

            setLoading(false);
            setLoadingPage(false);
        } catch {
            toast.error('Falha ao trazer as informações dos entregadores.');
            setLoading(false);
            setLoadingPage(false);
        }
    }

    useEffect(() => {
        setPagination(1);
        loadDeliverymen(true);
    }, [querySearch]);

    useEffect(() => {
        setPagination(1);
        loadDeliverymen();
    }, []);

    useEffect(() => {
        if (haveMoreData) {
            loadDeliverymen();
        }
    }, [page]);

    const actions = [
        {
            text: 'Editar',
            color: '#4D85EE',
            icon: Create,
            action: data => {
                props.history.push('/register/deliveryman', data);
            },
        },
        {
            text: 'Excluir',
            color: '#DE3B3B',
            icon: Delete,
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
                querySearch={setQuerySearch}
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
                setPagination={setPagination}
                loading={loading}
                loadingPage={loadingPage}
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
        widthProportion: 1,
    },
    {
        title: 'Foto',
        key: 'avatar',
        widthProportion: 3,
    },
    {
        title: 'Nome',
        key: 'name',
        widthProportion: 3,
    },
    {
        title: 'Email',
        key: 'email',
        widthProportion: 3,
    },
    {
        title: 'Ações',
        key: 'actions',
        widthProportion: 1,
    },
];
