import React, { useState } from 'react';



const InterestsPage = () => {
    const [values, setValues] =  useState({
        coding: false,
        music: false,
        reads: false
    })
    const handleOnChange = evt => {
        console.log(evt.target.name);
        setValues({
            ...values,
            [evt.target.name] : evt.target.checked
        })
    }
    const all = values.reads && values.music && values.coding;
    const handleAllChanges = evt =>{
      setValues({
        coding: evt.target.checked,
        music: evt.target.checked,
        reads: evt.target.checked
      })
    }
//   const handleSubmit = (evt) => {
//       evt.preventDefault();
//       console.log();
//   }
  return (
    <div className="interests-page">
      <p>Choose the options</p>
      <form action="">
        <div>
          <input checked={all} onChange={handleAllChanges} type="checkbox" id="all" />
          <label htmlFor="all">All</label>
        </div>
        <div>
          <input name="coding" type="checkbox" checked={ values.coding } onChange={handleOnChange} id="coding" />
          <label htmlFor="coding">Coding</label>
        </div>
        <div>
          <input name="music" type="checkbox" checked={ values.music } onChange={handleOnChange} id="music" />
          <label htmlFor="music">Music</label>
        </div>
        <div>
          <input name="reads" type="checkbox" checked= {values.reads } onChange={handleOnChange} id="reads" />
          <label htmlFor="reads">Reading</label>
        </div>
      </form>
    </div>
  );
};
export default InterestsPage;
