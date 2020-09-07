import React, {useState} from 'react'
import {Num} from './Num'
import {Ac} from './Ac'
import {Plus} from './Plus'
import {Eq} from './Eq'
import {Display} from './Display'
import {C} from './C'
import {Subtraction} from './Subtraction'

const App =() => {
    const [input, setInput] = useState(0)
    const [result, setResult] = useState(0)
    const [operator, setOperator] = useState("0")


    return(
        <div>
            <Display input={input} result={result}/>
            <div>
                <Num num={1} input={input} setInput={setInput} result={result} setOperator={setOperator}/>
                <Num num={2} input={input} setInput={setInput} result={result} setOperator={setOperator}/>
                <Num num={3} input={input} setInput={setInput} result={result} setOperator={setOperator}/>
            </div>
            <div>
                <Num num={4} input={input} setInput={setInput} result={result} setOperator={setOperator}/>
                <Num num={5} input={input} setInput={setInput} result={result} setOperator={setOperator}/>
                <Num num={6} input={input} setInput={setInput} result={result} setOperator={setOperator}/>
            </div>
            <div>
                <Num num={7} input={input} setInput={setInput} result={result} setOperator={setOperator}/>
                <Num num={8} input={input} setInput={setInput} result={result} setOperator={setOperator}/>
                <Num num={9} input={input} setInput={setInput} result={result} setOperator={setOperator}/>
                <Subtraction setResult={setResult} input={input} result={result} setInput={setInput} setOperator={setOperator}/>
            </div>
            <div>
                <Num num={0} input={input} setInput={setInput} setOperator={setOperator}/>
                <Plus input={input} result={result} setResult={setResult} setInput={setInput} setOperator={setOperator}/>
                <Eq operator={operator} setResult={setResult} result={result} input={input} setOperator={setOperator}/>
            </div>
            <div>
                <C setInput={setInput} setOperator={setOperator}/>
                <Ac arakida={setInput} setResult={setResult} setOperator={setOperator}/>
            </div>
        </div>
    )
}

export default App