import React, { useState, useEffect } from "react";
import axios from "axios";

const initialForm = {
  talkdesk_phone_number: "+14155786136",
  contact_phone_number: "",
  context: {
    fields: [
      {
        data_type: "text",
        display_name: "Customer Name",
        name: "customer_name",
        tooltip_text: "The name of the customer, as submitted in our website",
        value: "",
      },
      {
        data_type: "url",
        display_name: "Current page",
        name: "current_page",
        tooltip_text: "The last visited page of the customer on our website",
        value: "https://example.com/kb",
      },
    ],
  },
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
    setFormDetails({});
  };

  return (
    <div className="form-container">
      <h3>Answer a few questions and our team will contact you right away.*</h3>
      <p>*Guaranteed within 05 minutes.</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="form-input"
          type="text"
          name="value"
          onChange={handleChange}
        ></input>
        <label htmlFor="number" className="form-label">
          Phone Number
        </label>
        <input
          className="form-input"
          type="tel"
          name="contact_phone_number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange={handleChange}
        ></input>
        <button>Submit Request</button>
      </form>
    </div>
  );
}

export default LandingForm;
