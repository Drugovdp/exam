import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {Button} from "./Button";
import {Count} from "./Count";
import {SelectMaxValue} from "./SelectMaxValue";

export const Main = () => {

    const [valueInput, setValueInput] = useState('')

    const [disInput, setDisInput] = useState(false)

    const [maxValue, setMaxValue] = useState(0)

    const [count, setCount] = useState(0)

    const onClickIncButton = () => {
        setCount(count + 1)
    }

    let incDisabled = count === maxValue
    let resetDisebled = count !== maxValue

    const onClickReset = () => {
        setCount(0)
        setMaxValue(0)
        setDisInput(false)
        setValueInput('')
    }

    return (
        <WrapperMain>
            <SelectMaxValue disInput={disInput}
                            valueInput={valueInput}
                            setDisInput={setDisInput}
                            setMaxValue={setMaxValue}
                            setValueInput={setValueInput}
            />
            <BlockCountButtons>
                <Count maxValue={maxValue} colorStyle={count}>{count}</Count>
                <WrapperButtons>
                    <Button callBack={onClickIncButton} disabledBtn={incDisabled}>inc</Button>
                    <Button callBack={onClickReset} disabledBtn={resetDisebled}>reset</Button>
                </WrapperButtons>
            </BlockCountButtons>
        </WrapperMain>
    )
}

const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  margin: 20px auto;
  align-items: center;
`

const BlockCountButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 20px;
`
const WrapperButtons = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`