import React from 'react';
import PropTypes from 'prop-types';

import Actions from '@/components/Actions';

import { Wrapper, Column, Status } from './styles';

const Content = function Content({ contentData, field, actions }) {
    if (field === 'actions') {
        return actions ? <Actions actions={actions} /> : <span>N/A</span>;
    }
    if (field === 'status') {
        return (
            <Status type={contentData.status}>
                <span>{contentData.status}</span>
            </Status>
        );
    }
    return <span>{contentData[field]}</span>;
};
export default function GridRow({ settings, data, actions }) {
    return (
        <Wrapper>
            {settings.map(field => {
                return (
                    <Column
                        className={`title ${field.key}`}
                        width={field.widthProportion}
                        key={field.key}
                    >
                        <Content
                            contentData={data}
                            field={field.key}
                            actions={actions}
                        />
                    </Column>
                );
            })}
        </Wrapper>
    );
}

Content.propTypes = {
    contentData: PropTypes.shape().isRequired,
    field: PropTypes.string.isRequired,
    actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

GridRow.propTypes = {
    settings: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            key: PropTypes.string,
        })
    ).isRequired,
    data: PropTypes.shape().isRequired,
    actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
