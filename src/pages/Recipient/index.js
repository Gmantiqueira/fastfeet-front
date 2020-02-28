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

    const data = [
        {
            id: 0,
            name: 'Ludwig van Beethoven',
            address: 'Avenida Paulista',
        },
        {
            id: 1,
            name: 'Wolfgang Amadeus',
            address: 'Avenida Nações Unidas',
        },
    ];

    const actions = [
        {
            text: 'Editar',
            icon: CreateIcon,
            action: (data = 'teste edição') => console.log(data),
        },
        {
            text: 'Excluir',
            icon: DeleteIcon,
            action: (data = 'teste excluir') => console.log(data),
        },
    ];

    function handleRegisterLink() {
        props.history.push('/register/recipient');
    }

    return (
        <Container>
            <ContentHeader
                title="Gerenciando destinatários"
                placeholder="Buscar por destinatários"
            >
                <button type="button">
                    <img src={AddIcon} alt="Ícone de adicionar" />
                    Voltar
                </button>
                <button
                    onClick={handleRegisterLink}
                    className="primary"
                    type="button"
                >
                    <img src={AddIcon} alt="Ícone de adicionar" />
                    Cadastrar
                </button>
            </ContentHeader>
            <Grid settings={gridSettings} data={data} actions={actions} />
        </Container>
    );
}
