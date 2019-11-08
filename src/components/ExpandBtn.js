import React from 'react'

function ExpandBtn({identifier}) {
    return (
        <>
            <input type="checkbox" style={{display: "none"}} name={`btn-expand${identifier}`} id={`btn-expand${identifier}`} className={`btn-expand btn-expand${identifier}`} />
            <label htmlFor={`btn-expand${identifier}`} className={`btn-expand-label btn-expand-label${identifier}`}/>
        </>
    )
}

export default ExpandBtn
