let bagContainer = document.querySelector("#bag-container");
let bagItemDetail = [];
onLoad();

function onLoad(){
  newBagItem();
  displayBagItems();
  bagSummary();

}


function newBagItem (){
  for(let item of bagCountItem){

    for(i=0; i<items.length; i++){
    
        if((item) == items[i].id){
          bagItemDetail.push(items[i]);
        }
        
      }
  }
}


function displayBagItems(){
  let newBagHtml = "";

  bagItemDetail.forEach(bagItem =>{
    newBagHtml += `
    <div class="lg:w-[80%] w-55% mx-10 mt-8 flex flex-col lg:flex-row justify-start p-4 border-slate-300 border-2 border-solid rounded-sm  " >
          
    <div class=" text-right cursor-pointer lg:hidden" >
    <span onclick="deleteItem(${bagItem[i]})">X</span>
  </div>
  <div class="mr-4">
    <img src="../${bagItem.image}" alt="produnt img" width="180px">
  </div>
  <div class="m-4 flex flex-col justify-center items-start">
    <div class="font-bold text-sm my-1 ">
    ${bagItem.rating.stars} ⭐ | ${bagItem.rating.count}
    </div>
    <div class="font-bold text-lg my-1">${bagItem.company}</div>
    <div class="font-sans text-slate-600 text-sm my-1">${bagItem.item_name}</div>
    <div class="my-1">
      <span class="font-bold text-sm">Rs.${bagItem.current_price}</span>
      <span class="text-gray-500 text-[12px] line-through">Rs ${bagItem.original_price}</span>
      <span class="text-orange-700 text-[12px]">(${bagItem.discount_percentage}% off)</span>
    </div>
  </div>
  <div class="lg:w-[24.5rem] lg:text-right text-right hidden cursor-pointer lg:block" >
    <span onclick="deleteItem(${bagItem[i]})">X</span>
  </div>
          
    </div>
    
    `
  })

  bagContainer.innerHTML = newBagHtml;
}


function deleteItem(val) {
  bagCountItem.splice(val,1);
  bagItemDetail.splice(val,1);
  localStorage.setItem("BagItems", JSON.stringify(bagCountItem));
  bagVisible();
  displayBagItems();
  bagSummary();
    
}


function bagSummary (){

let bagSummary = document.querySelector("#bag-summary");

    let bagItemNumber = bagItemDetail.length;
    let totalMRP = 0; 
    let disCount = 0;
    let shippingFee = 99;
    let totalAmount = 0;

  bagItemDetail.forEach(BagItem =>{
    totalMRP += BagItem.original_price;
    disCount += BagItem.original_price - BagItem.current_price;
    totalAmount = totalMRP - disCount + shippingFee; 
  })

    bagSummary.innerHTML = `
      <p class="text-sm font-medium text-slate-500 ">Product Details (${bagItemNumber} Items)</p>
      <div class="flex justify-between my-[2px] ">
        <p>Total MRP</p><p>${totalMRP}</p>
      </div>
      <div class="flex justify-between my-[2px] ">
        <p>Discount on MRP</p><p>${disCount}</p>
      </div>
      <div class="flex justify-between my-[2px] ">
        <p>Shipping Fee</p><p>${shippingFee}</p>
      </div>
      <hr class="font-extrabold my-3">
      <div class="flex justify-between my-[2px] ">
        <p>Total Amount</p><p>${totalAmount}</p>
      </div>
      <button class="py-3 my-1 text-white font-semibold bg-[#ff3f6c]">PLACE ORDER</button>`

  



}