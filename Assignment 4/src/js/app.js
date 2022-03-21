/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <YOUR_NAME>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
window.addEventListener("load", () => {
  let menu = document.querySelector("#menu");
  let ul = document.createElement("ul");
  let tbody = document.querySelector("#category-products");
  let selectedCategory = document.querySelector("#selected-category");
  buttonClickListener(categories[0]);
  categories.forEach((element) => {
    let item = document.createElement("li");
    let btnCat = document.createElement("button");

    btnCat.addEventListener(
      "click",
      function () {
        buttonClickListener(element);
      },
      true
    );

    btnCat.innerText = element.name;

    item.appendChild(btnCat);
    ul.appendChild(item);
  });
  menu.appendChild(ul);

  function buttonClickListener(category) {
    console.log(category);
    tbody.innerHTML = "";
    selectedCategory.innerText = category.name;

    let filteredProducts = products.filter(
      (product) => product.categories.includes(category.id) && !product.discontinued
    );
    console.log(filteredProducts);

    filteredProducts.forEach((element) => {
      let tr = document.createElement("tr");

      let tdTitle = document.createElement("td");
      let tdDesc = document.createElement("td");
      let tdPrice = document.createElement("td");

      tdTitle.innerText = element.title;
      tdDesc.innerText = element.description;
      tdPrice.innerText = "$" + element.price / 100;

      tr.appendChild(tdTitle);
      tr.appendChild(tdDesc);
      tr.appendChild(tdPrice);

      tbody.appendChild(tr);
    });
  }
});
