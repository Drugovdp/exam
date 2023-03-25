import React from "react";
import styled from "styled-components";

type TypeCount = {
    children: React.ReactNode
    colorStyle: number
    maxValue: number
}

export const Count: React.FC<TypeCount> = (props) => {

    const {children, colorStyle, maxValue, ...otheProps} = props

    return (
        <WrapperCount max={maxValue} colorStyleCount={colorStyle}>{children}</WrapperCount>
    )
}

const WrapperCount = styled.div<{ colorStyleCount: number, max: number }>`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  border: #83a4ff 2px solid;
  font-size: 62px;
  font-weight: 500;
  color: ${props => props.colorStyleCount === 0 ? 'black' : props.colorStyleCount === props.max ? 'red' : 'black'};
`