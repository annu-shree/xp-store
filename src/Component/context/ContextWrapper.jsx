import React from 'react'
import DataContextProvider from './DataContext'
import CartContextProvider from './CartContext'
import WishlistContextprovider from './WishlistContext'
const ContextWrapper = (props) => {

    return (
        <div>
            <DataContextProvider>
                <CartContextProvider>
                    <WishlistContextprovider>
                    {props.children}
                    </WishlistContextprovider>
                </CartContextProvider>
            </DataContextProvider>
        </div>
    )
}

export default ContextWrapper