import React from 'react';
import PropTypes from 'prop-types';
import generateAvatar from '@/services/ui-avatar';

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
        let type = 'pendente';
        if (contentData.start_date) {
            type = 'retirada';
        }
        if (contentData.signature) {
            type = 'entregue';
        }
        if (contentData.canceled_at) {
            type = 'cancelada';
        }
        return (
            <Status type={type}>
                <span>{type}</span>
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

    if (field === 'avatar') {
        return (
            <img
                className="width45"
                src={
                    contentData[field]
                        ? contentData[field].url
                        : generateAvatar(contentData.name)
                }
                alt="Avatar do usuário"
            />
        );
    }

    if (field === 'deliveryman') {
        return (
            <>
                <img
                    className="width35"
                    src={
                        contentData[field].avatar
                            ? contentData[field].avatar.url
                            : generateAvatar(contentData[field].name)
                    }
                    alt="Avatar do usuário"
                />
                <span>{contentData[field].name}</span>
            </>
        );
    }

    if (field === 'address') {
        const { street, number, city, state } = contentData;
        return (
            <span>
                {street}, {number}, {city} - {state}
            </span>
        );
    }

    if (
        contentData[field] &&
        typeof contentData[field] === 'object' &&
        contentData[field] !== null
    ) {
        return <span>{contentData[field].name}</span>;
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
