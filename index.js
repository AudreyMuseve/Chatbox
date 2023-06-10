// Get the necessary DOM elements
const user1Input = document.getElementById("user1-input");
const user1Button = document.getElementById("user1-button");
const user2Input = document.getElementById("user2-input");
const user2Button = document.getElementById("user2-button");
const messageLog = document.getElementById("message-log");

// Add event listeners for send buttons
user1Button.addEventListener("click", sendMessage.bind(null, "user1"));
user2Button.addEventListener("click", sendMessage.bind(null, "user2"));

// Function to send a message
function sendMessage(user) {
  let inputElement;
  if (user === "user1") {
    inputElement = user1Input;
  } else if (user === "user2") {
    inputElement = user2Input;
  }

  const message = inputElement.value.trim();
  if (message !== "") {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(user === "user2" ? "user2" : "user1");

    const bubbleElement = document.createElement("div");
    bubbleElement.classList.add("bubble");
    bubbleElement.textContent = message;

    messageElement.appendChild(bubbleElement);
    messageLog.appendChild(messageElement);

    inputElement.value = "";
    messageLog.scrollTop = messageLog.scrollHeight;
  }
}
