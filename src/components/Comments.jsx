import { useState } from "react";
import axios from "axios";
import {
  travelEssential, fun, sanitation, pets, escape,
  sewage, food, comms, doNots, friends, music, water,
  weapons, shelters, dooze
} from "../services"



function Comments(props) {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  let table;
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      content,
      author,
    };
    await axios.post("https://api.airtable.com/v0/appP8Am4eIgzdu7Ma/comms?api_key=keyiWYDbJx9kSGQOw", { fields: newComment });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Leave a comment or suggestion</h4>
      <label>Content:</label>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <label>Author:</label>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Chirp!</button>
    </form>
  );
}

export default Comments;