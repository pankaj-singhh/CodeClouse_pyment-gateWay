
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;
    const amount = document.getElementById("amount").value;
  
    if (amount.length > 5) {
      alert("Payment cancelled. Amount cannot exceed 5 digits.");
      return;
    }
  
    const transactionId = generateTransactionId();
    const datePaid = getCurrentDate();
    const receipt = document.getElementById("receipt");
  
    // Generate a random background color
    const randomColor = getRandomColor();
    receipt.style.backgroundColor = randomColor;
  
    document.getElementById("transactionIdValue").textContent = transactionId;
    document.getElementById("nameValue").textContent = name;
    document.getElementById("cardNumberValue").textContent = cardNumber;
    document.getElementById("expiryValue").textContent = expiry;
    document.getElementById("cvvValue").textContent = cvv;
    document.getElementById("amountPaidValue").textContent = amount;
    document.getElementById("datePaidValue").textContent = datePaid;
    document.getElementById("paymentMethodValue").textContent = "Credit Card";
  
    document.getElementById("paymentForm").classList.add("hidden");
    receipt.classList.remove("hidden");
  });
  
  function generateTransactionId() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let transactionId = "";
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      transactionId += characters.charAt(randomIndex);
    }
  
    return transactionId;
  }
  
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }