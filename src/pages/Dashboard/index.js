import React from 'react';

import Grid from '@/components/Grid';

import AddIcon from '@/assets/add.svg';
import CreateIcon from '@/assets/create.svg';
import DeleteIcon from '@/assets/delete.svg';
import SearchIcon from '@/assets/search.svg';
import ViewIcon from '@/assets/visibility.svg';

import { Container } from './styles';

export default function Dashboard() {
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
            id: 0,
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
            action: () => console.log('Action de editar'),
        },
        {
            text: 'Excluir',
            icon: DeleteIcon,
            action: () => console.log('Action de excluir'),
        },
    ];

    return (
        <Container>
            <h1>Gerenciando encomendas</h1>
            <div className="topbar actions">
                <div className="input-container">
                    <img src={SearchIcon} alt="Ícone de pesquisa" />
                    <input
                        placeholder="Buscar por encomendas"
                        name="search"
                        type="text"
                    />
                </div>
                <button type="button">
                    <img src={AddIcon} alt="Ícone de adicionar" />
                    Cadastrar
                </button>
            </div>
            <Grid settings={gridSettings} data={data} actions={actions} />
        </Container>
    );
}
