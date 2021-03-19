import { useState } from "react";
import axios from "axios";
import {
  travelEssential, fun, sanitation, pets, escape,
  sewage, food, comms, doNots, friends, music, water,
  weapons, shelters, dooze
} from "../services"



function Comments(props) {

  return (
    <h3>{props.comment.fields.content}</h3>
  );
}

export default Comments;