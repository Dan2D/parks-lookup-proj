import React from 'react'

function ExpandBtn({inputId, labelId}) {
    return (
        <>
            <input type="checkbox" style={{display: "none"}} name={`btn-expand${inputId}`} id={`btn-expand${labelId}`} className={`btn-expand btn-expand${inputId}`} />
            <label htmlFor={`btn-expand${labelId}`} className={`btn-expand-label btn-expand-label${labelId}`}/>
        </>
    )
}

export default ExpandBtn
