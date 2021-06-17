import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialForm = {
  talkdesk_phone_number: "+14155786136",
  contact_phone_number: "",
};

function LandingForm() {
  const [formDetails, setFormDetails] = useState(initialForm);

  const handleChange = (e) => {
    //* only the first value for name and contact phone number need to be updated here.
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
    console.log("form details", formDetails);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/calls/callback", formDetails)
      .then((res) => {
        console.log("callback post", res);
      })
      .catch((err) => {
        console.log("callback post err", err);
      });
  };

  return (
    <div className="form-container">
      <h3>Answer a few questions and our team will contact you right away.*</h3>
      <p>*Guaranteed within 1 minute.</p>
      <form onSubmit={onSubmit}>
        {/* <label htmlFor="name">Name</label>
        <input
          className="form-input"
          type="text"
          name="value"
          onChange={handleChange}
        ></input> */}
        <label htmlFor="number" className="form-label">
          Phone Number
        </label>
        <input
          className="form-input"
          type="tel"
          name="contact_phone_number"
          onChange={handleChange}
        ></input>
        <button>Submit Request</button>
      </form>
    </div>
  );
}

export default LandingForm;
