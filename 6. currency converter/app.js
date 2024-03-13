let countrySelect = document.querySelectorAll(".country-img");
let convertBtn = document.querySelector("#conv-btn");
let fromInput = document.querySelector(".from select");
let toInput = document.querySelector(".to select");

//Step 1 select the selectInput and show the countryList Items


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

  // Step 2 select the option to SelectInput 

  select.addEventListener("change", (evt)=>{
    showImg(evt.target);
  })
}

// Step 3 Fetch and show the country image

let showImg = (element)=>{

  let countryName = element.value;
  let currCodeImg = countryList[countryName];
  let imgKey = `https://flagsapi.com/${currCodeImg}/flat/48.png`
  let showCurrImg = element.parentElement.querySelector("img");
  showCurrImg.src = imgKey;
}




// let apiKey = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

// Step 4 get the input value and convert the currency

convertBtn.addEventListener("click", async (e)=>{
  let inputVal = document.querySelector(".amount input").value;
  
  if(inputVal === "" || inputVal < 1){
    inputVal = 1;
  }

  fetchCurrency(inputVal)

})

// step 5 fetch the latest currency rates and show 



let showOutput = document.querySelector(".show-result p");

let fetchCurrency =  async (e) =>{
  // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromInput.value.toLowerCase()}/${toInput.value.toLowerCase()}.json`

  const url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${fromInput.value.toLowerCase()}&to=${toInput.value.toLowerCase()}&amount=${e}`;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'f84317269dmshfdc52c63f6016c0p1ee7adjsn8fc9abd24dd7',
          'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com'
      }
  };
  
  try {
      const response = await fetch(url, options);
      const result = await response.json();

      let newHtml = `${e} ${fromInput.value} to ${Math.round(result.result)} ${toInput.value}`
 
  showOutput.innerText = newHtml;
  } catch (error) {
      console.error(error);
  }
  

  // let promise = await fetch(url);
  // let response = await promise.json();


  
 
}


