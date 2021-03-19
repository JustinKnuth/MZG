import {
  travelEssentials, fun, sanitation, pets, escapeRoutes,
  sewage, food, comms, doNots, friends, music, water,
  weapons, shelters, dooze
} from "../services"
import { useParams } from "react-router-dom"

function TableSwitcher(props) {
  const params = useParams()
  const { guides } = props
  const found = guides.find((item) => item.id === params.id)


let table = ""

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
      table = 'poops';
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
      alert('sorry');


  }

}

export default TableSwitcher