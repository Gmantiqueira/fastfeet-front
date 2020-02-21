import React from 'react';
import GridRow from '@/components/GridRow';
import { Wrapper } from './styles';

// import { Container } from './styles';

export default function Grid() {
    const gridColumns = [
        {
            title: 'ID',
            key: 'id',
        },
        {
            title: 'Destinatário',
            key: 'recipient',
        },
        {
            title: 'Entregador',
            key: 'deliveryman',
        },
        {
            title: 'Cidade',
            key: 'city',
        },
        {
            title: 'Estado',
            key: 'state',
        },
        {
            title: 'Status',
            key: 'status',
        },
        {
            title: 'Ações',
            key: 'actions',
        },
    ];

    const gridRows = [
        {
            id: 0,
            recipient: 'Ludwig van Beethoven',
            deliveryman: 'Gabriel Antiqueira',
            city: 'Bauru',
            state: 'São Paulo',
            status: 'Entregue',
            actions: true,
        },
        {
            id: 0,
            recipient: 'Ludwig van Beethoven',
            deliveryman: 'Gabriel Antiqueira',
            city: 'Bauru',
            state: 'São Paulo',
            status: 'Entregue',
            actions: true,
        },
    ];

    const fields = gridColumns.map(value => value.key);
    return (
        <Wrapper>
            <header>
                {gridColumns.map(value => {
                    return (
                        <div className={`title ${value.key}`} key={value.key}>
                            {value.title}
                        </div>
                    );
                })}
            </header>
            <main>
                {gridRows.map(data => {
                    return <GridRow fields={fields} data={data} />;
                })}
            </main>
        </Wrapper>
    );
}
