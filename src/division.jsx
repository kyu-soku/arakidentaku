import React from 'react'

export const Division = (props) => {
    const onClickFunc7 = () => {
        if(props.input!==0 && props.result!==0){
        props.setResult(props.result/props.input)
        }else if(props.input!==0 && props.result===0){
            props.setResult(props.input)
        }
        props.setInput(0)
        props.setOperator("/")
    }

    return(
        <button onClick={onClickFunc7}>/</button>
    )
}