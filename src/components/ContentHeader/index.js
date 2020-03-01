import React from 'react';
import PropTypes from 'prop-types';

import AddIcon from '@/assets/add.svg';
import SearchIcon from '@/assets/search.svg';

import { Wrapper } from './styles';

export default function ContentHeader({ title, placeholder, children }) {
    return (
        <Wrapper placeholder={placeholder}>
            <div className="topbar actions">
                <h1>{title}</h1>

                <div className="controls">
                    {!!placeholder.length && (
                        <div className="input-container">
                            <img src={SearchIcon} alt="Ícone de pesquisa" />
                            <input
                                placeholder={placeholder}
                                name="search"
                                type="text"
                            />
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </Wrapper>
    );
}

ContentHeader.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.oneOfType(PropTypes.string, PropTypes.bool),
    children: PropTypes.element.isRequired,
};

ContentHeader.defaultProps = {
    title: 'Título da página',
    placeholder: '',
};
