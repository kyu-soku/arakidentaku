import React from 'react'

export const Ac = (props) => {
    const onClickFunc2 = () => {
        props.arakida(0)
    }
    return(
        <button onClick={onClickFunc2} style={{backgroundColor:"red"}}>AC</button>
    )
}