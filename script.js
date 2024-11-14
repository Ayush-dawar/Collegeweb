// Function to handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission (page reload)
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Check if all fields are filled
    if (name && email && message) {
      // Simulate form submission success (this could be replaced with an actual backend API call)
      displayResponse("Thank you for reaching out, " + name + "! We will get back to you soon.", "success");
      document.getElementById("contact-form").reset(); // Reset form fields
    } else {
      // If any field is missing, show an error message
      displayResponse("Please fill out all fields before submitting.", "error");
    }
  });
  
  // Function to display the response message
  function displayResponse(message, type) {
    const responseContainer = document.createElement("div");
    responseContainer.classList.add("response");
  
    // Add different styles based on the response type
    if (type === "success") {
      responseContainer.style.backgroundColor = "#4CAF50"; // Green for success
      responseContainer.style.color = "white";
    } else if (type === "error") {
      responseContainer.style.backgroundColor = "#f44336"; // Red for error
      responseContainer.style.color = "white";
    }
  
    responseContainer.innerText = message;
  
    // Append the response to the body or a specific section (for example, below the form)
    document.body.appendChild(responseContainer);
  
    // Remove the response message after 5 seconds
    setTimeout(() => {
      responseContainer.remove();
    }, 5000);
  }
  