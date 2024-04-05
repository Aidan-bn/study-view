const Primarysubjects = ({ filtered, subject }) => {

  return (
    <>
        <div className="primary">
        <select 
            className="input-search"
            onChange={filtered}
          >
            <option value='subject'> Subject </option>
            <option value='Mathematcs'> Mathematics </option>
            <option value='Science'> Science </option>
            <option value='Kiswahili'> Kiswahili </option>
            <option value='English'> English </option>
        </select>
        </div>
        <div className="reading-container">
          {
            subject.map((reading) => {
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

export default Primarysubjects
