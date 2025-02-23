import React from 'react'

function CustomButton({ name = "click me", className }) {
    return (
        <button className={className}>{name}</button>
    )
}

export default CustomButton