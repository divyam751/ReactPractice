import React from "react";

const Forms = () => {
  return (
    <div>
      <h1>Form Data</h1>
      <form action=''>
        <label>
          Name : <input type='text' placeholder='Enter your name' />
        </label>
        <br />
        <select name='Country'>
          <option>--Select Country--</option>
          <option value='India'>INDIA</option>
          <option value='USA'>USA</option>
          <option value='America'>AMERICA</option>
          <option value='Canada'>CANADA</option>
          <option value='China'>CHINA</option>
        </select>
        <br />
        <label>Married</label>
        <label>
          <input type='radio' value='yes' /> Yes{" "}
        </label>
        <label>
          <input type='radio' value='no' /> No
        </label>
      </form>
    </div>
  );
};

export default Forms;
