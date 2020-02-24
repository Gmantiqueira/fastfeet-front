import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button, Menu, Option } from './styles';

export default function Actions({ actions }) {
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        setVisibility(visible);
    }, [visible]);

    const handleClickOutside = e => {
        const isClickInside = document
            .getElementById('menu-button')
            .contains(e.target);

        if (!isClickInside) {
            setVisibility(false);
        }
        document.removeEventListener('click', handleClickOutside);
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
            <Menu isVisible={visible}>
                {actions.map(option => {
                    return (
                        <Option key={option.text} onClick={option.action}>
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
    actions: PropTypes.arrayOf(PropTypes.shape()),
};

Actions.defaultProps = {
    actions: [],
};
