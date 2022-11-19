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
  let selectedCategory = document.querySelector("#selected-category");
  let container = document.querySelector(".container");

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
  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("card");

    const productImage = document.createElement("img");
    productImage.classList.add("product-img");
    productImage.src = product.imageUrl;
    card.appendChild(productImage);

    const productTitle = document.createElement("h2");
    productTitle.classList.add("product-title");
    productTitle.innerText = product.title;
    card.appendChild(productTitle);

    const productDescription = document.createElement("p");
    productDescription.innerText = product.description;
    card.appendChild(productDescription);

    const productPrice = document.createElement("h3");
    productPrice.classList.add("product-price");
    productPrice.innerText = product.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    card.appendChild(productPrice);

    return card;
  }
  function buttonClickListener(category) {
    console.log(category);
    container.innerHTML = "";
    selectedCategory.innerText = category.name;

    let filteredProducts = products.filter(
      (product) => product.categories.includes(category.id) && !product.discontinued
    );
    console.log(filteredProducts);

    filteredProducts.forEach((element) => {
      let card = createProductCard(element);
      card.addEventListener(
        "click",
        function () {
          console.log(element);
        },
        true
      );
      container.appendChild(card);
    });
  }
});
