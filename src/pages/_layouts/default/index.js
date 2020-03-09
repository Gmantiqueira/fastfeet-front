import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { signOut } from '@/store/modules/auth/actions';

import Logo from '@/assets/logo.svg';

import { Wrapper, Header } from './styles';

import 'semantic-ui-css/semantic.min.css';

export default function DefaultLayout({ children }) {
    const dispatch = useDispatch();
    function handleSignOut() {
        dispatch(signOut());
    }
    return (
        <Wrapper>
            <Header>
                <div className="logo">
                    <NavLink to="/">
                        <img src={Logo} alt="Logo" />
                    </NavLink>
                </div>
                <div className="menu">
                    <NavLink to="/delivery" activeClassName="active">
                        Encomendas
                    </NavLink>
                    <NavLink to="/deliveryman" activeClassName="active">
                        Entregadores
                    </NavLink>
                    <NavLink to="/recipient" activeClassName="active">
                        Destinatários
                    </NavLink>
                    <NavLink to="/problems" activeClassName="active">
                        Problemas
                    </NavLink>
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
