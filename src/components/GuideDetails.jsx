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
  const [name, setName] = useState("");
  const [date, setDate] = useState('')
  const [toggleFetch, setToggleFetch] = useState(false)
  const [posts, setPosts] = useState([])


  

  useEffect(() => {

    const getComments = async () => {
      const res = await axios.get(`${baseURL}/${switchIt(params.id)}`, config)
      const dates = res.data.records.sort((a,b) => new Date(b.fields.date) - new Date(a.fields.date))
      setPosts(dates)
      window.scrollTo(0, 0)
    }
    getComments()
  }, [toggleFetch])

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      content,
      name,
    };
    await axios.post(`${baseURL}/${switchIt(params.id)}`, { fields: newComment }, config)
    setToggleFetch(!toggleFetch)
    setName("")
    setContent("")
  };
  


  if (!found) {
    return <h2>Loading</h2>
  }
  
  const { description } = found.fields
  return (
    <div>
      <div>
        <p className="details">{description}</p>
        

      </div>
      <div>
        <form id="form" onSubmit={handleSubmit}>
          <h4 style={{textAlign:"center"}}>ADD TO THE GUIDE</h4>
          <input value={content} placeholder="Guide Suggestion" onChange={(e) => setContent(e.target.value)} /><br/>
          <input value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)} /><br/>
          <button type="submit">Send it!</button>
        </form>
      </div>

      <div>
        {posts.map((post) => (
          
          <Comments comment={post}
            setToggleFetch={setToggleFetch}
            key={post.id}/>
        ))}
      </div>

    </div>
  )
}




export default GuideDetails