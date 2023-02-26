

// cart = [] or acess data from localStorage
// add to cart ()
// deleteFromCart()
// upadatequantity()
// item Total
//total
//itemQuantity


// // cllas - cart [] , subtoal = 0 , itemq = 0
// function add( id , delta= 1){
//     const item = { 
//         id :
//         quantity :
//     }
//     itt = price * qual 
//     this.tol += itt
// item.qua += delta
// }
// add(1)
//let cart ? localStorage.getItem("cartitem",JSON.stringify(item)):[]
class Cart {
  constructor(cart, total, itemquantity) {
    if (this.cartitems) {
      this.cartitems = localStorage.getItem("cartitem", JSON.parse())
    } else {
      this.cartitems = []
    }
    this.total = 0;
    this.itemquantity = 0;
  }

  addTocart(item) {
    let itm = {
      ...item,
      quantity: 1,
    }
    this.cartitems.push(item)
    // update totals 
    this.total += itm.price * itm.quantity
    this.itemquantity += itm.quantity
  }

  deleteToCart(id) {
    const filterditem = this.cartitems.filter((item) => {
      return item.id !== id
    });
    this.cartitems = filterditem;
    console.log(this.cartitems.length, this.cartitems)
    //update totals
    this.total = this.total - (filterditem.price * filterditem.quantity)
    this.itemquantity = this.itemquantity - filterditem.quantity
  }

  updateQuantityAdd(id, delta = 1) {
    // find the item index
    let i = this.cartitems.findIndex(itm => itm.id === id)
    this.cartitems[i].quantity += delta
    this.total = this.cartitems.reduce((acc, itm) => {
      acc += itm.quantity * itm.price
      return acc
    }, 0)
  }

  updateQuantitySub(id, delta = -1) {
    //find item index
    let i = this.cartitems.findIndex(itm => itm.id === id)
    this.cartitems[i].quantity += delta
    this.total = this.cartitems.reduce((acc, itm) => {
    acc = acc- (itm.price * itm.quantity)
    return acc
    },0)
  }




}

export let cart = new Cart()

