let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
      <div id="notes" class="row container-fluid">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <button href="#" class="btn btn-danger">Delete</button>
              <button href="#" class="btn btn-success">Update</button>
          </div>
      </div>
  </div>`;
    });

    let notesElem = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    } else {
        notesElem.innerHTML = "Nothing to show!!";
    }
}