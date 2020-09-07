import React from 'react'

export const Multiplication = (props) => {
    const onClickFunc6 = () => {
        if(props.result===0){
            //最初のインプットの数字をリザルトに代入
            props.setResult(props.input)
        }else{
        props.setResult(props.result*props.input)
        }
        props.setInput(0)
        props.setOperator("×")
    }
    return(
        <button onClick={onClickFunc6}>×</button>
    )
}