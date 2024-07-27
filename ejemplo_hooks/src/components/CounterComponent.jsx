import { useCounter } from "../hooks/useCounter"

export const FormsComponent = () => {

    const { counter, increment, reset, decrement } = useCounter(0)

    return (
        <>
            <h1>Counter: </h1>
            <h4>valor: {counter}</h4>
            <button className="boton" onClick={() => decrement()}>-1</button>
            <button className="boton" onClick={() => reset()}>reset</button>
            <button className="boton" onClick={() => increment()}>+1</button>
        </>
    )
}
