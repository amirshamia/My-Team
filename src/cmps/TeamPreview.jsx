

export function TeamPreview({ member }) {

    return (
        <>
            <p> <img className="quotes" src="./src/assets/PP-images/icon-quotes.svg" alt="" /> {member.disc}</p>
            <div>{member.name}</div>
            <img src={member.avatar} alt="" />
        </>

    )
}