import React from 'react'

export const Eq = (props) => {
    const onClickFunc3 = () => {
        if(props.operator==="+"){
            props.setResult(props.result+props.input)

        }else if(props.operator==="-"){
            props.setResult(props.result-props.input)
        }
    }

    return(
        <button onClick={onClickFunc3}>=</button>
    )
}