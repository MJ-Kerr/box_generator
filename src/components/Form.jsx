import React, { useState } from 'react'

const Form = (props) => {
    // uses state to store the value of the input
    const [color, newColor] = useState("")
    // Form Submit colorChange
    const colorChange = (e) => {
        // prevents the page from refreshing
        e.preventDefault()
        // add the color to the state
        props.addBox(color)
        // set new color to empty string
        newColor("")
    }

    return (
        <fieldset>
            {/* <legend>Form.jsx</legend> */}
            {/* form that changes the state of an object */}
            <form onSubmit={colorChange}>
                <label>Color:</label>
                {/* This can be changed or added to then updated on app.js */}
                {/*????????????IS THIS POSSIBLE TO DO ON THIS PAGE??????????? */}
                <input onChange={(e) => newColor(e.target.value)} value={color} />
                <button>Add Box</button>
            </form>
        </fieldset>
    );
}

export default Form

