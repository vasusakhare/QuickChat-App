const socket = io();

const clientsTotal = document.getElementById('client-total');

const messageContainer = document.getElementById('message-container');
const nameInput = document.getElementById('name-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

const messageTone = new Audio('/message-tone.mp3');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendMessage();
});

// Socket.IO event: Update the total number of clients
socket.on('clients-total', (data) => {
  clientsTotal.innerText = `Total Clients: ${data}`;
});

// Function to send a chat message
function sendMessage() {
  if (messageInput.value === '') return;

  const data = {
    name: nameInput.value,
    message: messageInput.value,
    dateTime: new Date(),
  };

  socket.emit('message', data);
  addMessageToUI(true, data);
  messageInput.value = '';
}

// Socket.IO event: Receive chat messages from other users
socket.on('chat-message', (data) => {
  messageTone.play();
  addMessageToUI(false, data);
});

// Function to add chat messages to the UI
function addMessageToUI(isOwnMessage, data) {
  clearFeedback();

  const element = `
    <li class="${isOwnMessage ? 'message-right' : 'message-left'}">
      <p class="message">
        ${data.message}
        <span>${data.name} ● ${moment(data.dateTime).fromNow()}</span>
      </p>
    </li>
  `;

  messageContainer.innerHTML += element;
  scrollToBottom();
}

// Function to scroll the message container to the bottom
function scrollToBottom() {
  messageContainer.scrollTo(0, messageContainer.scrollHeight);
}

// Emit feedback when the user is typing a message
messageInput.addEventListener('focus', () => {
  socket.emit('feedback', {
    feedback: `✍️ ${nameInput.value} is typing a message`,
  });
});

messageInput.addEventListener('keypress', () => {
  socket.emit('feedback', {
    feedback: `✍️ ${nameInput.value} is typing a message`,
  });
});

messageInput.addEventListener('blur', () => {
  socket.emit('feedback', {
    feedback: '',
  });
});

// Socket.IO event: Receive feedback from other users typing a message
socket.on('feedback', (data) => {
  clearFeedback();

  const element = `
    <li class="message-feedback">
      <p class="feedback" id="feedback">${data.feedback}</p>
    </li>
  `;

  messageContainer.innerHTML += element;
});

// Function to clear feedback messages
function clearFeedback() {
  document.querySelectorAll('li.message-feedback').forEach((element) => {
    element.parentNode.removeChild(element);
  });
}
