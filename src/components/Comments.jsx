




function Comments(props) {


let time = new Date().toLocaleString()

console.log(props)
  return (
    <div className= "comments">
      <h3>{props.comment.fields.content}</h3>
      <h4>{props.comment.fields.name}</h4>
      <h4>{props.comment.fields.date}</h4>
    </div>

  );
}

export default Comments;