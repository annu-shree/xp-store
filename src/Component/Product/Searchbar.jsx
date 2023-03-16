import { useData } from '../context/DataContext'
const Searchbar = (props) => {
  const { searchHandle } = useData()
  return (
    <div className="searchbar"
      style={{ paddingTop: "4.6rem" }} >
      <input
        type="search"
        className="searchbar"
        onChange={(e) => searchHandle(e.target.value)}
        style={{
          width: "450px",
          height: "35px",
          paddingTop: "1rem",
          paddingBottom: "9px"
        }}
        placeholder="SEARCH" />
    </div>
  )
}

export default Searchbar;


// function debounce(func, delay) {
//   let Timer;
//   return function() {
//     const context = this
//     const args = arguments
//     clearTimeout(Timer)
//     Timer= setTimeout(() =>
//        func.apply(context, args), delay)
//  }
// }
