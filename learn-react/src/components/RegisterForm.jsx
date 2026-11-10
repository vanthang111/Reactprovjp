
import { useState } from "react"
import "../css/RegisterForm.css"

function RegisterForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    function handleChange(e) {
        const { name, value } = e.target

        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        handleValidation()
    }

    function handleValidation() {
        const { name, email, password } = form
        setSuccess("")

        if (name.trim() === "") {
            setError("Name is required")
            return
        }

        if (email.trim() === "") {
            setError("Email is required")
            return
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters")
            return
        }

        setError("")
        setSuccess("Register successfully!")
        setForm({
            name: "",
            email: "",
            password: ""
        })
    }

    return (
        <div className="register-page">
            <div className="register-card">
                <div className="register-header">
                    <span className="register-tag">DAY 11 · REACT</span>
                    <h2>Register Form</h2>
                    <p>Practice 02 – Multiple Inputs</p>
                </div>

                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            autoComplete="name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            autoComplete="new-password"
                        />
                    </div>

                    <button type="submit" className="register-button">
                        Register
                    </button>

                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                </form>

                <div className="preview-card">
                    <div className="preview-header">
                        <span className="preview-dot"></span>
                        <h3>Live Preview</h3>
                    </div>

                    <div className="preview-item">
                        <span>Your name</span>
                        <strong>{form.name || "..."}</strong>
                    </div>

                    <div className="preview-item">
                        <span>Your email</span>
                        <strong>{form.email || "..."}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
