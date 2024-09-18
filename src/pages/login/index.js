import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import './login.css'
const Login = () => {
  return (
      <div className="main-page" >
      <div className="left">
        <img src={LoginBg} alt="Login" className="bg-image" />
      </div>
      <div className="right-login">
        <p className="title-login">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={20} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50}/>
        <Button title="Login" color={"white"} bgColor={"#229799"}/>
        <Gap height={20}/>
        <Link title="belum punya akun? silahkan daftar"/>
      </div>
    </div>
  )
}

export default Login
