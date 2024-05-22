let url = "https://fakestoreapi.com/products/";
productshow();

async function productshow (){
  let promise = await fetch(url);
  console.log("waiting....");
  let response = await promise.json();
  console.log(response);


  displayProducts(response);

  
}


function displayProducts(item){

console.log(item);

  let productContainer = document.getElementById("product-container")


  let newHtml = "";

  for(i=0; i<10; i++){
    newHtml += `
    <div class="w-[220px] flex flex-col justify-center items-start" id="card" style="margin:2.5rem;">
    <img src="${item[i].image}" alt="" width="150px">
    <div class="font-bold text-sm my-1">
      4.5 ⭐ | 1400
    </div>
    <div class="font-bold text-lg my-1" id="company-name">Carlton London</div>
    <div class="font-sans text-slate-600 text-sm my-1" id="item-name">Rhodium-Plated CZ Floral Studs</div>
    <div class="my-1">
      <span class="font-bold text-sm">Rs.606</span>
      <span class="text-gray-500 text-[12px] line-through">Rs 1045</span>
      <span class="text-orange-700 text-[12px]">(42% off)</span>
    </div>
    <button class="px-4 py-2 text-black bg-transparent border-black border-2 border-solid hover:text-white hover:bg-black rounded-md my-4 transition delay-200 duration-400 ease-in-out" onclick="addProduct()">Add to Cart</button>
  </div>
    `
  }

  productContainer.innerHTML = newHtml;
}





