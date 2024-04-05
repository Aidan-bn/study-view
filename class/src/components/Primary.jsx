import { useState } from "react";
import Primarysubjects from "./primary/Primarysubjects";
import subjects from "./primary/subjects.js";

const Primary = () => {
  const [subject, setSubject] = useState('');
  
  // const handleClick = () => {
  //   const chujwa = subjects.filter((subjects) => {
  //     return  subjects.year < 2021 ;
  //   })
  //   chujwa.map((subjects) => {
  //     return (
  //       <>
  //         <li>
  //           {subjects.name}
  //         </li>
  //       </>
  //     )
  //   })
  // }

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
        <Primarysubjects 
          filtered={selectedSubject}
          subject={subjects}
        />
        </div>
      </div>
    </>
  );
}

export default Primary


/**
 * const DessertsList = (props) => {
    const lowCaloriesDesserts = props.data
      .filter((dessert) => {
        return dessert.calories < 500;
      })
      .sort((a, b) => { 
        return a.calories - b.calories; 
      })
      .map((dessert) => { 
        return ( 
          <li>
            {dessert.name} - {dessert.calories} cal 
          </li> 
        ); 
      }); 
    return <ul>{lowCaloriesDesserts}</ul>; 
   
   }
   export default DessertsList; 
 */
