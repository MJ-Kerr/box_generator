import React from 'react'

// this assigns the obj div
const Box = (props) => {
    // console.log(props)
    return (
        // returns style for the obj div
        <div style={{ backgroundColor: props.boxObj.color, width: "100px", height: "100px", display: "inline-block", margin: "5px" }}>
            {/* this is the actual return of the obj */}
            {props.boxObj.color}
        </div>
    )
}

export default Box 