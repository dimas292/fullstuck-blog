import { BlogItem, Button, Gap } from "../../components"
import './home.css'
const Home = () => {
  return (
    <div className="home-page-wraper">
      <div className="create-wraper">
        <Button title={"create blog"}/>
      </div>
      <Gap height={20}/>
      <div className="content-wraper">
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      </div>
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
