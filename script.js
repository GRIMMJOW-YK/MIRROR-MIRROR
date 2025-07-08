const startBtn = document.getElementById('startBtn');
const intro = document.getElementById('intro');
const mainContent = document.getElementById('mainContent');
const bgm = document.getElementById('bgm');

startBtn.addEventListener('click', () => {
  intro.style.display = 'none';
  mainContent.style.display = 'block';
  bgm.play();
});
