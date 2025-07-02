const categories = [
  { name: "Electronics", image: "Image/app8.png" },
  { name: "Fashion", image: "Image/app2.png" },
  { name: "Home & Kitchen", image: "Image/app6.png" },
  { name: "Beauty", image: "Image/app9.png" },
  { name: "Books", image: "Image/app10.png" },
  { name: "Sports", image: "Image/app11.png" },
  { name: "Toys", image: "Image/app3.png" },
  { name: "Grocery", image: "Image/app12.png" },
];

// Print where the elements to be shown
const categoryList = document.getElementById("categoryList");
const searchInput = document.getElementById("searchInput");
const noResult = document.getElementById("noResult");

function Category(filtered) 
{
  // display the list of products when searching
  categoryList.innerHTML = "";
  if (filtered.length == 0) 
    {
    noResult.style.display = "block";
  }

  // displaying the products like cards
  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.name}</h3>
    `;
    card.onclick = () => {
      window.location.href = "Dashboard.html";
    };
    categoryList.appendChild(card);
  });
}

Category(categories);

// check user typing in the search box.
searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = categories.filter(item => item.name.toLowerCase().includes(term));
  Category(filtered);
});
