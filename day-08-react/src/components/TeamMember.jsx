import Status from "./Status"

function TeamMember({ name, role, experience, active }) {
    return (
        <>
            <p>Name: {name}</p>
            <p>Role: {role}</p>
            <p>Experience: {experience} years</p>
            <Status active={active}/>
        </>
    )
}

export default TeamMember