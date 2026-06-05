let up = document.getElementById("up");
let ad = document.getElementById("ad");

up.style.display = "none";

let arr = [];
let total = 0;
let editIndex = null;

function display() {
  total = 0;

  let history = document.getElementById("history");
  history.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let div = document.createElement("div");
    div.className = "item";

    let p = document.createElement("p");
    p.innerText = arr[i];
    div.appendChild(p);

    total = total + arr[i];

    let editBtn = document.createElement("button");
    editBtn.innerText = "edit";
    editBtn.onclick = function () {
      editExpense(i);
    };

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.onclick = function () {
      deleteExpense(i);
    };
    div.appendChild(editBtn);
    div.appendChild(delBtn);
    history.appendChild(div);
  }
  document.getElementById("total").innerHTML = total;
}

function addExpense() {
  let amountValue = document.getElementById("amount").value.trim();
  let amount = Number(amountValue);
  if (amountValue === "" || Number.isNaN(amount)) {
    return;
  }

  arr.push(amount);
  document.getElementById("amount").value = "";
  display();
}

function deleteExpense(index) {
  arr.splice(index, 1);
  display();
}

function editExpense(index) {
  editIndex = index;
  document.getElementById("amount").value = arr[index];
  up.style.display = "inline";
  ad.style.display = "none";
}

function updateExpense() {
  let amountValue = document.getElementById("amount").value.trim();
  let amount = Number(amountValue);
  if (amountValue === "" || Number.isNaN(amount) || editIndex === null) {
    return;
  }

  arr[editIndex] = amount;
  editIndex = null;
  up.style.display = "none";
  ad.style.display = "inline";
  document.getElementById("amount").value = "";
  display();
}
