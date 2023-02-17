import axios from 'axios'


export async function getProducts() {
    const res = await axios.get('https://dummyjson.com/products')
    const data = res.data.products;
    console.log(data)
    return data
}

export async function putProducts() {
    const res = await axios.put('https://dummyjson.com/products',{
        title:"",
        price:"",
        brand:"",        
    })
    const data = res.data;
    console.log(data)
    return data
}


export async function deleteProducts(id) {
    const res = await axios.delete('https://dummyjson.com/products/id')
    const data = res.data;
    console.log(data)
    return data
}


export async function postProducts() {
    const res = await axios.post('https://dummyjson.com/products/add',{
        title:"",
        price:"",
        brand:"",
    })
    const data = res.data;
    console.log(data)
    return data
}


export async function getSingleProduct(id) {
    const res = await axios.get('https://dummyjson.com/products/id')
    const data = res.data;
    console.log(data)
    return data
}


export async function SearchProducts(product) {
    const res = await axios.get('https://dummyjson.com/products/search?q='+product)
    const data = res.data.products;
    console.log(data)
    return data
}

export async function limitSkipProduct() {
    const res = await axios.get('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    const data = res.data;
    console.log(data)
    return data
}

// export async function sortProducts() {
//     const res = await axios.get('https://fakestoreapi.com/products?sort=desc')
//     const data = res.data;
//     console.log(data)
//     return data
// }

export async function getAllCategory() {
    const res = await axios.get('https://dummyjson.com/products/categories')
    const data = res.data;
    console.log(data)
    return data
}

export async function getspeceficCategory(category) {
    const res = await axios.get('https://dummyjson.com/products/category/'+ category);
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

// export async function updateProduct(id) {
//     const res = await axios.put('https://fakestoreapi.com/products/id', {
//         title: 'test product',
//         price: 14.5,
//         description: 'lorem ipsum set',
//         image: 'https://i.pravatar.cc',
//         category: 'electronic'
//     })
//     const data = res.data;
//     console.log(data)
//     return data
// }

// export async function deleteProduct(id) {
//     const res = await axios.delete('https://fakestoreapi.com/products/id')
//     const data = res.data;
//     console.log(data)
//     return data
// }

////////////////////////////////////////////////////////////
///////////////////CART/////////////////////////////////////
export async function getAllCart() {
    const res = await axios.get('https://dummyjson.com/carts')
    const data = res.data;
    console.log(data)
    return data
}
 
export async function getSingleCart(id) {
    const res = await axios.get('https://dummyjson.com/carts/id')
    const data = res.data;
    console.log(data)
    return data
}

// export async function LimitCart() {
//     const res = await axios.get('https://fakestoreapi.com/carts?limit=5')
//     const data = res.data;
//     console.log(data)
//     return data
// }

export async function getUserCarts(id) {
    const res = await axios.get('https://dummyjson.com/carts/user/id')
    const data = res.data;
    console.log(data)
    return data
}



export async function AddToCart(id) {
    const res = await axios.post('https://dummyjson.com/carts/add', {

        userId: id,
        date: new Date(),
        products: [{ id: 5, quantity: 1 }, { id: 1, quantity: 5 }]

    })
    const data = res.data;
    console.log(data)
    return data
}

export async function updateCart(id) {
    const res = await axios.post('https://dummyjson.com/carts/id', {

        userId: 3,
        products: [{id: 1, quantity: 3 }]
    })
    const data = res.data;
    console.log(data)
    return data
}


export async function deleteFromCart(id) {
    const res = await axios.delete('https://dummyjson.com/carts/id')
    const data = res.data;
    console.log(data)
    return data
}


///////////////////////////user//////////////////////////////////////


export async function getAllUser() {
    const res = await axios.get('https://dummyjson.com/users')
    const data = res.data;
    console.log(data)
    return data
}

export async function getSingleUser(id) {
    const res = await axios.get('https://dummyjson.com/users/id')
    const data = res.data;
    console.log(data)
    return data
}

export async function limitUser() {
    const res = await axios.get('https://dummyjson.com/users?limit=5&skip=10&select=firstName,age')
    const data = res.data;
    console.log(data)
    return data
}

export async function SearchUser(firstName,lastName) {
    const res = await axios.get('https://dummyjson.com/users/search?q=firstName||lastName')
    const data = res.data;
    console.log(data)
    return data
}

export async function FilterUser(key) {
    const res = await axios.get('https://dummyjson.com/users/filter?key=hair.color&value=Brown')
    const data = res.data;
    console.log(data)
    return data
}



export async function deleteUser(id) {
    const res = await axios.delete('https://dummyjson.com/users/id')
    const data = res.data;
    console.log(data)
    return data
}

////////////////////userlogin///////////////////////////////////
export async function userLogin(username,password){
    const res = await axios.get('https://dummyjson.com/auth/login',{
          username:username,
          password:password
    })
    const data = res.data;
    console.log(data)
    return data
}