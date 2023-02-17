
import { RoundedCorner } from '@mui/icons-material'

import React, { useEffect, useMemo, useState, createContext, useContext } from 'react'
import { getAllCategory, getProducts, getspeceficCategory, SearchProducts } from './API'
import { cart } from './CartClass'

const DataContext = createContext({
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
  ccart: [],
  setCart: () => { },
  whishlist: [],
  setWhishlist: () => { },
  filterByCategory: () => { },
  searchHandle: (query) => { },
  clearHandle: () => { },
  cartHandler: () => { },
  deleteToCart: () => { }
})
export const useData = () => useContext(DataContext);

const DataContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedprice, setSelectedprice] = useState('ALL');
  const [searchInput, setSearchInput] = useState("");
  const [searchAPI, setSearchAPI] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([])
  const [ccart, setCart] = useState([]);
  const [whishlist, setWhishlist] = useState([]);
  const { cartitems } = cart;

  useEffect(() => {
    getProducts().then((value) => {
      setProducts(value)
    })

    getAllCategory().then((value) => {
      setCategories(value)
    })
  }, []);


  const deleteToCart = (id) => {
    const filterditem = ccart.filter((item) => {
      return item.id !== id
    });
    
    setCart(filterditem);
    console.log(ccart.length, "delete-----------------");
  }

  useEffect(() => {
    console.log('contxt api ------', cartitems);
    setCart(cartitems);
    // cartHandler();
  }, [cartitems]);

  const clearHandle = () => {
    setProducts(products)
  }

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
  // console.log(products)

  // const cartHandler = async () => {
  //   setCart(cartitems)
  // }
  // console.log(ccart, "cartcontext");

  const contextValue = useMemo(() => ({
    ccart,
    deleteToCart,
    data,
    setData,
    products,
    setProducts,
    categories,
    setCategories,
    searchAPI,
    setSearchAPI,
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
    clearHandle
  }), [data, products, categories, searchAPI, filteredProduct, ccart, whishlist, selectedprice, searchInput])
  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;