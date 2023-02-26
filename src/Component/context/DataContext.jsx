import React, { useEffect, useMemo, useState, createContext, useContext } from 'react'
import {  getProducts, getspeceficCategory, SearchProducts ,getAllCategory} from "../API"

const DataContext = createContext({
  products: [],
  setProducts: () => { },
  categories: [],
  setCategory: () => { },
  filteredProduct: "",
  setFilteredProduct: () => { },
  selectedprice: "All",
  setSelectedprice: () => { },
  searchInput: "",
  setSearchInput: () => { },
  whishlist: [],
  setWhishlist: () => { },
  filterByCategory: () => { },
  searchHandle: (query) => { },
})

export const useData = () => useContext(DataContext);

const DataContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedprice, setSelectedprice] = useState('ALL');
  const [searchInput, setSearchInput] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([])
  const [whishlist, setWhishlist] = useState([]);
 

  useEffect(() => {
    getProducts().then((value) => {
      setProducts(value)
    })

    getAllCategory().then((value)=>{
      setCategories(value)
    })
  }, []);


  const filterByCategory = async (category) => {
    let result = await getspeceficCategory(category)
    const filterProducts = result.products
    setProducts(filterProducts)
  }


  const searchHandle = async (searchvalue) => {
    setSearchInput(searchvalue)
    let result = await SearchProducts(searchvalue)
    if (searchInput !== "") { // const filtereddata = products.filter((item) => {
      // return Object.values(item).join("").toLowerCase().includes(searchInput.toLowerCase())
      // })
      const filtereddata = result
      setFilteredProduct(filtereddata)
    } else {
      setFilteredProduct(products)
    }
  }

  const contextValue = useMemo(() => ({
    products,
    setProducts,
    categories,
    setCategories,
    whishlist,
    setWhishlist,
    selectedprice,
    setSelectedprice,
    searchInput,
    setSearchInput,
    filterByCategory,
    searchHandle,
    filteredProduct,
    setFilteredProduct,
   }), [ products, categories,  filteredProduct, whishlist, selectedprice, searchInput])
  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;