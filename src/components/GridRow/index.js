import React from 'react';

import { Wrapper } from './styles';

export default function GridRow({ fields, data }) {
    return (
        <Wrapper>
            {fields.map(field => {
                return (
                    <div className={`title ${field}`} key={field}>
                        {data[field]}
                    </div>
                );
            })}
        </Wrapper>
    );
}
