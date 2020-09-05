import React from 'react'

export const Num = (props) => {
    const onClickFunc1 = () => {
        props.setInput(props.input*10+props.num)
    }
    return(
    <button onClick={onClickFunc1}>{props.num}</button>
    )
} 