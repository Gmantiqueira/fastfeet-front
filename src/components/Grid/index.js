import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import GridRow from '@/components/GridRow';
import { Wrapper, Column, Scroll } from './styles';
import { Dimmer, Loader } from 'semantic-ui-react';

export default function Grid({
    setPagination,
    loading,
    loadingPage,
    settings,
    data,
    actions,
    actionsWidth,
}) {
    const infiniteScroll = useRef();

    useEffect(() => {
        if (infiniteScroll.current) {
            infiniteScroll.current.addEventListener('scroll', async function() {
                if (
                    this.scrollTop + this.clientHeight >= this.scrollHeight &&
                    !loadingPage
                ) {
                    setPagination(old => old + 1);
                }
            });
        }
    }, []);

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
            {!data.length && (
                <h3 className="no-data">Não há dados cadastrados.</h3>
            )}
            <Scroll ref={infiniteScroll} loading={loading.toString()}>
                {loading ? (
                    <Dimmer active={loading} inverted>
                        <Loader size="large">Carregando dados...</Loader>
                    </Dimmer>
                ) : (
                    data.map(row => {
                        return (
                            <GridRow
                                key={row.id}
                                settings={settings}
                                data={row}
                                actions={actions}
                                actionsWidth={actionsWidth}
                            />
                        );
                    })
                )}
                {loadingPage && (
                    <div className="loader-wrapper">
                        <Loader active={true} size="large"></Loader>
                    </div>
                )}
            </Scroll>
        </Wrapper>
    );
}

Grid.propTypes = {
    loading: PropTypes.bool,
    settings: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            key: PropTypes.string,
        })
    ).isRequired,
    actions: PropTypes.arrayOf(PropTypes.object),
    actionsWidth: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleScroll: PropTypes.func,
};

Grid.defaultProps = {
    actions: false,
    actionsWidth: 0,
    handleScroll: () => {},
};
