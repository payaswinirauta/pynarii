// main.js
console.log("Pynarii JS Loaded");

// Toggle chatbot open/close
function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
  chatbot.style.flexDirection = "column";
}

// Send message and show dummy AI response
function sendMessage() {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatbotMessages");

  if (!input.value.trim()) return;

  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.innerText = input.value;
  messages.appendChild(userMsg);

  // Dummy response from bot
  const botMsg = document.createElement("div");
  botMsg.className = "bot-message";
  botMsg.innerText = "Hi! I'm your smart Pynarii assistant. Real AI replies will be added soon!";
  messages.appendChild(botMsg);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}
