
import "./Login.css";

const Login = () => {
  return (
    <form className="auth-form">
      <h2>Login</h2>
      <div className="auth-form-inputs">

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" name="password" />

      </div>
      <button type="submit" className="form-btn">Login</button>
    </form>
  );
};

export default Login;
