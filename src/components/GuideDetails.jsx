import axios from "axios"
import { useEffect, useState, } from "react"
import { useParams } from "react-router-dom"
import { baseURL, config } from "../services"
import Comments from "./Comments.jsx"
import { switchIt } from "../helper/methods.js"



function GuideDetails(props) {
  const params = useParams()
  const { guides } = props
  const found = guides.find((item) => item.id === params.id)
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [toggleFetch, setTogglefetch] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {

    const getComments = async () => {
      const res = await axios.get(`${baseURL}/${switchIt(params.id)}`, config)
      setPosts(res.data.records)
    }
    getComments()
  }, [toggleFetch])


                                    ////////event handler for comment posting
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      content,
      author,
    };
    await axios.post(`${baseURL}/${switchIt(params.id)}`,  { fields: newComment }, config)
    setTogglefetch(!toggleFetch)
  };



  if (!found) {
    return <h2>Loading</h2>
  }
  
  const { description } = found.fields


  return (
    <div>
      <div>
        <h1>{description}</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h4>Leave a comment or suggestion</h4>
          <label>Content:</label>
          <input value={content} onChange={(e) => setContent(e.target.value)} />
          <label>Author:</label>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          <button type="submit">Send it!</button>
        </form>
      </div>

      <div>
        {posts.map((post) => (
          
          <Comments comment={post}
            setTogglefetch={setTogglefetch}
            key={post.id}/>
        ))}
      </div>

    </div>
  )
}





export default GuideDetails