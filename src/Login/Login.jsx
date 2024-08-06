import "./Login.css";

const Login = () => {
  return (
    <form className="login-form">
      <h2>Login</h2>
      <div className="login-form-inputs">

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" name="password" />

      </div>
      <button type="submit" className="auth-btn">Login</button>
    </form>
  );
};

export default Login;
