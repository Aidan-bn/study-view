import { useState } from "react";
import subjectsList from "../alevel/subjects"

const AlevelSubjects = () => {
    const [filteredSubject, setFilteredSubject] = useState(subjectsList);

    const handleFilter = (e) => {
        const value = e.target.value;
        const filtered = subjectsList.filter(
            subjectsList => subjectsList.name.includes(value)
        );
        setFilteredSubject(filtered);
    }
    return (
      <>
          <div className="primary">
          <select 
              className="input-search"
              onChange={handleFilter}
            >
              <option value='subject'> Subject </option>
              <option value='Mathematics'> Mathematics </option>
              <option value='Science'> Science </option>
              <option value='Kiswahili'> Kiswahili </option>
              <option value='English'> English </option>
              <option value='Civic'> Civics </option>
          </select>
          </div>
          <div className="reading-container">
            {
              filteredSubject.map((reading) => {
                return (
                  <>
                      <div className="reading">
                        <p>{reading.name}</p>
                        <p>{reading.type}</p>
                        <p>{reading.year}</p>
                        <p>{reading.path}</p>
                      </div>
                  </>
                )
              })
            }
          </div>
          <div>
          </div>
      </>
    );
  }
  
  export default AlevelSubjects
  