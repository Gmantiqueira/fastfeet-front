import React, { useEffect, useState } from 'react';
import api from '@/services/api';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { deleteRecipientRequest } from '@/store/modules/recipient/actions';

import { Add, Create, Delete } from '@material-ui/icons';

import { Container } from './styles';

export default function Recipient(props) {
    const actions = [
        {
            text: 'Editar',
            color: '#4D85EE',
            icon: Create,
            action: data => {
                props.history.push('/register/recipient', data);
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
            'Você está prestes a remover um destinatário. Deseja continuar?'
        );
        if (confirmed) {
            const dispatched = dispatch(deleteRecipientRequest(data.id));
            if (dispatched) {
                loadRecipients();
            }
        }
    }

    const [recipients, setRecipients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingPage, setLoadingPage] = useState(false);
    const [haveMoreData, setHaveMoreData] = useState(true);
    const [querySearch, setQuerySearch] = useState('');
    const [page, setPagination] = useState(1);

    async function loadRecipients(resetPagination) {
        if (page > 1) {
            setLoadingPage(true);
        } else {
            setLoading(true);
        }
        try {
            const { data } = await api.get('recipient', {
                params: { page, q: querySearch },
            });

            setRecipients(
                resetPagination || page === 1
                    ? data
                    : oldElements => [...oldElements, ...data]
            );

            if (data.length === 0) {
                setHaveMoreData(false);
            }

            setLoading(false);
            setLoadingPage(false);
        } catch {
            toast.error('Falha ao trazer as informações dos destinatários.');
            setLoading(false);
            setLoadingPage(false);
        }
    }

    useEffect(() => {
        setPagination(1);
        loadRecipients(true);
    }, [querySearch]);

    useEffect(() => {
        setPagination(1);
        loadRecipients();
    }, []);

    useEffect(() => {
        if (haveMoreData) {
            loadRecipients();
        }
    }, [page]);

    function handleRegisterLink() {
        props.history.push('/register/recipient');
    }

    return (
        <Container>
            <ContentHeader
                title="Gerenciando destinatários"
                placeholder="Buscar por destinatários"
                querySearch={setQuerySearch}
            >
                <div className="button-group">
                    <button
                        onClick={handleRegisterLink}
                        className="primary"
                        type="button"
                    >
                        <Add />
                        Cadastrar
                    </button>
                </div>
            </ContentHeader>
            <Grid
                setPagination={setPagination}
                loading={loading}
                loadingPage={loadingPage}
                settings={gridSettings}
                data={recipients}
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
        title: 'Nome',
        key: 'name',
        widthProportion: 5,
    },
    {
        title: 'Endereço',
        key: 'address',
        widthProportion: 10,
    },
    {
        title: 'Ações',
        key: 'actions',
        widthProportion: 1,
    },
];
