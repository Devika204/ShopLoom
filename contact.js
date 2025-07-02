document.getElementById("contactForm").addEventListener("submit", function(e) 
{
    e.preventDefault();
  
    // Print where the elements to be shown
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // if not filled condition code
    if (name == "" || email == "" || message == "") 
    {
      document.getElementById("response").textContent = "Please fill in all fields.";
      document.getElementById("response").style.color = "red";
      return;
    }
  
    // Save to localStorage
    const contactData = {
      name: name,
      email: email,
      message: message
    };
  
    let contacts = JSON.parse(localStorage.getItem("shoploom_contacts")) || [];
    contacts.push(contactData);
    localStorage.setItem("shoploom_contacts", JSON.stringify(contacts));
  
    // success message
    document.getElementById("response").textContent = "Thank you! We'll get back to you soon.";
    document.getElementById("response").style.color = "green";
  
    // Reset 
    document.getElementById("contactForm").reset();
  });
  