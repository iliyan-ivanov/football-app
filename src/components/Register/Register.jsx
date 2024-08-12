import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/userService";
import ErrorDiv from "../common/ErrorDiv/ErrorDiv";
import "./Register.css";

const Register = () => {
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [rePasswordErrorMessage, setRePasswordErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onEmailHandler = (e) => {
    const email = e.target.value;

    setEmailErrorMessage("");
    setErrorMessage("");

    if (!email.includes("@")) {
      setEmailErrorMessage("Invalid email - @ missing!");
    }

    if (email.length < 6) {
      setEmailErrorMessage("Invalid email!");
    }

    if (email.length < 1) {
      setEmailErrorMessage("Please insert email!");
    }
  };

  const onPasswordHandler = (e) => {
    const password = e.target.value;

    setPasswordErrorMessage("");
    setErrorMessage("");

    if (password.length < 6) {
      setPasswordErrorMessage("Password must be at least 6 characters long!");
    }

    if (password.length < 1) {
      setPasswordErrorMessage("Please insert password!");
    }
  };

  const onRepeatPasswordHandler = (e) => {
    const rePassword = e.target.value;

    setRePasswordErrorMessage("");
    setErrorMessage("");

    if (rePassword.length < 6) {
      setRePasswordErrorMessage("Password must be at least 6 characters long!");
    }

    if (rePassword.length < 1) {
      setRePasswordErrorMessage("Please insert password!");
    }
  };

  const onRegisterHandler = (e) => {
    e.preventDefault();
    const { email, password, rePassword } = e.target;

    if (password.value !== rePassword.value) {
      setErrorMessage("Password do not match!");
      return;
    }

    if (
      emailErrorMessage < 1 &&
      passwordErrorMessage < 1 &&
      rePasswordErrorMessage < 1
    ) {
      setErrorMessage("");

      if (
        emailErrorMessage < 1 &&
        passwordErrorMessage < 1 &&
        rePasswordErrorMessage < 1 &&
        email.value != "" &&
        password.value != "" &&
        rePassword.value != ""
      ) {
        register(email.value, password.value)
          .then((res) => {
            navigate("/");
          })
          .catch((err) => {
            console.log("Something is wrong");
            console.log(err);
            setErrorMessage(err);
          });
      }
    }
  };

  return (
    <section className="register-section">
      <form className="auth-form" onSubmit={onRegisterHandler}>
        <h2>Register</h2>
        <div className="auth-form-inputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={onEmailHandler}
          />
          <ErrorDiv>{emailErrorMessage}</ErrorDiv>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            onChange={onPasswordHandler}
          />
          <ErrorDiv>{passwordErrorMessage}</ErrorDiv>

          <label htmlFor="repassword">Repeat Password</label>
          <input
            type="password"
            id="rePassword"
            placeholder="Repeat Password"
            name="rePassword"
            onChange={onRepeatPasswordHandler}
          />
          <ErrorDiv>{rePasswordErrorMessage}</ErrorDiv>
        </div>
        <button type="submit" className="form-btn">
          Register
        </button>
        <ErrorDiv>{errorMessage}</ErrorDiv>
      </form>
    </section>
  );
};

export default Register;
