import React from 'react'

export const C = (props) => {
    const onClickFunc4 = () => {
        props.setInput(0)
        props.setOperator("0")
    }
    return(
        <button onClick={onClickFunc4}>C</button>
    )
}