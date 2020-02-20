import React from 'react';

import { Wrapper } from './styles';

export default function Grid() {
    return (
        <Wrapper>
            <header>
                <div className="title">ID</div>
                <div className="title">Destinatário</div>
                <div className="title">Entregador</div>
                <div className="title">Cidade</div>
                <div className="title">Estado</div>
                <div className="title">Status</div>
                <div className="title">Ações</div>
            </header>
        </Wrapper>
    );
}
