import Guide from "./Guide.jsx"


function AllGuides(props) {
  const { guides } = props


  return (
    <div className="all-guides">
      <h2 style={{ textAlign: "center" }}>Click one one of the guides below for more details</h2>


      <div>
        {guides.map((item, index) => (
          <Guide key={item.id}
            individualGuide={item}
            index={index} />
        ))}
      </div>
    </div>
  )
}


export default AllGuides


