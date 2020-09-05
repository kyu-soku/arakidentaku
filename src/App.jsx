import React, {useState} from 'react'
import {Num} from './Num'
import {Ac} from './Ac'
import {Plus} from './Plus'
import {Eq} from './Eq'
import {Display} from './Display'

const App =() => {
    const [input, setInput] = useState(0)
    const [result, setResult] = useState(0)


    return(
        <div>
            <Display input={input}/>
            <div>
                <Num num={1} input={input} setInput={setInput} result={result}/>
                <Num num={2} input={input} setInput={setInput} result={result}/>
                <Num num={3} input={input} setInput={setInput} result={result}/>
            </div>
            <div>
                <Num num={4} input={input} setInput={setInput} result={result}/>
                <Num num={5} input={input} setInput={setInput} result={result}/>
                <Num num={6} input={input} setInput={setInput} result={result}/>
            </div>
            <div>
                <Num num={7} input={input} setInput={setInput} result={result}/>
                <Num num={8} input={input} setInput={setInput} result={result}/>
                <Num num={9} input={input} setInput={setInput} result={result}/>
            </div>
            <div>
                <Num num={0} input={input} setInput={setInput}/>
                <Plus input={input} setinput={setInput} setResult={setResult}/>
                <Eq/>
            </div>
            <div>
                <Ac arakida={setInput}/>
            </div>
        </div>
    )
}

export default App