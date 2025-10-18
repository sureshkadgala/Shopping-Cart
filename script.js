const products = [
  {
    id: 1,
    name: "Hertfoid Upholstered Chair",
    price: 101,
    image: "images/1.png",
    slug: "hertfoid-upholstered-chair",
  },
  {
    id: 2,
    name: "Abingdon Upholstered Chair Swivel",
    price: 151,
    image: "images/2.png",
    slug: "abingdon-upholstered-chair-swivel",
  },
  {
    id: 3,
    name: "Jeses Minimore Modern Style Etta",
    price: 181,
    image: "images/3.png",
    slug: "jeses-minimore-modern-style-etta",
  },
  {
    id: 4,
    name: "JJeses Minimore Modern Style",
    price: 201,
    image: "images/4.png",
    slug: "jjeses-minimore-modern-style",
  },
  {
    id: 5,
    name: "Bolanle Upholstered Armchair",
    price: 251,
    image: "images/5.png",
    slug: "bolanle-upholstered-armchair",
  },
  {
    id: 6,
    name: "Jaqueze Upholstered Armchair",
    price: 111,
    image: "images/6.png",
    slug: "jaqueze-upholstered-armchair",
  },
  {
    id: 7,
    name: "Leston Wide Upholstered Fabric",
    price: 121,
    image: "images/7.png",
    slug: "leston-wide-upholstered-fabric",
  },
  {
    id: 8,
    name: 'Stephanny 27.5" Wide Tufted',
    price: 220,
    image: "images/8.png",
    slug: "stephanny-275-wide-tufted-armchair",
  },
  {
    id: 1,
    name: "Hertfoid Upholstered Chair",
    price: 101,
    image: "images/1.png",
    slug: "hertfoid-upholstered-chair",
  },
];

function displayProducts() {
  let productDiv = document.getElementById("products");
  productDiv.innerHTML = "";

  products.forEach((product) => {
    let productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.innerHTML = ` <img class="img" src="${product.image}" alt="img" />
          <p class="p1">${product.name}</p>
          <p class="p2">${product.price}</p>
          <button class="add">Add to Cart</button>`;
    productDiv.appendChild(productContainer);
  });
}
displayProducts();
