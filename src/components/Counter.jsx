
import React from 'react'

export default function Counter(){

    let [count,updataCount] = React.useState(0)

    function handelClickplus(){
            updataCount( count => count +1)
    }
    function handelClickminus(){
            updataCount( count => count -1)
    }

    return(
        <>
        <h1>How many time will be state saying</h1>
        <button onClick={handelClickplus}>+</button>
        <h2>{count}</h2>
        <button onClick={handelClickminus}>-</button>
        </>
    )
}