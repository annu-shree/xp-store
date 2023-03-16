import { useData } from "../context/DataContext"

const Filter = (props) => {
  const { filterByCategory, categories } = useData();
  return (
    <div style={{ paddingTop: "40px", paddingRight: "50px" }}>
      <div className="Filter" >
        <div style={{
          display: "flex",
          flexDirection: "row",
        }}>
          <div>
            <h1 style={{
              color: "black",
              marginLeft:"1.5rem",
            }}>Filters</h1>
          </div>

          
            <i
            style={{
              backgroundColor: "white",
              width: "60px",
              height: "50px",
              marginTop: "28px",
              fontSize: "17px",
              marginLeft: "100px"
            }} >
              <span class="material-symbols-outlined">
                close
              </span>
            </i>
        </div>
       
        <h2 style={{
          color: "black",
          marginLeft:"1.5rem",
        }}>Categories</h2>

        <form style={{marginLeft:"1.5rem"}}>
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
                    marginBottom: "2px",
                    float:"left",
                    marginLeft:"0.5rem"
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