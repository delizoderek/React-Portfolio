import React from "react";
import emailjs from "emailjs-com";
import { validateEmail } from "../../utils/helpers";

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", name: "", email: "", errorMessage: "" };
  }
  // saves the user's name entered to state
  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  // saves the user's email entered to state
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  // saves the user's message entered to state
  messageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  setErrorMessage = (msg) => {
    this.setState({ errorMessage: msg });
  };

  //onSubmit of email form
  handleSubmit = (event) => {
    event.preventDefault();

    //This templateId is created in EmailJS.com
    const templateId = "template_6w2ybri";

    if (!validateEmail(this.state.email)) {
      alert("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    this.handleEmail(templateId, {
      from_name: this.state.name,
      message: this.state.message,
      reply_to: this.state.email,
    });

    this.setState({
      message: "",
      name: "",
      email: "",
      errorMessage: "",
    });
  };

  //Custom EmailJS method
  handleEmail = (templateId, variables) => {
    emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("success");
      })
      // Email Failed to send Error alert
      .catch((err) => {
        console.error("Email Error:", err);
      });
  };

  render() {
    return (
      //Form layout that requires a Name, Email, and message
      <div className="d-flex justify-content-center align-items-center c-height">
        {this.errorMessage && (
          <div>
            <p className="error-text">{this.errorMessage}</p>
          </div>
        )}
        <form
          className="col-10 col-lg-6 h-50 second-bg m-3 p-4 rounded"
          onSubmit={this.handleSubmit}
        >
          <div style={{ fontSize: "1.2rem" }}>
            <div className="col-12">
              <label htmlFor="name" className="fs-4 form-label quin-text mt-2">
                Name
              </label>
              <input
                className="form-control email-inputs"
                name="user_name"
                type="text"
                id="name"
                value={this.state.name}
                placeholder="Ex. John Doe"
                onChange={this.nameChange}
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="email" className="fs-4 form-label quin-text mt-3">
                Email
              </label>
              <input
                className="form-control email-inputs"
                name="user_email"
                type="text"
                id="email"
                value={this.state.email}
                placeholder="email@email.com"
                onChange={this.emailChange}
                required
              />
            </div>
            <div className="col-12">
              <label
                htmlFor="message"
                className="fs-4 form-label quin-text mt-3"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={this.messageChange}
                value={this.state.message}
                placeholder="Put your message here"
                required
                className="email-text-area form-control"
                rows="6"
                cols="15"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn custom-btn my-4 second-text"
          />
        </form>
      </div>
    );
  }
}

export default ContactMe;
