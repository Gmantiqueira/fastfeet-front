import React from 'react';
import PropTypes from 'prop-types';

import { Search } from '@material-ui/icons';

import { Wrapper } from './styles';

export default function ContentHeader({
    title,
    placeholder,
    querySearch,
    children,
}) {
    return (
        <Wrapper placeholder={placeholder}>
            <div className="topbar actions">
                <h1>{title}</h1>

                <div className="controls">
                    {!!placeholder.length && (
                        <div className="input-container">
                            <Search />
                            <input
                                placeholder={placeholder}
                                name="search"
                                type="text"
                                onKeyUp={e =>
                                    querySearch(
                                        e.currentTarget.value.toLowerCase()
                                    )
                                }
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
    placeholder: PropTypes.string,
    children: PropTypes.element,
};

ContentHeader.defaultProps = {
    title: 'Título da página',
    placeholder: '',
    children: <div />,
};
