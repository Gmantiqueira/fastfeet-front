import React from 'react';

import Grid from '@/components/Grid';

import { Container } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <h1>Gerenciando encomendas</h1>
            <div className="actions">
                <div className="input-container">
                    <i className="material-icons">search</i>
                    <input
                        placeholder="Buscar por encomendas"
                        name="search"
                        type="text"
                    />
                </div>
                <button type="button">
                    <i className="material-icons">add</i>
                    Cadastrar
                </button>
            </div>
            <Grid />
        </Container>
    );
}
