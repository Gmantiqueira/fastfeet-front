import React from 'react';

import Grid from '@/components/Grid';

import Add from '@/assets/add.svg';
import Search from '@/assets/search.svg';

import { Container } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <h1>Gerenciando encomendas</h1>
            <div className="actions">
                <div className="input-container">
                    <img src={Search} alt="Ícone de pesquisa" />
                    <input
                        placeholder="Buscar por encomendas"
                        name="search"
                        type="text"
                    />
                </div>
                <button type="button">
                    <img src={Add} alt="Ícone de adicionar" />
                    Cadastrar
                </button>
            </div>
            <Grid />
        </Container>
    );
}
