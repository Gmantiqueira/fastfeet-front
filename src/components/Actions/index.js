import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button, Menu, Option } from './styles';

export default function Actions({ contentData, actions, width }) {
    const [visible, setVisibility] = useState(0);

    useEffect(() => {
        setVisibility(visible);
    }, [visible]);

    const handleClickOutside = e => {
        if (document.querySelector(`#menu-button.menu-${contentData.id}`)) {
            const isClickInside = document
                .querySelector(`#menu-button.menu-${contentData.id}`)
                .contains(e.target);

            if (!isClickInside) {
                setVisibility(0);
            }
            document.removeEventListener('click', handleClickOutside);
        }
    };

    return (
        <Button
            id="menu-button"
            className={`menu-${contentData.id}`}
            onClick={() => {
                document.addEventListener('click', handleClickOutside);
                setVisibility(contentData.id);
                if (visible === contentData.id) {
                    setVisibility(0);
                }
            }}
        >
            <span>...</span>
            <Menu width={width} isVisible={visible === contentData.id}>
                {actions.map(option => {
                    return (
                        <Option
                            key={option.text}
                            onClick={() => option.action(contentData)}
                        >
                            <option.icon style={{ fill: option.color }} />
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
