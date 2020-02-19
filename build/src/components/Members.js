import React from "react";

const Members = (props) => {
    return (
        <div className="team-sheet">
            {props.team.map(member => {
                return (
                    <div key={member.id} className="players">
                        <h2>{member.name}</h2>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Members;