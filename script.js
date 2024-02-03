// console.log(2 + 2)



const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]

function addIceCreamToCart(iceCreamName) {
    console.log('ice cream name', iceCreamName);
    const foundIceCream = iceCream.find(iceCream => iceCream.name == iceCreamName)
    console.log('found ice cream', foundIceCream);
    foundIceCream.cartQuantity++
    calculateCartTotal()
    drawCartList()
}

function addToppingsToCart(toppingName) {
    console.log('topping name', toppingName);
    const foundTopping = toppings.find(topping => topping.name == toppingName)
    console.log('found topping', foundTopping);
    foundTopping.cartQuantity++
    calculateCartTotal()
    drawCartList()
}






function calculateCartTotal() {
    let total = 0

    menuItems.forEach(menuItem => {
        // console.log(menuItem.price * menuItem.cartQuantity)
        total += menuItem.price * menuItem.cartQuantity
    })
    console.log('total:', total);

    const cartTotalElement = document.getElementById('cartTotal')
    cartTotalElement.innerText = total.toString()
}