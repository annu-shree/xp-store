
import React, { useEffect, useMemo, useState } from 'react'
import { getAllCategory, getProducts } from './API'



const DataContext = React.createContext({
  data: [],
  setData: (Value) => {},
  product: [],
  setProduct: () => {},
  selectedcategory: "All",
  setSelectedCategory: () => {},
  filteredProduct: "",
  setFilteredProduct: () => {},
  selectedprice: "All",
  setSelectedprice:() => {},
  searchedtitle: "All",
  setSearchedtitle:() => {},
  cart: [],
  setCart: () => {},
  whishlist: [],
  setWhishlist: () => {},
})


export const useData = () => React.useContext(DataContext)


const DataContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedprice, setSelectedprice] = useState('ALL');
  const [searchedtitle, setSearchedtitle] = useState('ALL');  
  const filteredProduct = useMemo(() =>
    product.filter(x =>
      (selectedCategory === 'ALL' || x.category === selectedCategory) &&
      (selectedprice === 'ALL' || x.price === selectedprice) &&
      (searchedtitle === 'ALL' || x.title === searchedtitle))
    , [selectedCategory, product, selectedprice, searchedtitle])
  const [cart, setCart] = useState([]);
  const [whishlist, setWhishlist] = useState([]);



  useEffect(() => {

    getProducts().then((value) => {
      setProduct(value)
    })

    getAllCategory().then((value) => {
      setSelectedCategory(value)
    })

  }, [])


  const contextValue = useMemo(() => ({
    data,
    setData,
    product,
    setProduct,
    selectedCategory,
    setSelectedCategory,
    filteredProduct,
    cart,
    setCart,
    whishlist,
    setWhishlist,
    selectedprice,
    setSelectedprice,
    searchedtitle,
    setSearchedtitle
  }), [data, product, selectedCategory, filteredProduct, cart, whishlist, selectedprice, searchedtitle])

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  )

}
export default DataContextProvider;