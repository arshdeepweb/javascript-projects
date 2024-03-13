let type = document.querySelector("#entry-type");
let name = document.querySelector("#name");
let amount = document.querySelector("#amount");
let submitBtn = document.querySelector("#submit-btn");
let balanceItem = document.querySelector("#balance-item");
let tableBody = document.getElementById("table-body");


let tableItems = [];



submitBtn.addEventListener("click", ()=>{
  event.preventDefault();
  let itemName = name.value;
  let itemAmount = amount.value;
  let itemType = type.value;

  tableItems.push({itemName,itemAmount,itemType});
  name.value = "";
  amount.value = "";
  showBalance();
})


let showType = (tableItems) => {
  

    if (tableItems.itemType === "income") {
      return `<img src="./media/2.png" alt="" width="25px">`;
    } else if(tableItems.itemType === "expense"){
      return `<img src="./media/1.png" alt="" width="25px">`;
    }
};


let showBalance = () => {
  let newHtml = "";
  
  for(let i=0; i<tableItems.length; i++){

    let srNo = i + 1;
    newHtml += `<tr>
      <td>${srNo}</td>
      <td>${tableItems[i].itemName}</td>
      <td>${tableItems[i].itemAmount}</td>
      <td>${showType(tableItems[i])} </td>
      <td onclick="deleteItem(${i})"><i class="fa-solid fa-trash-can"></i></td>
    </tr>`;
  };
  
  tableBody.innerHTML = newHtml;
};

let deleteItem = (delItem) =>{
  tableItems.splice(delItem, 1);
  showBalance();
}


