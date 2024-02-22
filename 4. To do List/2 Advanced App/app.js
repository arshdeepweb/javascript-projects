let writeNote = document.querySelector("#write-note");
let addBtn = document.querySelector("#add-note-btn");
let displayNotes = document.querySelector(".note-cards");
let searchNotes = document.querySelector("#search");


let allNotes = [];
document.addEventListener("DOMContentLoaded", () => {
  let notes = localStorage.getItem("notes");
  if (notes !== null) {
    allNotes = JSON.parse(notes);
    showNotes();
  }
  
});

addBtn.addEventListener("click", () => {
  let addNote = writeNote.value;
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    allNotes = [];
  } else {
    allNotes = JSON.parse(notes);
  }

  allNotes.push(writeNote.value);
  localStorage.setItem("notes", JSON.stringify(allNotes));
  writeNote.value = "";

  showNotes();
});

function showNotes(){
  let newHtml = "";

  for (let i = 0; i < allNotes.length; i++) {
    newHtml +=
      `
    <div class="card">
      <span>${allNotes[i]}</span>
      <button id="delete-note-btn" onclick="deleteItem(${i})">Delete</button>
    </div>
    `;

  }

  displayNotes.innerHTML = newHtml;
};


let deleteItem = (index) =>{
  allNotes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(allNotes));
  showNotes();
}

searchNotes.addEventListener("input", ()=>{
  let searchInput = searchNotes.value.toLowerCase();
  let allCards = document.querySelectorAll(".card");
  Array.from(allCards).forEach((element)=>{
    let paraNotes = element.querySelector('span').innerText.toLowerCase();

    if(paraNotes.includes(searchInput)){
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }

  })

  console.log(searchInput);
})

