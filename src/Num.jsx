import React from 'react'

export const Num = (props) => {
    const onClickFunc1 = () => {
        props.setInput(props.input*10+props.num)
        /*なぜ次の文をいれると+や-を押すと必ずif分の中身が動く？？
        if(props.input===0){
            props.setOperator("0")
        }*/
    }
    return(
    <button onClick={onClickFunc1}>{props.num}</button>
    )
} 