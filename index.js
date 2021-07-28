const storeItemlistEl = document.querySelector(".store--item-list");
// console.log("storeItem:",storeItemlistEl)

const cartItemEl = document.querySelector(".cart--item-list");
console.log("cartItem:", cartItemEl)

const totalPriceEl = document.querySelector(".total-number");
// console.log("totalPrice:", totalPriceEl)

function renderStoreItemList (products) {

  for (let i = 0; i < products.length; i++ ){

     const product = products[i]
      // console.log(product)

    const listItemEl = document.createElement("li");
    storeItemlistEl.append(listItemEl);
    // console.log(listItemEl)
    
    const divEl = document.createElement("div")
    divEl.className = "store--item-icon"
    listItemEl.append(divEl)
    // console.log(divEl)

    const imageEl = document.createElement("img");    
    const imageSrc = `assets/icons/${product.id}.svg`;
    imageEl.setAttribute("src", imageSrc);  
    // console.log("image:", imageSrc)   
    listItemEl.append(imageEl)

    const btnEl = document.createElement("button");
    btnEl.innerText = "Add to cart";
    listItemEl.append(btnEl)

    // console.log(`assets/icons/${product.id}.svg`)    
        
  }
}
renderStoreItemList(products)

function renderCartItemList (cart){

  for (let i = 0; i < cart.length; i++){
    const cartItem = cart[i]
    console.log("cartItem :", cartItem)

  const ListItemInCartEl = document.createElement("li");
  cartItemEl.append(ListItemInCartEl);
  console.log("ListItemInCartEl:", ListItemInCartEl)

  const imageEl = document.createElement("img");    
  const imageSrc = `assets/icons/${cartItem.item.id}.svg`;
  imageEl.setAttribute("src", imageSrc);  
  console.log("image:", imageSrc)   
  divEl.append(imageEl)

  const paragraphEl = document.createElement("p")
  paragraphEl.innerText = cartItem.item.name
  ListItemInCartEl.append(paragraphEl)

  const minusBtn = document.createElement("button")
  minusBtn.className = "quantity-btn remove-btn center"
  minusBtn.innerText = "-"
  ListItemInCartEl.append(minusBtn)

  const spanEl = document.createElement("span")
  spanEl.className = "quantity-text center"
  spanEl.innerText = 1
  ListItemInCartEl.append(spanEl)

  const plusBtn = document.createElement("button")
  plusBtn.className = "quantity-btn remove-btn center"
  plusBtn.innerText = "+"
  ListItemInCartEl.append(plusBtn)
  }
}
renderCartItemList(cartItems)