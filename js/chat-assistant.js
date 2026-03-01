// Simple Chat Assistant Widget
const chatWidget = document.createElement('div');
chatWidget.id = 'chat-assistant';
chatWidget.style.position = 'fixed';
chatWidget.style.right = '24px';
chatWidget.style.bottom = '24px';
chatWidget.style.width = '340px';
chatWidget.style.maxHeight = '480px';
chatWidget.style.background = '#181826';
chatWidget.style.borderRadius = '16px';
chatWidget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)';
chatWidget.style.zIndex = '9999';
chatWidget.style.display = 'flex';
chatWidget.style.flexDirection = 'column';
chatWidget.style.overflow = 'hidden';
chatWidget.innerHTML = `
  <div style="background:#7C3AED;color:#fff;padding:14px 18px;font-weight:700;font-size:1.1rem;display:flex;align-items:center;gap:8px">
    <span>💬</span> Festora Assistant
    <button id="chat-close" style="margin-left:auto;background:none;border:none;color:#fff;font-size:1.2rem;cursor:pointer">×</button>
  </div>
  <div id="chat-messages" style="flex:1;padding:16px;overflow-y:auto;font-size:0.98rem;color:#eee"></div>
  <form id="chat-form" style="display:flex;padding:12px 16px;background:#23233a;gap:8px">
    <input id="chat-input" type="text" placeholder="Ask me anything..." style="flex:1;padding:8px 12px;border-radius:8px;border:none;font-size:1rem;background:#181826;color:#fff" autocomplete="off" />
    <button type="submit" style="background:#7C3AED;color:#fff;border:none;padding:8px 16px;border-radius:8px;font-weight:600;cursor:pointer">Send</button>
  </form>
`;
document.body.appendChild(chatWidget);

const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatClose = document.getElementById('chat-close');

chatClose.onclick = () => chatWidget.remove();

function addMessage(text, sender = 'user') {
  const msg = document.createElement('div');
  msg.style.marginBottom = '10px';
  msg.style.textAlign = sender === 'user' ? 'right' : 'left';
  msg.innerHTML = `<span style="background:${sender==='user'?'#7C3AED':'#23233a'};color:#fff;padding:8px 12px;border-radius:8px;display:inline-block;max-width:80%">${text}</span>`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.onsubmit = (e) => {
  e.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;
  addMessage(question, 'user');
  chatInput.value = '';
  setTimeout(() => {
    addMessage('Sorry, I am a demo assistant. I cannot answer real questions yet.', 'bot');
  }, 700);
};

addMessage('Hi! I am Festora Assistant. How can I help you?', 'bot');
