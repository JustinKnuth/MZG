




function Comments(props) {


let time = new Date().toLocaleString()

console.log(props)
  return (
    <div className= "comments">
      <h3>{props.comment.fields.content}</h3>
      <h4><em>{props.comment.fields.name}</em></h4>
      <h5>{props.comment.fields.date}</h5>
    </div>

  );
}

export default Comments;