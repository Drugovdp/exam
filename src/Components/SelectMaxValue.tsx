import React, {ChangeEvent, useState} from "react";
import {Button} from "./Button";
import {Input} from "./Input";
import styled from "styled-components";

type TypeInput = {
    disInput: boolean
    valueInput: string
    setMaxValue: (maxValue: number) => void
    setDisInput: (disInput: boolean) => void
    setValueInput: (valueInput: string) => void
}

export const SelectMaxValue: React.FC<TypeInput> = (props) => {

    const {setMaxValue, setDisInput, disInput, setValueInput, valueInput, ...otherProps} = props

    const [title, setTitle] = useState('Select maximum value')

    const onClickConfirmMaxValue = () => {
        if (valueInput === '0' || valueInput === '') {
            setTitle('Enter value')
        } else {
            setMaxValue(+valueInput)
            setDisInput(true)
        }
    }

    return (
        <WrapperMaxValue>
            <Input title={title} setTitle={setTitle} valueInput={valueInput} setValueInput={setValueInput}/>
            <Button callBack={onClickConfirmMaxValue} disabledBtn={disInput}>Сonfirm</Button>
        </WrapperMaxValue>
    )
}

const WrapperMaxValue = styled.div`
  display: flex;
  gap: 20px;
`