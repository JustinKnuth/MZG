import { useEffect, useState, } from "react"
import { useParams } from "react-router-dom"
import { Link, Route } from "react-router-dom"
import AllGuides from "./AllGuides.jsx"
import Guide from "./Guide.jsx"
import Nav from "./Nav.jsx"
import axios from "axios"


function GuideDetails(props) {
  const params = useParams()
  const { guides } = props
  const found = guides.find((item) => item.id === params.id)

  if (!found) {
    return <h2>Loading</h2>
  }
  const { description } = found.fields
  return (
    <div>
      
      <div>
        <h1>{description}</h1>
      </div>

    </div>
  )
}




export default GuideDetails