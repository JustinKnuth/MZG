import {
  baseURL, config, travelEssentials, fun, sanitation, pets, escapeRoutes,
  sewage, food, comms, friends, music, water,
  weapons, shelters
} from "../services"



export default function JumpTo() {



  return (
    <div>
      <a href={`${baseURL}/${food}`, config}>Food</a>
      <a href={`${baseURL}/${comms}`, config}>Communication</a>
      <a href={`${baseURL}/${friends}`, config}>Friends</a>
      <a href={`${baseURL}/${sewage}`, config}>Sewage</a>
      <a href={`${baseURL}/${travelEssentials}`, config}>Travel Essentials</a>
      <a href={`${baseURL}/${fun}`, config}>Fun</a>
      <a href={`${baseURL}/${sanitation}`, config}>Sanitation</a>
      <a href={`${baseURL}/${pets}`, config}>Pets</a>
      <a href={`${baseURL}/${escapeRoutes}`, config}>Escape Routes</a>
      <a href={`${baseURL}/${music}`, config}>Music</a>
      <a href={`${baseURL}/${water}`, config}>Water</a>
      <a href={`${baseURL}/${weapons}`, config}>Weapons</a>
      <a href={`${baseURL}/${shelters}`, config}>Shelters</a>
    </div>
  )
}