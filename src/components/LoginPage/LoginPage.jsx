      import { useState } from "react";
      import { useNavigate } from "react-router-dom";
      import { login } from "../../services/userService";
      import ErrorDiv from "../common/ErrorDiv/ErrorDiv";
      import "./LoginPage.css";

      const Login = () => {
        const [ emailErrorMessage, setEmailErrorMessage ] = useState('');
        const [ passwordErrorMessage, setPasswordErrorMessage ] = useState('');
        const [ errorMessage, setErrorMessage ] = useState("");

        const navigate = useNavigate();

        const onEmailHandler = (e) => {
          const email = e.target.value;

          setEmailErrorMessage("");
          setErrorMessage("");

          if (email.length < 6) {
            setEmailErrorMessage("Email is too short")
          }
          
          if (email.length < 1) {
            setEmailErrorMessage("Please insert email!");
          }
        }

        const onPasswordHandler = (e) => {
          const password = e.target.value;

          setPasswordErrorMessage("");
          setErrorMessage("");

          if (password.length < 6) {
            setPasswordErrorMessage("Password is too short")
          }

          if (password.length < 1) {
            setPasswordErrorMessage("Please insert password!");
          }
        }

        const onLoginHandler = (e) => {
          e.preventDefault();
          
          const [ email, password ] = e.target;

          if (emailErrorMessage < 1 && 
            passwordErrorMessage < 1 && 
            email.value != '' &&
            password.value != '') {
              login(email.value, password.value)
                .then(res => {
                  navigate("/");
                  console.log('Successfully logged in!');
                })
                .catch((error) => {
                  if(error.message == "Firebase: Error (auth/wrong-password).") {
                    setErrorMessage("Wrong password! Please try again!")
                  } else if(error.message == "Firebase: Error (auth/user-not-found)." ) {
                    setErrorMessage("Username not found!")
                  }
                });
            }    
        }

        return (
          <form className="auth-form" onSubmit={onLoginHandler}>
            <h2>Login</h2>
            <div className="auth-form-inputs">

              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" name="email" onChange={onEmailHandler}/>
              <ErrorDiv>{emailErrorMessage}</ErrorDiv>

              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" name="password" onChange={onPasswordHandler} />
              <ErrorDiv>{passwordErrorMessage}</ErrorDiv>

            </div>
            <button type="submit" className="form-btn">Login</button>
            <ErrorDiv>{errorMessage}</ErrorDiv>

          </form>
        );
      };

      export default Login;
