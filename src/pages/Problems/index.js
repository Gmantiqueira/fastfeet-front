import React from 'react';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';

import AddIcon from '@/assets/add.svg';
import CreateIcon from '@/assets/create.svg';
import DeleteIcon from '@/assets/delete.svg';
import SearchIcon from '@/assets/search.svg';
import ViewIcon from '@/assets/visibility.svg';

import { Container } from './styles';

export default function Problems(props) {
    const gridSettings = [
        {
            title: 'Encomenda',
            key: 'delivery_id',
            widthProportion: 2.5,
        },
        {
            title: 'Problema',
            key: 'description',
            widthProportion: 1,
        },
        {
            title: 'Ações',
            key: 'actions',
            widthProportion: 3,
        },
    ];

    const data = [
        {
            delivery_id: 0,
            description: 'Carga roubada.',
        },
        {
            delivery_id: 1,
            description: 'Destinatário ausente ou não mora mais no local.',
        },
    ];

    const actions = [
        {
            text: 'Visualizar',
            icon: ViewIcon,
            action: (data = 'teste visualizar') => console.log(data),
        },
        {
            text: 'Cancelar encomenda',
            icon: DeleteIcon,
            action: (data = 'teste excluir') => console.log(data),
        },
    ];

    function handleRegisterLink() {
        props.history.push('/register/problems');
    }

    return (
        <Container>
            <ContentHeader title="Problemas na entrega"></ContentHeader>
            <Grid
                settings={gridSettings}
                data={data}
                actions={actions}
                actionsWidth={200}
            />
        </Container>
    );
}
