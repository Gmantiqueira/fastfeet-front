import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button, Menu, Option } from './styles';

export default function Actions({ contentData, actions, width }) {
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        setVisibility(visible);
    }, [visible]);

    const handleClickOutside = e => {
        if (document.getElementById('menu-button')) {
            const isClickInside = document
                .getElementById('menu-button')
                .contains(e.target);

            if (!isClickInside) {
                setVisibility(false);
            }
            document.removeEventListener('click', handleClickOutside);
        }
    };

    return (
        <Button
            id="menu-button"
            onClick={() => {
                document.addEventListener('click', handleClickOutside);
                setVisibility(!visible);
            }}
        >
            <span>...</span>
            <Menu width={width} isVisible={visible}>
                {actions.map(option => {
                    return (
                        <Option
                            key={option.text}
                            onClick={() => option.action(contentData)}
                        >
                            <img src={option.icon} alt={option.text} />
                            {option.text}
                        </Option>
                    );
                })}
            </Menu>
        </Button>
    );
}

Actions.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    width: PropTypes.number.isRequired,
};
