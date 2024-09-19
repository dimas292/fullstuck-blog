import { Button, Gap, Input, TextArea, Upload } from "../../components"
import { useNavigate } from "react-router-dom"
import './createBlog.css'
const CreateBlog = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>Create new blog post</p>
      <Input label="Post title" textColor={"black"}/>
      <p>upload image</p>
      <Upload />
     <TextArea />
      <Gap height={20}/>
     <div className="button-action">
      <Button title={"save"} onClick={() => navigate('/')}/>
     </div>
      <Gap height={50}/>
    </div>
  )
}

export default CreateBlog
