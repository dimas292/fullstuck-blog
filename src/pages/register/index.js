import "./register.css";
import { RegsiterBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegsiterBg} alt="register" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={20}/>
        <Input label="Email" placeholder="Email" />
        <Gap height={20}/>
        <Input label="Password" placeholder="Password" />
        <Gap height={50}/>
        <Button title="Register" />
        <Gap height={20}/>
        <Link title="kembali ke login ?"/>
      </div>
    </div>
  );
};

export default Register;
