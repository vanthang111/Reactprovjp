import UserInfo from "./UserInfo"
import Status from "./Status"

function GreetingCard({ name, role, message, active }) {
    return (
        <>
            <p>Hello, {name}!</p>
            <p>{message}</p>
            <UserInfo role={role} />
            <Status active={active}/>
        </>
    )
}

export default GreetingCard 