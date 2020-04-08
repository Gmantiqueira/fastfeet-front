import React from 'react';
import PropTypes from 'prop-types';
import GridRow from '@/components/GridRow';
import { Wrapper, Column, Scroll } from './styles';
import { Dimmer, Loader } from 'semantic-ui-react';

export default function Grid({
    loading,
    settings,
    data,
    actions,
    actionsWidth,
}) {
    return loading ? (
        <Dimmer active={loading} inverted>
            <Loader>Loading</Loader>
        </Dimmer>
    ) : (
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
            <Scroll>
                {data.map(row => {
                    return (
                        <GridRow
                            key={row.id}
                            settings={settings}
                            data={row}
                            actions={actions}
                            actionsWidth={actionsWidth}
                        />
                    );
                })}
            </Scroll>
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
    actionsWidth: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Grid.defaultProps = {
    actions: false,
    actionsWidth: 0,
};
