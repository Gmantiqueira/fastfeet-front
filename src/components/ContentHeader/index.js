import React from 'react';
import PropTypes from 'prop-types';

import AddIcon from '@/assets/add.svg';
import SearchIcon from '@/assets/search.svg';

import { Wrapper } from './styles';

export default function ContentHeader({ title, placeholder, children }) {
    return (
        <Wrapper>
            <div className="topbar actions">
                <h1>{title}</h1>
                <div className="input-container">
                    <img src={SearchIcon} alt="Ícone de pesquisa" />
                    <input
                        placeholder={placeholder}
                        name="search"
                        type="text"
                    />
                </div>
                <div className="button-group">{children}</div>
            </div>
        </Wrapper>
    );
}

ContentHeader.propTypes = {
    title: PropTypes.element.isRequired,
    placeholder: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};
