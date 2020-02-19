import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '@/assets/logo.svg'

import { Wrapper, Header } from './styles';

export default function DefaultLayout({ children }) {
    return (
    <Wrapper>
        <Header>
            <div class="logo">
                <Link to="/">
                    <img src={Logo} />
                </Link>
            </div>
            <div class="menu">
                <Link to="/delivery">Encomendas</Link>
                <Link to="/deliveryman">Entregadores</Link>
                <Link to="/recipient">Destinatários</Link>
                <Link to="/problems">Problemas</Link>
            </div>
            <div class="profile">
                <h4>Admin FastFeet</h4>
                <span>sair do sistema</span>
            </div>
        </Header>
        {children}
    </Wrapper>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
