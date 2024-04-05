import { useState } from "react";
import AlevelSubjects from "./alevel/AlevelSubjects";
import subjects from "../components/alevel/subjects";

const Alevel = () => {
  const [subject, setSubject] = useState('');
  
  const selectedSubject = (e) => {
    setSubject(e.target.value);
  }

  return (
    <>
      <div className="primary">
        <div className="div-primary">
         <h1>Hello Study View Advanced Students</h1>
         <label>
          Searched subject { subject }
         </label>  
        <AlevelSubjects 
          filtered={selectedSubject}
          subject={subjects}
        />
        </div>
      </div>
    </>
  );
}

  
  export default Alevel