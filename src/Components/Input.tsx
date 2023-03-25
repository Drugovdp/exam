import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import * as v8 from "v8";

type TypeInput = {
    valueInput: string
    title: string
    setTitle: (title: string) => void
    setValueInput: (valueInput: string) => void
}

export const Input: React.FC<TypeInput> = (props) => {

    const {valueInput, setValueInput, title, setTitle, ...otherProps} = props

    const onChangeHandler = (value: string) => {
        if (value === '0') {
            setTitle('Enter value')
        } else {
            setValueInput(value)
            setTitle('Select maximum value')
        }
    }

    return (
        <WrapperLabel>
            {title}
            <input type="number" min="1" step="1"
                   value={valueInput}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e.currentTarget.value)}
            />
        </WrapperLabel>
    )
}

const WrapperLabel = styled.label`
  display: flex;
  gap: 20px;

  input {
    width: 80px;
  }
`

