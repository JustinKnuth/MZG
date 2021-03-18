import axios from "axios"
import { Link, Route } from "react-router-dom"
import GuideDetails from "./GuideDetails.jsx"
import { useParams } from "react-router-dom"

function Guide(props) {

  const { id } = props.individualGuide
  const { title, guide, quote, quoter } = props.individualGuide.fields
  const { index } = props
  
  return (
    <div className={index % 2 === 0 ? "guide-1" : "guide-2"}>

      <Link to={`/guide-details/${id}`}>
      
        <h1>{title}</h1>
        <h4>{guide}</h4>
        <p>{quote}<br /><br />
        <em>{quoter}</em>
        </p>
      </Link>
      






    </div>

  )
}
export default Guide;