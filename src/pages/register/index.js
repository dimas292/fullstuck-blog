import "./register.css";
import { RegsiterBg } from "../../assets";
import { Input } from "../../components";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegsiterBg} alt="register" className="bg-image" />
      </div>
      <div className="right">
        <p className="label">Register</p>
        <Input label="username" type="text" />
        <Input label="email" type="email" />
        <Input label="password" type="password" />
      </div>
    </div>
  );
};

export default Register;
