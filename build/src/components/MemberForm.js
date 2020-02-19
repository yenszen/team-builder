import React, {useState} from "react";

const MemberForm = (props) => {
    const [member, setMember] = useState({name: "", email: "", role: ""});

    const handleChange = event => {
        console.log("event", event.target.value);
        console.log("name", event.target.name);
        setMember({...member, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({name: "", email: "", role: ""});
    }

    return (
        <form onSubmit={submitForm}>
            <div className="member">
                <label htmlFor="name">Member</label>
                <input id="name" type="text" placeholder="your name" name="name" onChange={handleChange} value={member.name} />
            </div>

            <div className="email">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="your email" name="email" onChange={handleChange} value={member.email} />
            </div>

            <div className="role">
                <label htmlFor="role">Role</label>
                <input id="role" type="text" placeholder="your role" name="role" onChange={handleChange} value={member.role} />
            </div>

            <button type="submit">Add member</button>
        </form>
    );
}

export default MemberForm;