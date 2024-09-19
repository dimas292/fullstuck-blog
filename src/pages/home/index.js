import { BlogItem, Button, Gap } from "../../components"
import './home.css'
import { useNavigate } from "react-router-dom"
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home-page-wraper">
      <div className="create-wraper">
        <Button title={"create blog"} onClick={() => navigate('/create-blog')}/>
      </div>
      <Gap height={20}/>
      <div className="content-wraper">
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      </div>
        <Gap height={50}/>
      <div className="pagination">
        <Button title={"previous"}/>
        <Gap width={20}/>
        <Button title={"next"}/>
      </div>
      <Gap height={20}/>
    </div>
  )
}

export default Home
