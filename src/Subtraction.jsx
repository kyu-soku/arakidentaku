import React from 'react'

export const Subtraction = (props) => {
    const onClickFunc5 = () => {
        props.setResult(props.result-props.input)
        props.setInput(0)
        props.setOperator("-")
    }
    
    return(
        <button onClick={onClickFunc5}>-</button>
    )
} 