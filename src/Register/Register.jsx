import "./Register.css";

const Register = () => {
  return (
    <form className="auth-form">
      <h2>Register</h2>
      <div className="auth-form-inputs">

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" name="password" />

        <label htmlFor="repassword">Repeat Password</label>
        <input type="password" id="repassword" placeholder="Repeat Password" name="repassword" />

      </div>
      <button type="submit" className="form-btn">Register</button>
    </form>
  );
};

export default Register;