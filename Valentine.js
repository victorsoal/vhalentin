const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const heartsContainer = document.getElementById('hearts-container');

// Floating hearts effect
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (15 + Math.random() * 25) + 'px';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 300);

// No button
noBtn.addEventListener('click', () => {
  alert("Oh… maybe next time 😅");
});

// Yes button
yesBtn.addEventListener('click', () => {
  // Show popup
  alert("Yay! 💖 You accepted!");

  // Redirect to WhatsApp
  // Your number: 07035356591 (Nigeria)
  const whatsappNumber = "2347035356591"; // include country code
  const message = encodeURIComponent("Hey baby, I have accepted to be your Valentine! 💖");
  window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
});
