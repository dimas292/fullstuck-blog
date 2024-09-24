import { useEffect} from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {

  const navigate = useNavigate();
  const {dataBlogs, name} = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch({type : "UPDATE_NAME"})
    }, 3000)
    Axios.get(`http://localhost:9000/v1/blog/posts`)
      .then((res) => {
        const responseAPi = res.data;
        dispatch({type : "UPDATE_DATA_BLOG", payload : responseAPi.data})
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="home-page-wraper">
      <div className="create-wraper">
        <Button
          title={"create blog"}
          onClick={() => navigate("/create-blog")}
        />
      </div>
      <Gap height={20} />
      {name}
      <div className="content-wraper">
        {dataBlogs.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              title={blog.title}
              name={blog.author.name}
              date={blog.createdAt}
              body={blog.body}
              image={`http://localhost:9000/${blog.image}`}
              _id={blog._id}
            />
          );
        })}
      </div>
      <Gap height={50} />
      <div className="pagination">
        <Button title={"previous"} />
        <Gap width={20} />
        <Button title={"next"} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
