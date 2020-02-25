import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { signOut } from '@/store/modules/auth/actions';

import Logo from '@/assets/logo.svg';

import { Wrapper, Header } from './styles';

export default function DefaultLayout({ children }) {
    const dispatch = useDispatch();
    function handleSignOut() {
        dispatch(signOut());
    }
    return (
        <Wrapper>
            <Header>
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="menu">
                    <Link to="/delivery">Encomendas</Link>
                    <Link to="/deliveryman">Entregadores</Link>
                    <Link to="/recipient">Destinatários</Link>
                    <Link to="/problems">Problemas</Link>
                </div>

                <button
                    type="button"
                    onClick={handleSignOut}
                    className="profile"
                >
                    <h4>Admin FastFeet</h4>
                    <p>sair do sistema</p>
                </button>
            </Header>
            {children}
        </Wrapper>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
