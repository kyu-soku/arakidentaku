import React from 'react'

const App =() => {

    const tekitounakannsuu = () => {
        alert('kimonkimon')
    }

    return(
        <div>
        <p>
            arakidakimonkimon
        </p>
        <button onClick={tekitounakannsuu}>
            kimon
        </button>
        </div>
    )
}

export default App