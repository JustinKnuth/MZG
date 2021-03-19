import axios from "axios"
import { useEffect, useState, } from "react"
import { useParams } from "react-router-dom"
import { baseURL, config } from "../services"
import Comments from "./Comments.jsx"
import {
  travelEssentials, fun, sanitation, pets, escapeRoutes,
  sewage, food, comms, doNots, friends, music, water,
  weapons, shelters, dooze
} from "../services"



function GuideDetails(props) {
  const params = useParams()
  const { guides } = props
  const found = guides.find((item) => item.id === params.id)
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [toggleFetch, setTogglefetch] = useState(false)
  const [posts, setPosts] = useState([])



  let table = '';
                      ////// Switch statement to change the URL id to match the table
  switch (params.id) {
    case travelEssentials:
      table = 'essentials';
      break;
    case fun:
      table = 'funs';
      break;
    case sanitation:
      table = 'sanitize';
      break;
    case pets:
      table = 'pet';
      break;
    case escapeRoutes:
      table = 'escape';
      break;
    case sewage:
      table = 'bathroom';
      break;
    case food:
      table = 'foob';
      break;
    case comms:
      table = 'comm';
      break;
    case doNots:
      table = 'dont';
      break;
    case friends:
      table = 'friendship';
      break;
    case music:
      table = 'sounds';
      break;
    case water:
      table = 'h2o';
      break;
    case weapons:
      table = 'weaponize';
      break;
    case shelters:
      table = 'shelter';
      break;
    case dooze:
      table = 'do';
      break;
    default:
      alert('We are experiencing technical difficulties');
  }


  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(`${baseURL}/${table}`, config)
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
    await axios.post(`${baseURL}/${table}`,  { fields: newComment }, config)
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