function Status({ active }) {
    return (
        <p>Status: {active === true ? "Active" : "Inactive"}</p>
    )
}

export default Status