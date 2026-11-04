import { useState } from "react"
import "../css/Counter.css"
import CounterStatus from "./CounterStatus"

function Counter() {
    const [count, setCount] = useState(0)


    function handleDecrease() {
        setCount(prevCount => prevCount - 1)
    }

    function handleReset() {
        setCount(0)
    }

    function handleIncrease() {
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
    }


    return (
        <div className="wrapper-content">
            <h2>Count: {count}</h2>
            <CounterStatus count={count} />
            <div className="wrapper-button">
                <button className="btn-decrease" disabled={count <= -5} onClick={handleDecrease}>
                    Decrease
                </button>
                <button className="btn-reset" onClick={handleReset}>
                    Reset
                </button>
                <button className="btn-increase" disabled={count + 3 > 10} onClick={handleIncrease}>
                    Increase
                </button>
            </div>
        </div>
    )
}

export default Counter