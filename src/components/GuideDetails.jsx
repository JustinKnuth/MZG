import { useEffect, useState, } from "react"
import { useParams } from "react-router-dom"
import {
  travelEssentials, fun, sanitation, pets, escapeRoutes,
  sewage, food, comms, doNots, friends, music, water,
  weapons, shelters, dooze
} from "../services"
import TableSwitcher from "./TableSwitcher.jsx"
import { Link, Route } from "react-router-dom"
import AllGuides from "./AllGuides.jsx"
import Guide from "./Guide.jsx"
import Nav from "./Nav.jsx"
import axios from "axios"
import Comments from "./Comments.jsx"


let table = '';

function GuideDetails(props) {
  const params = useParams()
  const { guides } = props
  const found = guides.find((item) => item.id === params.id)
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  let table;
  



  // switch (params.id) {
  //   case travelEssentials:
  //     table = 'essentials';
  //     break;
  //   case fun:
  //     table = 'funs';
  //     break;
  //   case sanitation:
  //     table = 'sanitize';
  //     break;
  //   case pets:
  //     table = 'pet';
  //     break;
  //   case escapeRoutes:
  //     table = 'escape';
  //     break;
  //   case sewage:
  //     table = 'poops';
  //     break;
  //   case food:
  //     table = 'foob';
  //     break;
  //   case comms:
  //     table = 'comm';
  //     break;
  //   case doNots:
  //     table = 'dont';
  //     break;
  //   case friends:
  //     table = 'friendship';
  //     break;
  //   case music:
  //     table = 'sounds';
  //     break;
  //   case water:
  //     table = 'h2o';
  //     break;
  //   case weapons:
  //     table = 'weaponize';
  //     break;
  //   case shelters:
  //     table = 'shelter';
  //     break;
  //   case dooze:
  //     table = 'do';
  //     break;
  //   default:
  //     alert('sorry');


  // }
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      content,
      author,
    };
    await axios.post(`https://api.airtable.com/v0/appP8Am4eIgzdu7Ma/${table}?api_key=keyiWYDbJx9kSGQOw`, { fields: newComment });
  };


  console.log(table)


  if (!found) {
    return <h2>Loading</h2>
  }
  const { description } = found.fields
  return (
    

    <div>
      <TableSwitcher />
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
      <button type="submit">Chirp!</button>
    </form>
      </div>

    </div>
  )
}





export default GuideDetails