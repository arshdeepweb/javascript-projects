let countrySelect = document.querySelectorAll(".country-img");
let convertBtn = document.querySelector("#conv-btn");
let fromInput = document.querySelector(".from select");
let toInput = document.querySelector(".to select");



for(let select of countrySelect){
  for(let country in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = country;
    newOption.value = country;
    if(select.name === "from" && country === "USD"){
      newOption.selected = "selected";
    } else if(select.name === "to" && country === "INR"){
      newOption.selected = "selected";
    }


    select.append(newOption);
    
  }

  select.addEventListener("change", (evt)=>{
    showImg(evt.target);
  })
}

let showImg = (element)=>{

  let countryName = element.value;
  let currCodeImg = countryList[countryName];
  let imgKey = `https://flagsapi.com/${currCodeImg}/flat/48.png`
  let showCurrImg = element.parentElement.querySelector("img");
  showCurrImg.src = imgKey;
}


let apiKey = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

convertBtn.addEventListener("click", async (e)=>{
  let inputVal = document.querySelector(".amount input").value;
  
  if(inputVal === "" || inputVal < 1){
    inputVal = 1;
  }

  fetchCurrency(inputVal)

})

let showOutput = document.querySelector(".show-result p");

let fetchCurrency =  async (e) =>{
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromInput.value.toLowerCase()}/${toInput.value.toLowerCase()}.json`
  

  let promise = await fetch(url);
  let response = await promise.json();


  let newHtml = `${e} ${fromInput.value} to ${Math.round(response[toInput.value.toLowerCase()])*e} ${toInput.value}`
 
  showOutput.innerText = newHtml;
 
}


//