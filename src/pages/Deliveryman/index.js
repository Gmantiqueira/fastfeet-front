import React from 'react';

import Grid from '@/components/Grid';
import ContentHeader from '@/components/ContentHeader';

import AddIcon from '@/assets/add.svg';
import CreateIcon from '@/assets/create.svg';
import DeleteIcon from '@/assets/delete.svg';
import SearchIcon from '@/assets/search.svg';
import ViewIcon from '@/assets/visibility.svg';

import { Container } from './styles';

export default function Deliveryman(props) {
    const gridSettings = [
        {
            title: 'ID',
            key: 'id',
            widthProportion: 1.3,
        },
        {
            title: 'Foto',
            key: 'avatar',
            widthProportion: 1,
        },
        {
            title: 'Nome',
            key: 'name',
            widthProportion: 1,
        },
        {
            title: 'Email',
            key: 'email',
            widthProportion: 1,
        },
        {
            title: 'Ações',
            key: 'actions',
            widthProportion: 1.3,
        },
    ];

    const data = [
        {
            id: 0,
            avatar: 'temporário',
            name: 'Ludwig van Beethoven',
            email: 'beethoven@gmail.com',
        },
        {
            id: 1,
            avatar: 'temporário',
            name: 'Gabriel Antiqueira',
            email: 'gmantiqueira@gmail.com',
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
        props.history.push('/register/deliveryman');
    }

    return (
        <Container>
            <ContentHeader
                title="Gerenciando entregadores"
                placeholder="Buscar por entregadores"
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
