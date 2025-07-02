// Hover Animation for category
document.querySelectorAll('.category').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = '0.3s';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Add hover effect to cards 
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = '0.3s';
        card.style.boxShadow = '15px 15px 15px gray';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});
    
// show alert with product name
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        let productName = card.querySelector('.card-title').textContent;
        alert(`You clicked on: ${productName}`);
    });
});
    
// alert for subscribing
document.querySelector("form").addEventListener("submit", function() 
{
    alert("You Have Successfully Subscribed!");
});
    
const today = new Date();
document.getElementById("date").innerHTML = today.toLocaleString('en-US');