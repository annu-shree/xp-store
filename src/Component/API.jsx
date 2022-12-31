import axios from 'axios'


export async function getProducts() {
    const res = await axios.get('https://fakestoreapi.com/products')
    const data = res.data;
    console.log(data)
    return data
}

export async function putProducts() {
    const res = await axios.put('https://fakestoreapi.com/products')
    const data = res.data;
    console.log(data)
    return data
}


export async function deleteProducts() {
    const res = await axios.delete('https://fakestoreapi.com/products')
    const data = res.data;
    console.log(data)
    return data
}


export async function postProducts() {
    const res = await axios.post('https://fakestoreapi.com/products')
    const data = res.data;
    console.log(data)
    return data
}


export async function getSingleProduct(id) {
    const res = await axios.get('https://fakestoreapi.com/products/id')
    const data = res.data;
    console.log(data)
    return data
}

export async function limitProduct() {
    const res = await axios.get('https://fakestoreapi.com/products?Limit=5')
    const data = res.data;
    console.log(data)
    return data
}

export async function sortProducts() {
    const res = await axios.get('https://fakestoreapi.com/products?sort=desc')
    const data = res.data;
    console.log(data)
    return data
}

export async function getAllCategory() {
    const res = await axios.get('https://fakestoreapi.com/products/categories')
    const data = res.data;
    console.log(data)
    return data
}

export async function getspeceficCategory() {
    const res = await axios.get('https://fakestoreapi.com/products/categories')
    const data = res.data;
    console.log(data)
    return data
}

export async function AddNewProduct() {
    const res = await axios.post('https://fakestoreapi.com/products', {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    })
    const data = res.data;
    console.log(data)
    return data
}

export async function updateProduct(id) {
    const res = await axios.put('https://fakestoreapi.com/products/id', {
        title: 'test product',
        price: 14.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    })
    const data = res.data;
    console.log(data)
    return data
}


export async function deleteProduct(id) {
    const res = await axios.delete('https://fakestoreapi.com/products/id')
    const data = res.data;
    console.log(data)
    return data
}

////////////////////////////////////////////////////////////
///////////////////CART/////////////////////////////////////





export async function getAllCart() {
    const res = await axios.get('https://fakestoreapi.com/carts')
    const data = res.data;
    console.log(data)
    return data
}

export async function getSingleCart(id) {
    const res = await axios.get('https://fakestoreapi.com/carts/id')
    const data = res.data;
    console.log(data)
    return data
}

export async function LimitCart() {
    const res = await axios.get('https://fakestoreapi.com/carts?limit=5')
    const data = res.data;
    console.log(data)
    return data
}

export async function sortCart() {
    const res = await axios.get('https://fakestoreapi.com/carts?sort=desc')
    const data = res.data;
    console.log(data)
    return data
}

export async function getDateRangeCarts() {
    const res = await axios.get('https://fakestoreapi.com/carts/startdate=2019-12-10&enddate=2020-10-10')
    const data = res.data;
    console.log(data)
    return data
}


export async function getUserCarts(id) {
    const res = await axios.get('https://fakestoreapi.com/carts/user/id')
    const data = res.data;
    console.log(data)
    return data
}



export async function AddToCart(id) {
    const res = await axios.post('https://fakestoreapi.com/carts', {

        userId: id,
        date: new Date(),
        products: [{ productId: 5, quantity: 1 }, { productId: 1, quantity: 5 }]

    })
    const data = res.data;
    console.log(data)
    return data
}

export async function updateCart(id) {
    const res = await axios.post('https://fakestoreapi.com/carts/id', {

        userId: 3,
        date: 2019 - 12 - 10,
        products: [{ productId: 1, quantity: 3 }]
    })
    const data = res.data;
    console.log(data)
    return data
}


export async function deleteFromCart(id) {
    const res = await axios.delete('https://fakestoreapi.com/carts/id')
    const data = res.data;
    console.log(data)
    return data
}


//////////////////////user//////////////////////////////////////


export async function getAllUser() {
    const res = await axios.get('https://fakestoreapi.com/users')
    const data = res.data;
    console.log(data)
    return data
}

export async function getSingleUser(id) {
    const res = await axios.get('https://fakestoreapi.com/users/id')
    const data = res.data;
    console.log(data)
    return data
}

export async function limitUser() {
    const res = await axios.get('https://fakestoreapi.com/users?Limit=5')
    const data = res.data;
    console.log(data)
    return data
}

export async function SortUser() {
    const res = await axios.get('https://fakestoreapi.com/users?sort=desc')
    const data = res.data;
    console.log(data)
    return data
}


export async function deletUser(id) {
    const res = await axios.delete('https://fakestoreapi.com/users/id')
    const data = res.data;
    console.log(data)
    return data
}

////////////////////userlogin///////////////////////////////////


export async function userLogin(username,password){
    const res = await axios.get('https://fakestoreapi.com/auth/login',{
          username:username,
          password:password
    })
    const data = res.data;
    console.log(data)
    return data
}