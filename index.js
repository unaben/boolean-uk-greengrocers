const storeItemlistEl = document.querySelector(".store--item-list");
// console.log("storeItem:",storeItemlistEl)

const cartItemEl = document.querySelector(".cart--item-list");
console.log("cartItem:", cartItemEl)

const totalPriceEl = document.querySelector(".total-number");
// console.log("totalPrice:", totalPriceEl)

function renderStoreItemList (Item) {

  for (let i = 0; i < Item.length; i++ ){

     const storeItem = Item[i]
      // console.log(storeItem)

    const listItemEl = document.createElement("li");
    storeItemlistEl.append(listItemEl);
    // console.log(listItemEl)
    
    const divEl = document.createElement("div")
    divEl.className = "store--item-icon"
    listItemEl.append(divEl)
    // console.log(divEl)

    const imageEl = document.createElement("img");    
    const imageSrc = `assets/icons/${storeItem.id}.svg`;
    imageEl.setAttribute("src", imageSrc);  
    // console.log("image:", imageSrc)   
    divEl.append(imageEl)

    const btnEl = document.createElement("button");
    btnEl.innerText = "Add to cart";
    listItemEl.append(btnEl)
    console.log("button:", btnEl)

    btnEl.addEventListener("click", (event) => {
    console.log("click")})

    // console.log(`assets/icons/${product.id}.svg`)    
        
  }
}
renderStoreItemList(storeItemsList)

// function renderCartItemList (cart){

//   for (let i = 0; i < cart.length; i++){
//     const cartItem = cart[i]
//     console.log("cartItem :", cartItem)

//   const ListItemInCartEl = document.createElement("li");
//   cartItemEl.append(ListItemInCartEl);
//   console.log("ListItemInCartEl:", ListItemInCartEl)

//   const imageEl = document.createElement("img");    
//   const imageSrc = `assets/icons/${cartItem.item.id}.svg`;
//   imageEl.setAttribute("src", imageSrc);  
//   console.log("image:", imageSrc)   
//   ListItemInCartEl.append(imageEl)

//   const paragraphEl = document.createElement("p")
//   paragraphEl.innerText = cartItem.item.name
//   ListItemInCartEl.append(paragraphEl)

//   const minusBtn = document.createElement("button")
//   minusBtn.className = "quantity-btn remove-btn center"
//   minusBtn.innerText = "-"
//   ListItemInCartEl.append(minusBtn)

//   const spanEl = document.createElement("span")
//   spanEl.className = "quantity-text center"
//   spanEl.innerText = 1
//   ListItemInCartEl.append(spanEl)

//   const plusBtn = document.createElement("button")
//   plusBtn.className = "quantity-btn remove-btn center"
//   plusBtn.innerText = "+"
//   ListItemInCartEl.append(plusBtn)
//   }
// }
// renderCartItemList(cartItems)



function addToCart(storeItems, cartItem) {
  console.log("InsideAddToCart: ", storeItems, cartItem.length);

 let recievedItem = false;

 for (let i = 0; i < cartItems.length; i++){
   const itemInCart = cartItems[i];
  //  console.log("itemInCart:", itemInCart)
   const cartItemId = itemInCart.item.id;
   console.log("cartItemId:", cartItemId)

   const storeItemId = storeItems.id
   console.log("storeItemId:", storeItemId)

   if (cartItemId === storeItemId){
     itemInCart.quantity = itemInCart.quantity + 1;
     recievedItem = true 
   }
 }
 if (!recievedItem) {
 const newItemInCart = {
   item: storeItems,
   quantity: 1
 };

 cartItem.push(newItemInCart)
}
console.log("newCartItem:", cartItem)
}

addToCart(storeItemsList[0], cartItems);
addToCart(storeItemsList[0], cartItems);
addToCart(storeItemsList[3], cartItems);
addToCart(storeItemsList[3], cartItems);
addToCart(storeItemsList[0], cartItems);
addToCart(storeItemsList[3], cartItems);
