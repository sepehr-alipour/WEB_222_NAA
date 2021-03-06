/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "GLTB",
    title: "Titan Black",
    description: "This gaming pc is assembled for low level graphic games",
    price: 20299,
    discontinued: false,
    categories: ["cgp"]
  },
  {
    id: "GLTBL",
    title: "Titan Blue",
    description: "This gaming pc is assembled for low level graphic games",
    price: 20299,
    discontinued: true,
    categories: ["cgp"]
  },
  {
    id: "GLTG",
    title: "Titan Green",
    description: "This gaming pc is assembled for low level graphic games",
    price: 20299,
    discontinued: false,
    categories: ["cgp"]
  },
  {
    id: "GMCB",
    title: "Commando Black",
    description: "This gaming pc is assembled for medium level graphic games",
    price: 59399,
    discontinued: false,
    categories: ["cgp"]
  },
  {
    id: "GMCBL",
    title: "Commando Blue",
    description: "This gaming pc is assembled for medium level graphic games",
    price: 59399,
    discontinued: false,
    categories: ["cgp"]
  },
  {
    id: "GMCG",
    title: "Commando Green",
    description: "This gaming pc is assembled for medium level graphic games",
    price: 59399,
    discontinued: true,
    categories: ["cgp"]
  },
  {
    id: "GHHB",
    title: "Hero Black",
    description: "This gaming pc is assembled for high level graphic games",
    price: 100499,
    discontinued: false,
    categories: ["cgp"]
  },
  {
    id: "GHHBL",
    title: "Hero Blue",
    description: "This gaming pc is assembled for high level graphic games",
    price: 100499,
    discontinued: false,
    categories: ["cgp"]
  },
  {
    id: "GHHG",
    title: "Hero Green",
    description: "This gaming pc is assembled for high level graphic games",
    price: 100499,
    discontinued: false,
    categories: ["cgp"]
  },
  {
    id: "OLTB",
    title: "Titan Black",
    description: "This office pc is assembled for low level graphic games",
    price: 20299,
    discontinued: false,
    categories: ["cop"]
  },
  {
    id: "OLTBL",
    title: "Titan Blue",
    description: "This office pc is assembled for low level graphic games",
    price: 20299,
    discontinued: true,
    categories: ["cop"]
  },
  {
    id: "OLTG",
    title: "Titan Green",
    description: "This office pc is assembled for low level graphic games",
    price: 20299,
    discontinued: false,
    categories: ["cop"]
  },
  {
    id: "OMCB",
    title: "Commando Black",
    description: "This office pc is assembled for medium level graphic games",
    price: 59399,
    discontinued: false,
    categories: ["cop"]
  },
  {
    id: "OMCBL",
    title: "Commando Blue",
    description: "This office pc is assembled for medium level graphic games",
    price: 59399,
    discontinued: false,
    categories: ["cop"]
  },
  {
    id: "OMCG",
    title: "Commando Green",
    description: "This office pc is assembled for medium level graphic games",
    price: 59399,
    discontinued: true,
    categories: ["cop"]
  },
  {
    id: "OHHB",
    title: "Hero Black",
    description: "This office pc is assembled for high level graphic games",
    price: 100499,
    discontinued: false,
    categories: ["cop"]
  },
  {
    id: "OHHBL",
    title: "Hero Blue",
    description: "This office pc is assembled for high level graphic games",
    price: 100499,
    discontinued: false,
    categories: ["cop"]
  },
  {
    id: "OHHG",
    title: "Hero Green",
    description: "This office pc is assembled for high level graphic games",
    price: 100499,
    discontinued: false,
    categories: ["cop"]
  },
  {
    id: "ASSD",
    title: "Solid State Drives",
    description: "120GB SATA III 2.5 Internal Solid State Drive SSD TLC",
    price: 3099,
    discontinued: false,
    categories: ["ca"]
  },
  {
    id: "ALBK",
    title: "Logitech Black Keyboard",
    description:
      "Gaming Keyboard Set, Wired USB Gaming Keyboard with Bright Rainbow Backlight and Glow Keys, 19-Key Anti-Ghosting, Plug & Play to Computer,Laptop,PC,Windows - UK Layout",
    price: 2099,
    discontinued: true,
    categories: ["ca"]
  },
  {
    id: "ALBM",
    title: "Logitech Black Mouse",
    description:
      "Gaming Mouse Set, Wired USB Gaming Mouse with Bright Rainbow Backlight and Glow Keys, 19-Key Anti-Ghosting, Plug & Play to Computer,Laptop,PC,Windows - UK Layout",
    price: 2099,
    discontinued: false,
    categories: ["ca"]
  }
];
