import React from 'react'
import {Num} from './Num'
import {Ac} from './Ac'
import {Plus} from './Plus'
import {Eq} from './Eq'
import {Display} from './Display'

const App =() => {
    return(
        <div>
            <Display/>
            <div>
                <Num num={1}/>
                <Num num={2}/>
                <Num num={3}/>
            </div>
            <div>
                <Num num={4}/>
                <Num num={5}/>
                <Num num={6}/>
            </div>
            <div>
                <Num num={7}/>
                <Num num={8}/>
                <Num num={9}/>
            </div>
            <div>
                <Num num={0}/>
                <Plus/>
                <Eq/>
            </div>
            <div>
                <Ac/>
            </div>
        </div>
    )
}

export default App