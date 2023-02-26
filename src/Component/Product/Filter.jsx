import { useData } from "../context/DataContext"

const Filter = (props) => {
  const { filterByCategory, categories } = useData();
  return (
    <div style={{ paddingTop: "40px", paddingRight: "50px" }}>
      <div className="Filter" style={{
        border: "2px solid black",
        height: "AUTO",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
        alignItems: "flex-start",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "row",
        }}>
          <div>
            <h1 style={{
              color: "black",
            }}>Filters</h1>
          </div>

          <button
            style={{
              backgroundColor: "white",
              width: "60px",
              height: "50px",
              marginTop: "18px",
              fontSize: "17px",
              marginLeft: "130px"
            }} >Clear</button>
        </div>
        <h2 style={{
          color: "black",
        }}>Categories</h2>
        <form>

          {
            categories.map((itm,i) => {
              return (
                <div style={{
                  color: "black",
                  marginBottom: "6px"
                }} key={i}>
                  <input
                    type="radio"
                    id={itm} name='category'
                    value={itm}
                    onClick={() => { filterByCategory(itm) }}
                    style={{ float: "left" }}
                  />
                  <label style={{
                    color: "black",
                    marginBottom: "2px"
                  }}>
                    {itm}</label>
                  <br />
                </div>
              )
            })
          }
        </form>
      </div>
    </div>
  )
}


export default Filter