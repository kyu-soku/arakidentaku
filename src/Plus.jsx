import React from 'react'

export const Plus = (props) => {
    const onClickFunc2 = () => {
        props.setResult(props.result+props.input)
        props.setInput(0)
        props.setOperator("+")
    }

    return(
        <button onClick={onClickFunc2}>+</button>
        
    )
}