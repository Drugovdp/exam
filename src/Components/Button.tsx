import React from "react";
import styled from "styled-components";

type PropsButtonType = {
    children: React.ReactNode
    disabledBtn?: boolean
    callBack: () => void
}

export const Button: React.FC<PropsButtonType> = (props) => {

    const {children, disabledBtn, callBack} = props

    const onClickHandler = () => {
        callBack()
    }

    return (
        <WrapperButton disabled={disabledBtn} onClick={onClickHandler}>{children}</WrapperButton>
    )
}

const WrapperButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: #ffffff;
  border: #83a4ff 2px solid;
  font-size: 16px;
  color: #181818;
  opacity: ${props => props.disabled ? 0.5 : 1};
`