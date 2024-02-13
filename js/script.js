const saveBtn = document.querySelector(".notes__btn-sub");
const deleteBtn = document.querySelector(".notes__btn-delete");
const itemInputs = document.querySelectorAll(".notes__input");
const items = document.querySelector(".notes__aside-items");
const itemTextArea = document.querySelector(".notes__textarea");
const targetItems = document.querySelectorAll(".note__aside-item");
let itemObject = [];
if (localStorage.getItem("item")) {
  itemObject = JSON.parse(localStorage.getItem("item"));
}

addItem();
saveBtn.addEventListener("click", () => {
  const title = itemInputs[0].value;
  const data = itemInputs[1].value;
  const tags = itemInputs[2].value;
  const text = itemTextArea.value;
  itemObject.push({
    title,
    data,
    tags,
    text,
  });
  addItem();

  clearInputs();
});

function addItem() {
  let itemsList = "";
  itemObject.forEach((item, i) => {
    const { title, data, tags, text } = item;
    const html = `<div class="note__aside-item" href="#">
   <div class="note__aside-top">
     <h3 class="note__aside-title">
       ${title}
     </h3>
     <div class="note__aside-date">
       ${data}
     </div>
   </div>
   <div class="note__aside-bot">
    <div class="note__aside-tag">
       ${tags}
     </div>
     <div class="note__aside-text">
      ${text}
     </div>
   </div>
   <button class="notes__btn-delete" onclick=" itemObject.splice(${i}, 1); addItem();  ">Delete</button>
</div>`;
itemsList += html;
});
localStorage.setItem("item", JSON.stringify(itemObject));
document.querySelector(".notes__aside-items").innerHTML = itemsList;
}
function clearInputs() {
  itemInputs.forEach((input) => {
    input.value = "";
  });
  itemTextArea.value = "";
}
