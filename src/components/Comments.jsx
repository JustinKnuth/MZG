




function Comments(props) {


let time = new Date().toLocaleString()



  return (
    <div className= "comments">
      <h3>{props.comment.fields.content}</h3>
      <h4>{time}</h4>
    </div>

  );
}

export default Comments;