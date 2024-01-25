
const DataDisplay = ({data}) => {
    console.log(data)
  return (
    <div className="gridContainer">
        {data.length == 0 && (
            <p>No post available</p>
        )}
        {
            data.map((item ,index) => {
                return (
                    <div className="card" key={index}>
                        <p className="title">{item.title}</p>
                        <p>{item.body}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DataDisplay;