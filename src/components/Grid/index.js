import React from 'react';
import PropTypes from 'prop-types';
import GridRow from '@/components/GridRow';
import { Wrapper, Column } from './styles';

// import { Container } from './styles';

export default function Grid({ settings, data, actions }) {
    return (
        <Wrapper>
            <header>
                {settings.map(value => {
                    return (
                        <Column
                            className={`title ${value.key}`}
                            key={value.key}
                            width={value.widthProportion}
                        >
                            {value.title}
                        </Column>
                    );
                })}
            </header>
            {data.map(row => {
                return (
                    <GridRow settings={settings} data={row} actions={actions} />
                );
            })}
        </Wrapper>
    );
}

Grid.propTypes = {
    settings: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            key: PropTypes.string,
        })
    ).isRequired,
    actions: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Grid.defaultProps = {
    actions: false,
};
