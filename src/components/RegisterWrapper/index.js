import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function RegisterWrapper({ children }) {
    return <Wrapper>{children}</Wrapper>;
}

RegisterWrapper.propTypes = {
    children: PropTypes.element.isRequired,
};
