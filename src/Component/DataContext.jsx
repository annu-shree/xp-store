
import { RoundedCorner } from '@mui/icons-material'
import React, { useEffect, useMemo, useState } from 'react'
import { getAllCategory, getProducts, getspeceficCategory, SearchProducts } from './API'
import { Navigate, useLocation,useNavigation } from "react-router-dom"


const DataContext = React.createContext({
  data: [],
  setData: (Value) => { },
  products: [],
  setProducts: () => { },
  categories: "All",
  setCategory: () => { },
  searchAPI: [],
  setSearchAPI: () => { },
  filteredProduct: "",
  setFilteredProduct: () => { },
  selectedprice: "All",
  setSelectedprice: () => { },
  searchInput: "",
  setSearchInput: () => { },
  cart: [],
  setCart: () => { },
  whishlist: [],
  setWhishlist: () => { },
  filterByCategory: () => { },
  searchHandle: () => { },
  clearHandle:() => { },
})
export const useData = () => React.useContext(DataContext)

const DataContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedprice, setSelectedprice] = useState('ALL');
  const [searchInput, setSearchInput] = useState("");
  const [searchAPI, setSearchAPI] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([])
  const [cart, setCart] = useState([]);
  const [whishlist, setWhishlist] = useState([]);

  useEffect(() => {
    getProducts().then((value) => {
      setProducts(value)
    })

    getAllCategory().then((value) => {
      setCategories(value)
    })

   getspeceficCategory().then((value) => {
      setSearchAPI(value)
    })
   }, [])
  
   const clearHandle = () => {
   setProducts(products)
  }

   const filterByCategory = async (category) => {
    let result = await getspeceficCategory(category)
    const filterProducts = result.products
    setProducts(filterProducts)
  }

  const searchHandle = (searchvalue) => {
    setSearchInput(searchvalue)
    if (searchInput !== "") {
      const filtereddata = products.filter((item) => {
      return Object.values(item).join("").toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredProduct(filtereddata)
    } else {
      setFilteredProduct(products)
    }
  }
  console.log(products, "jkhiuiujjh")

  const contextValue = useMemo(() => ({
    data,
    setData,
    products,
    setProducts,
    categories,
    setCategories,
    searchAPI,
    setSearchAPI,
    filteredProduct,
    setFilteredProduct,
    cart,
    setCart,
    whishlist,
    setWhishlist,
    selectedprice,
    setSelectedprice,
    searchInput,
    setSearchInput,
    filterByCategory,
    searchHandle,
    clearHandle
  }), [data, products, categories, filteredProduct, cart, whishlist, selectedprice, searchInput])
  return (
    <DataContext.Provider value={contextValue} >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;