import React, { useState, useRef, useEffect } from 'react';

import { useField } from '@rocketseat/unform';

import AsyncSelect from 'react-select/async';

export default function UnformSelect({
    name,
    label,
    loadOptions,
    placeholder,
}) {
    const ref = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: ref.current,
            path: 'props.selected',
            clearValue: pickerRef => {
                pickerRef.clear();
            },
        });
    }, [fieldName, registerField]);

    const selectStyles = {
        control: styles => ({
            ...styles,
            height: '45px;',
            minHeight: 'fit-content',
        }),
    };

    return (
        <>
            {!!label && <label htmlFor="react-select">{label}</label>}
            <AsyncSelect
                id="react-select"
                cacheOptions
                loadOptions={loadOptions}
                placeholder={placeholder}
                styles={selectStyles}
                name={fieldName}
                selected={selectedOption}
                defaultOptions
                onChange={option => {
                    setSelectedOption(option);
                }}
                ref={ref}
                defaultValue={defaultValue}
            />
            {error && <span>{error}</span>}
        </>
    );
}
