import React, { useEffect } from 'react'

const Lifecycle = (props) => {
    // componentDidMount
    useEffect(() => {
        console.log("componentDidMount: when component rendning...")
    })

    // componentDidUpdate
    useEffect(() => {
        console.log("componentDidUpdate: First phase while rendring...")
    }, [props.element])

    //copmonentWillUpdate
    useEffect(() => {
        return () => {
            console.log("componetWillUnmount: Removing....")
        }
    }, [props.element])
    return (
        <>
            <h2>Lifecycle Method Of React</h2>
            <h3>{props.element}</h3>
        </>
    )
}

export default Lifecycle