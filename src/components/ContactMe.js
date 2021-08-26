import emailjs from "emailjs-com";
import React, { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "fullName") {
      setFullName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    emailjs.sendForm(
      process.env.EMAILJS_ID,
      "template_6w2ybri",
      e.target
    ).then(() => {
      console.log('success');
    }).catch((error) => {
      console.log(error);
    });

    alert(
      JSON.stringify({
        fullName,
        email,
        message,
      })
    );

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFullName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center c-height">
      <form className="col-10 col-lg-6 h-50 second-bg m-3 p-4 rounded">
        <div className="col-12">
          <label htmlFor="fullName" className="fs-4 form-label quin-text mt-2">
            Name
          </label>
          <input
            value={fullName}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            placeholder="John Doe"
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="fs-4 form-label quin-text mt-2">
            Email
          </label>
          <input
            value={email}
            id="email"
            className="form-control"
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="email@email.com"
          />
        </div>
        <div className="col-12">
          <label htmlFor="message" className="fs-4 form-label quin-text mt-2">
            Message
          </label>
          <textarea
            value={message}
            className="form-control"
            onChange={handleInputChange}
            id="message"
            rows="3"
            placeholder="This is some text"
          ></textarea>
        </div>
        <button type="button" className="btn custom-btn my-2 second-text" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
