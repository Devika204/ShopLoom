class Product 
{
  constructor(name, image, price, desc) 
  {
    this.name = name;
    this.image = image;
    this.price = price;
    this.desc = desc;
  }

  // Creating the product card
  createCard() 
  {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${this.image}" alt="${this.name}">
      <div class="info">
        <h3>${this.name}</h3>
        <p>${this.desc}</p>
        <div class="price">${this.price}</div>
      </div>
    `;
    return card;
  }
}

// Create product objects
const products = [
  new Product("Wireless Headphones", "Image/app13.png", "$59.99", "Bluetooth 5.0, Noise Cancelling"),
  new Product("Smart Watch", "Image/app14.png", "$89.99", "Heart-rate, GPS, Water-proof"),
  new Product("Stylish Sneakers", "Image/app15.png", "$49.99", "Comfortable & Lightweight"),
  new Product("Modern Lamp", "Image/app16.png", "$29.99", "LED, Touch control"),
  new Product("Backpack", "Image/app17.png", "$39.99", "Waterproof, Durable"),
  new Product("Gaming Mouse", "Image/app18.png", "$24.99", "RGB, Ergonomic"),
];

const productList = document.getElementById("productList");
const searchBox = document.getElementById("searchBox");
const noResult = document.getElementById("noResult");

// Display products function
function Products(filtered) 
{
  // Clear previous content
  productList.innerHTML = "";

  // If no results, show message
  if(filtered.length == 0) 
  {
    noResult.style.display = "block";
  } 
  else 
  {
    noResult.style.display = "none";
    filtered.forEach(product => {
      productList.appendChild(product.createCard());
    });
  }
}

Products(products);

// Search functionality
searchBox.addEventListener("input", () => {
  const value = searchBox.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(value));
  Products(filtered);
});

// CONVERTER CODE
// Performs currency conversion
async function convertCurrency() 
{
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  // Amount to be a positive number
  if(!amount || amount <= 0) 
  {
    alert("Enter a valid amount");
    return;
  }

  try 
  {
    // Fetch exchange rate data from the API using the selected "from" currency
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    // Convert the response to JSON format
    const data = await response.json();
    // Get the conversion rate for the selected "to" currency
    const rate = data.rates[to];
    // Calculate the converted amount and round it to 2 decimal places
    const converted = (amount * rate).toFixed(2);
    document.getElementById("result").innerText = `${amount} ${from} = ${converted} ${to}`;
  } 
  catch (error) 
  {
    // If error
    document.getElementById("result").innerText = "Error fetching data";
  }
}
