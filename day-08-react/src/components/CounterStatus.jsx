function CounterStatus({ count }) {
    return (
        <p>{count > 0 ? "Positive" : count < 0 ? "Negative" : "Zero"}</p>
    )
}

export default CounterStatus