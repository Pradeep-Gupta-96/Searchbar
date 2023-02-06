import React, { useState } from 'react'
import Lifecycle from './Lifecycle'

const Update = () => {
    const [first, setfirst] = useState(0)

    return (
        <>
            <Lifecycle element={first} />
            <button className="btn btn-outline-success" onClick={() => { setfirst(first + 1) }}>Increment</button>
            <button className="btn btn-outline-primary" onClick={() => { setfirst(first - 1) }}>decrement</button>
            <button className="btn btn-outline-warning" onClick={() => { setfirst(0) }}>reset</button>
        </>
    )
}

export default Update