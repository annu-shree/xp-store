import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const CartContext = createContext({
    cart: [],
    setCart: () => { },
    cartTotal: 0,
    totalItem: 0,
    addToCart: () => { },
    deleteToCart: () => { },
    updateToQuantity: () => { },
})

export const useCartData = () => useContext(CartContext);

const CartContextProvider = (props) => {

    const [cart, setCart] = useLocalStorage("cart", []);

    const cartTotal = useMemo(() => {
        return cart.reduce((acc, itm) => acc += itm.quantity * itm.price, 0)
    }, [cart])
    console.log("cttt", cartTotal);

    const totalItem = useMemo(() => {
        return cart.reduce((acc, itm) => acc += itm.quantity, 0)
    }, [cart])
    console.log("itmqqqqqq", totalItem);

    function addToCart(item) {
        let test = cart.some((itm) => itm.id === item.id)
        console.log("testing", test)
        const itm = {
            ...item,
            quantity: 1
        }
        setCart((prev) => [...prev, itm])
        console.log("cart...", cart)
    }

    console.log("cartTotal", cartTotal);

    const deleteToCart = (id) => {
        const filterditem = cart.filter((item) => {
            return item.id !== id
        });
        setCart(filterditem);
        console.log(cart.length, "delete-----------------");

    }

    function updateToQuantity(id, delta = 1) {
        let i = cart.findIndex(itm => itm.id === id)
        let cartItem = {
            ...cart[i],
            quantity: cart[i].quantity += delta
        }
        let updatedArr = [...cart].splice(i, 1, cartItem)
        setCart(updatedArr)
    }

    const cartContextValue = useMemo(() => ({
        cart,
        cartTotal,
        totalItem,
        addToCart,
        deleteToCart,
        updateToQuantity
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [cart, cartTotal, totalItem])

    return (
        <CartContext.Provider value={cartContextValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

