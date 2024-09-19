import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import './login.css'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
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
        <Button title="Login" color={"white"} bgColor={"#229799"} onClick={() => navigate('/')}/>
        <Gap height={20}/>
        <Link title="belum punya akun? silahkan daftar" onclick={() => navigate('/register')}/>
      </div>
    </div>
  )
}

export default Login
