let inputNotes = document.querySelector("#to-do-input");
let addBtn = document.querySelector("#add-btn");
let displayNotes = document.querySelector(".item-container");
let inputDate = document.querySelector("#to-do-date");



let collectNotes = [];

//Step 1 add work list

addBtn.addEventListener("click", ()=>{


    let addNotes = inputNotes.value;
    let addDate = inputDate.value;
    collectNotes.push({addNotes,addDate});

    console.log(collectNotes);
    inputNotes.value = "";
    inputDate.value = "";

    showItems();
})

// step 2 show work list and delete

function showItems(){

    let newHtml = "";

    for(let i=0; i<collectNotes.length; i++){
        newHtml += `
        <div class="check-line">
        <input type="checkbox" onclick="complete(${i})">
        <span>${collectNotes[i].addNotes}</span>
        <span>${collectNotes[i].addDate}</span>
        <button onclick="collectNotes.splice(${i},1); showItems() ">Delete</button>
      </div>
    `
    }

    displayNotes.innerHTML = newHtml;
}

// step 3 checkbox tick and complete work

let choice = [];

let complete = (i)=>{
    let checkLine = document.querySelectorAll(".check-line")[i];

    if (!choice[i]) {
        checkLine.classList.add('check');
        choice[i] = true;
    }else{
        checkLine.classList.remove('check');
        choice[i] = false;
    }
}


