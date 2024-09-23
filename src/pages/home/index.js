import { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
const Home = () => {
  const navigate = useNavigate();
  const [dataBlog, setDataBlog] = useState([]);
  const query = new URLSearchParams(window.location.search);
  const page = query.get("page");
  useEffect(() => {
    Axios.get(`http://localhost:9000/v1/blog/posts?page=${page}`)
      .then((res) => {
        const responseAPi = res.data;
        setDataBlog(responseAPi.data);
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
      <div className="content-wraper">
        {dataBlog.map((blog) => {
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
