import React, { useState } from 'react'

const Controlled = () => {
    const [first, setfirst] = useState({ email: "", password: "" })

    const onChange = (e) => {
        const { name, value } = e.target
        setfirst({ ...first, [name]: value })
        console.log(first)
    }

    return (
        <>
            <h2>Controlled and Uncontrolled Component</h2>         
            <form action="submit" onClick={onclick}>
                <input type="text" name='email' value={first.email} onChange={onChange} /> <br />
                <input type="text" name='password' value={first.password} onChange={onChange} /> <br />
                <button className="btn btn-success" >Submit</button>
            </form>
        </>
    )
}

export default Controlled