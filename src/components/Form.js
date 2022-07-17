import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    const name=event.target.name;
    const value=event.target.value;
    setFormData({
      ...FormData,
      firstName:event,target,value
    });
  }

  function handleLastNameChange(event) {
    const name=event.target.name;
    const value=event.target.value;
    setFormData({
      ...FormData,
      lastName:event,target,value
    });
  }

  return (
    <form>
      <input type="text" 
      name="firstName"
      onChange={handleFirstNameChange} 
      value={FormData.firstName} />

      <input type="text" 
      name="lastName"
      onChange={handleLastNameChange} 
      value={FormData.lastName} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
