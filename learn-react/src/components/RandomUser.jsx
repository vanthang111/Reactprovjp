import { useState, useEffect, useRef } from "react"
import "../css/RandomUser.css"

function RandomUser() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const controllerRef = useRef(null)

    async function getUser() {
        if (controllerRef.current) {
            controllerRef.current.abort()
        }

        const controller = new AbortController();
        controllerRef.current = controller

        try {
            setLoading(true)
            setError(null)
            const response = await fetch("https://randomuser.me/api/", {
                signal: controller.signal
            })

            if (!response.ok) {
                throw new Error("Failed to fetch user")
            }
            const data = await response.json()

            if (
                controllerRef.current === controller &&
                !controller.signal.aborted
            ) {
                setUser(data.results[0])
            }
        } catch (error) {
            if (
                error.name !== "AbortError" &&
                controllerRef.current === controller &&
                !controller.signal.aborted
            ) {
                setError(error.message)
            }
        } finally {
            if (
                controllerRef.current === controller &&
                !controller.signal.aborted
            ) {
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        getUser()

        return () => {
            controllerRef.current?.abort()
        }
    }, [])

    return (
        <>
            <div className="wrapper-content">
                <h2>Random User App</h2>

                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {!loading && !error && user && (
                    <div>
                        <p>{user.name.first} {user.name.last}</p>
                        <p>{user.email}</p>
                        <p>{user.location.country}</p>
                        <img src={user.picture.large} alt="User avatar" />
                    </div>
                )}

                <button className="btn-generate" disabled={loading} onClick={getUser}>
                    Generate New User
                </button>
            </div>
        </>

    )
}

export default RandomUser