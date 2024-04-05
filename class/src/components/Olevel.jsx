import { useState } from "react";
import OlevelSubjects from "./olevel/OlevelSubjects";
import subjects from "../components/olevel/subjects";

const Olevel = () => {
  const [subject, setSubject] = useState('');
  
  const selectedSubject = (e) => {
    setSubject(e.target.value);
  }

  return (
    <>
      <div className="primary">
        <div className="div-primary">
         <h1>Hello Study View Primary Students</h1>
         <label>
          Searched subject { subject }
         </label>  
        <OlevelSubjects 
          filtered={selectedSubject}
          subject={subjects}
        />
        </div>
      </div>
    </>
  );
}

  
  export default Olevel