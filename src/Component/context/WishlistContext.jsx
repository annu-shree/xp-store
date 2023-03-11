import { useMemo } from "react"
import { createContext, useContext, useState } from "react"
import { useLocalStorage } from "../Hooks/useLocalStorage"

const WishlistContext = createContext({

    wishlist: [],
    setWishlist: () => { },
    addToWishlist: () => { },
    deleteToWishlist: () => { },
})

export const useWishlistData = () => useContext(WishlistContext)

const WishlistContextprovider = (props) => {
    const [wishlist, setWishlist] = useState([])


    const addToWishlist = (item) => {
        setWishlist((prev) => [...prev, item])
        console.log("Wishlist", wishlist);
    }

    const deleteToWishlist = (id) => {
        const filtereditem = wishlist.filter((item) => item.id !== id);
        setWishlist(filtereditem);
        console.log("filtereditem", filtereditem)
    }
    const WishlistContextValue = useMemo(() => ({
        wishlist,
        addToWishlist,
        deleteToWishlist
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [wishlist])

    return (
        <WishlistContext.Provider value={WishlistContextValue}>
            {props.children}
        </WishlistContext.Provider>
    )
}
export default WishlistContextprovider;