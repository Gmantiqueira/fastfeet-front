import React, { useEffect, useState } from 'react';
import api from '@/services/api';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { deleteRecipientRequest } from '@/store/modules/recipient/actions';

import { Add, Create, Delete } from '@material-ui/icons';
import { Dimmer, Loader } from 'semantic-ui-react';

import { Container } from './styles';

export default function Recipient(props) {
    const dispatch = useDispatch();

    function handleDelete(data) {
        const confirmed = window.confirm(
            'Você está prestes a excluir uma encomenda. Deseja continuar?'
        );
        if (confirmed == true) {
            dispatch(deleteRecipientRequest(data.id));
            loadRecipients();
        }
    }

    const [recipients, setRecipients] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadRecipients(query = '') {
        setLoading(true);
        try {
            const { data } = await api.get('recipient', {
                params: { page: 1, q: query },
            });

            const recipients = [];

            data.forEach(delivery => {
                recipients.push({
                    ...delivery,
                });
            });

            setRecipients(recipients);
            setLoading(false);
        } catch {
            toast.error('Falha ao trazer as informações dos destinatários.');
            setLoading(false);
        }
    }

    useEffect(() => {
        loadRecipients();
    }, []);

    const actions = [
        {
            text: 'Editar',
            icon: Create,
            action: data => {
                props.history.push('/register/recipient', data);
            },
        },
        {
            text: 'Excluir',
            icon: Delete,
            action: data => handleDelete(data),
        },
    ];

    function handleRegisterLink() {
        props.history.push('/register/recipient');
    }

    return (
        <Container>
            <Dimmer active={loading} inverted>
                <Loader>Loading</Loader>
            </Dimmer>
            <ContentHeader
                title="Gerenciando destinatários"
                placeholder="Buscar por destinatários"
                querySearch={loadRecipients}
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
            <Grid settings={gridSettings} data={recipients} actions={actions} />
        </Container>
    );
}

const gridSettings = [
    {
        title: 'ID',
        key: 'id',
        widthProportion: 1.5,
    },
    {
        title: 'Nome',
        key: 'name',
        widthProportion: 1,
    },
    {
        title: 'Endereço',
        key: 'address',
        widthProportion: 1,
    },
    {
        title: 'Ações',
        key: 'actions',
        widthProportion: 1.5,
    },
];
