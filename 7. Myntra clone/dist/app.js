let containerItems = document.querySelector("#container-items");
let bagCount = document.querySelector(".bag-count");
let bagCountItem;
onLoad();


function onLoad(){
  let BagItemsStr = localStorage.getItem("BagItems")
  bagCountItem = BagItemsStr ? JSON.parse(BagItemsStr) : [];
  showProducts();
  bagVisible();
}




function showProducts(){
  let newHtml = "";
  if(!containerItems){
    return;
  }


  items.forEach(item =>{

    newHtml += `<div class="w-[220px]  m-10" id="card">
    <img src="${item.image}" alt="">
    <div class="font-bold text-sm my-1">
      ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="font-bold text-lg my-1" id="company-name">${item.company}</div>
    <div class="font-sans text-slate-600 text-sm my-1" id="item-name">${item.item_name}</div>
    <div class="my-1">
      <span class="font-bold text-sm">Rs.${item.current_price}</span>
      <span class="text-gray-500 text-[12px] line-through">Rs ${item.original_price}</span>
      <span class="text-orange-700 text-[12px]">(${item.discount_percentage}% off)</span>
    </div>
    <div>
      <button class="mt-2 w-[12rem] p-2 bg-green-600 text-white rounded-md hover:bg-green-800" onclick="addToCart(${item.id})">Add to Cart</button>
    </div>
  </div>`

  })

  
  containerItems.innerHTML = newHtml;

}


  


function bagVisible(){

  if(bagCountItem == 0){
    bagCount.style.visibility = "hidden";
  }else{
    bagCount.style.visibility = "visible";
    bagCount.innerText = bagCountItem.length;
  }

} 





let addToCart = (itemId) =>{
  
  
  
  bagCount.style.visibility = "visible";
  bagCountItem.push(itemId);
  bagCount.innerText = bagCountItem.length;
  localStorage.setItem("BagItems", JSON.stringify(bagCountItem))
  console.log(bagCountItem);
}



let inputSearch = document.getElementById("input-search");

if (inputSearch.nodeType === 1){
  inputSearch.addEventListener("input", ()=>{
  
    let allCards = document.querySelectorAll("#card");
  
    let inputValue = inputSearch.value.toLowerCase();
    Array.from(allCards).forEach((element) =>{
      let itemName = element.querySelector("#item-name").innerText.toLowerCase();
      let itemCompanyName = element.querySelector("#company-name").innerText.toLowerCase();
  
     
      
  
      if(itemName.includes(inputValue) || itemCompanyName.includes(inputValue)){
        
        element.style.display = "block";
      } else {
        
        element.style.display = "none";
      }
    })
  })
}

let nav = "show";
let hamBurger = document.getElementById("ham-burger");
let showNav = document.getElementById("show-nav")
hamBurger.addEventListener("click", ()=>{
  if(nav == "show"){
    showNav.style.display = "block";
    nav = "hide";
  }else{
    showNav.style.display = "none";
    nav = "show";
  }
})