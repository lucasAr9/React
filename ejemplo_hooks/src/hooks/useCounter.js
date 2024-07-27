import { useState } from "react"

export const useCounter = (inicio = 0) => {

    const [ counter, setCounter ] = useState(inicio)

    const increment = () => {
        setCounter(inicio + 1)
    }

    const reset = () => {
        setCounter(inicio)
    }

    const decrement = () => {
        setCounter(inicio - 1)
    }

    return (
        counter,
        increment,
        reset,
        decrement
    )
}
