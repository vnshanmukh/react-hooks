import React from "react";
import "../components/Card.css";

export default function Card() {
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    mail: "",
  });

  const [success, setSuccess] = React.useState(false);
  const [valid, setValid] = React.useState(false);

  const firstNameChange = (event) => {
    setValues({ ...values, firstname: event.target.value });
  };
  const lastNameChange = (event) => {
    setValues({ ...values, lastname: event.target.value });
  };
  const mailChange = (event) => {
    setValues({ ...values, mail: event.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (values.firstname && values.lastname && values.mail) {
      setValid(true);
    }
    setSuccess(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={submit}>
        {success && valid ? (
          <h1 className="success-message">Successfully details are saved!!</h1>
        ) : null}
        <input
          class="form-field"
          onChange={firstNameChange}
          value={values.firstname}
          placeholder="Fist Name"
          name="firstname"
        />
        {success && !values.firstname ? (
          <span>please enter first name</span>
        ) : null}
        <br />
        <input
          class="form-field"
          onChange={lastNameChange}
          value={values.lastname}
          placeholder="Last Name"
          name="lastname"
        />
        {success && !values.lastname ? (
          <span>please enter last name</span>
        ) : null}
        <br />
        <input
          class="form-field"
          onChange={mailChange}
          value={values.mail}
          placeholder="Mail"
          name="mail"
        />
        {success && !values.mail ? <span>please enter mail</span> : null}
        <br />
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
