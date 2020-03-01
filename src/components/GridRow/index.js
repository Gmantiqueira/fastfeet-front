import React from 'react';
import PropTypes from 'prop-types';

import Actions from '@/components/Actions';

import { Wrapper, Column, Status } from './styles';

const Content = function Content({
    contentData,
    field,
    actions,
    actionsWidth,
}) {
    if (field === 'actions') {
        return actions ? (
            <Actions
                contentData={contentData}
                actions={actions}
                width={actionsWidth}
            />
        ) : (
            <span>N/A</span>
        );
    }
    if (field === 'status') {
        return (
            <Status type={contentData.status}>
                <span>{contentData.status}</span>
            </Status>
        );
    }
    if (field === 'id' || field === 'delivery_id') {
        return contentData[field] < 10 ? (
            <span>{`#0${contentData[field]}`}</span>
        ) : (
            <span>{`#${contentData[field]}`}</span>
        );
    }
    return <span>{contentData[field]}</span>;
};
export default function GridRow({ settings, data, actions, actionsWidth }) {
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
                            actionsWidth={actionsWidth}
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
    actionsWidth: PropTypes.number.isRequired,
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
    actionsWidth: PropTypes.number.isRequired,
};
