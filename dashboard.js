// General products list
const generalProducts = [
  { name: "Wireless Bluetooth Speaker"},
  { name: "Noise Cancelling Headphones" },
  { name: "USB-C Power Bank" },
  { name: "Smartwatch" },
  { name: "Laptop Stand" },
  { name: "Ring Light with Tripod" },
  { name: "Portable SSD/Hard Drive" },
  { name: "Webcam (1080p/4K)" },
  { name: "Gaming Mouse & Keyboard" },
  { name: "Waterproof Backpack" },
  { name: "Travel Organizer Set" },
  { name: "Foldable Camping Chair" },
  { name: "InsCartElementsListated Water Bottle" },
  { name: "Portable Tent" },
  { name: "Power Inverter for Car" },
  { name: "Compact Sleeping Bag" },
  { name: "LED Strip Lights" },
  { name: "Essential Oil Diffuser" },
  { name: "Touch Control Night Lamp" },
  { name: "Automatic Soap Dispenser" },
  { name: "Smart Plugs" },
  { name: "Digital Alarm Clock" },
  { name: "Cordless Vacuum Cleaner" },
  { name: "Reusable Notebook" },
  { name: "Foldable Laptop Table" },
  { name: "Ergonomic Foot Rest" },
  { name: "Posture Corrector" },
  { name: "Mini Projector" },
  { name: "Indoor Plants" },
  { name: "MCartElementsListti-charging Cable" }
];

// electronics Products list
const electronicsProducts = [
  { name: "Smartphone (Android/iOS)" },
  { name: "Laptop (Gaming/Work)" },
  { name: "Tablet with Stylus" },
  { name: "Smartwatch" },
  { name: "Bluetooth Earbuds" },
  { name: "Wireless Headphones" },
  { name: "Portable Bluetooth Speaker" },
  { name: "Smart LED TV (4K)" },
  { name: "DSLR Camera" },
  { name: "Wi-Fi Router" },
  { name: "USB Flash Drive (128GB+)" },
  { name: "External Hard Drive (1TB+)" },
  { name: "Power Bank (10000mAh+)" },
  { name: "Smart Home Plug" },
  { name: "Alexa / Google Assistant Device" },
  { name: "Electric Kettle" },
  { name: "Microwave Oven" },
  { name: "Air Purifier" },
  { name: "Fitness Tracker Band" },
  { name: "Gaming Console (PS/Xbox/Switch)" },
  { name: "Wireless Keyboard & Mouse" },
  { name: "LED Desk Lamp with USB" },
  { name: "Mini Projector" },
  { name: "Surge Protector Extension Board" },
  { name: "Action Camera (GoPro-style)" }
];

// female Products list
const femaleProducts = [
  { name: "Floral Print Maxi Dress" },
  { name: "High Waist Skinny Jeans" },
  { name: "Oversized Denim Jacket" },
  { name: "Leather Handbag" },
  { name: "Ankle Boots" },
  { name: "Chunky Hoop Earrings" },
  { name: "Stylish Sunglasses" },
  { name: "Trendy Crop Top" },
  { name: "Beauty Blender Set" },
  { name: "Makeup Organizer Box" },
  { name: "Compact Hair Straightener" },
  { name: "Mini Facial Steamer" },
  { name: "Nude Lipstick Set" },
  { name: "Perfume for Women" },
  { name: "Korean Skincare Kit" },
  { name: "Crossbody Sling Bag" },
  { name: "Canvas Tote Bag" },
  { name: "Embroidered Kurti" },
  { name: "Yoga Pants / Leggings" },
  { name: "Designer Scarves" },
  { name: "Nail Art Kit" },
  { name: "Women's Smartwatch" },
  { name: "Bluetooth Earbuds (Pink Edition)" },
  { name: "Wireless Charging Makeup Mirror" }
];

// male Products list
const maleProducts = [
  { name: "Casual Slim Fit Shirt" },
  { name: "Leather Wallet" },
  { name: "Formal Trousers" },
  { name: "Cotton Round Neck T-shirt" },
  { name: "Hoodie / Zip-up Sweatshirt" },
  { name: "Aviator Sunglasses" },
  { name: "Baseball Cap" },
  { name: "Classic Denim Jacket" },
  { name: "White Sneakers" },
  { name: "Formal Leather Shoes" },
  { name: "Running Shoes" },
  { name: "Loafers" },
  { name: "Beard Trimmer Kit" },
  { name: "Electric Shaver" },
  { name: "Beard Oil & Balm" },
  { name: "Deodorant Spray" },
  { name: "Men’s Perfume" },
  { name: "Hair Styling Gel" },
  { name: "Face Wash for Men" },
  { name: "Laptop Backpack" },
  { name: "RFID Card Holder" },
  { name: "Leather Belt" },
  { name: "Men’s Gym Bag" },
  { name: "Smartwatch" },
  { name: "Gaming Controller" },
  { name: "Portable Charger" }
];

// kitchen Essentials list
const kitchenEssentials = [
  { name: "Non-stick Frying Pan" },
  { name: "Stainless Steel Saucepan" },
  { name: "Pressure Cooker" },
  { name: "Induction Cooktop" },
  { name: "Cast Iron Skillet" },
  { name: "Tawa / Flat Griddle" },
  { name: "Baking Tray Set" },
  { name: "Knife Set with Stand" },
  { name: "Chopping Board" },
  { name: "Vegetable Peeler" },
  { name: "Grater & Zester" },
  { name: "Kitchen Tongs" },
  { name: "Measuring Cups & Spoons" },
  { name: "Rolling Pin" },
  { name: "Whisk & Ladle Set" },
  { name: "Glass Food Storage Containers" },
  { name: "Spice Jars Set" },
  { name: "Airtight Containers" },
  { name: "Oil Dispenser Bottle" },
  { name: "Fridge Organizers" },
  { name: "Lunch Box with Compartments" },
  { name: "Blender / Mixer Grinder" },
  { name: "Electric Kettle" },
  { name: "Toaster / Sandwich Maker" },
  { name: "Microwave Oven" },
  { name: "Rice Cooker" },
  { name: "Coffee Maker" },
  { name: "Ceramic Dinner Set" },
  { name: "Cutlery Set" },
  { name: "Serving Bowls" },
  { name: "Glass Set" },
  { name: "Soup Mugs" },
  { name: "Wooden Trays" },
  { name: "Coasters" }
];

// storing the elements in local storage as object on empty box
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
// display products
function ProductList(products, targetId) 
{
  const container = document.getElementById(targetId);
  container.innerHTML = "";

  // creating like cards and buttons
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// adding the items
function addToCart(item) 
{
  cartItems.push(item);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  Cart();
}

// removing the item
function removeItem(index) 
{
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  Cart();
}

// removing every item
function clearCart() 
{
  cartItems = [];
  localStorage.removeItem("cart");
  Cart();
}

// displays the cart items
function Cart() 
{
  const CartElementsList = document.getElementById("cartList");
  CartElementsList.innerHTML = "";
  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${index + 1}. ${item}
      <button onclick="removeItem(${index})">Remove</button>
    `;
    CartElementsList.appendChild(li);
  });
}

// Remove every item
document.getElementById("clearCartBtn").addEventListener("click", clearCart);

window.onload = function () 
{
  ProductList(generalProducts, "productList");
  ProductList(femaleProducts, "femaleProductList");
  ProductList(maleProducts, "maleProductList");
  ProductList(kitchenEssentials, "KitchenEssentialsList");
  ProductList(electronicsProducts, "ElectronicsproductList");  
  Cart();
};
