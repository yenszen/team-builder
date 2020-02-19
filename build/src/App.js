import React, {useState} from 'react';
import './App.css';
import Members from "./components/Members";
import MemberForm from "./components/MemberForm";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Yen Szen Yap",
      email: "yenszen@lambda.com",
      role: "Front End Developer"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMembers([...members, newMember]);
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members team={members} />   
    </div>
  );
}

export default App;
