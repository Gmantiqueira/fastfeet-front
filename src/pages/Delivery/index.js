import React from 'react';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';

import AddIcon from '@/assets/add.svg';
import CreateIcon from '@/assets/create.svg';
import DeleteIcon from '@/assets/delete.svg';
import SearchIcon from '@/assets/search.svg';
import ViewIcon from '@/assets/visibility.svg';

import { Container } from './styles';

export default function Delivery(props) {
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

    const data = [
        {
            id: 0,
            recipient: 'Ludwig van Beethoven',
            deliveryman: 'Gabriel Antiqueira',
            city: 'Bauru',
            state: 'São Paulo',
            status: 'Entregue',
        },
        {
            id: 1,
            recipient: 'Ludwig van Beethoven',
            deliveryman: 'Gabriel Antiqueira',
            city: 'Bauru',
            state: 'São Paulo',
            status: 'Cancelada',
        },
    ];

    const actions = [
        {
            text: 'Visualizar',
            icon: ViewIcon,
            action: () => console.log('Action de visualizar'),
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

    function handleRegisterLink() {
        props.history.push('/register/delivery');
    }

    return (
        <Container>
            <ContentHeader
                title="Gerenciando encomendas"
                placeholder="Buscar por encomendas"
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
            <Grid settings={gridSettings} data={data} actions={actions} />
        </Container>
    );
}
