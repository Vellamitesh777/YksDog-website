let slider = document.querySelector('.slider');
let list = document.querySelector('.list');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let items = document.querySelectorAll('.list .item');
let count = items.length;
let active = 1;

function updateItemWidth() {
  return items[0].offsetWidth + 20; // 20 = approx gap/margin
}

function runCarousel() {
  let width_item = updateItemWidth();
  prev.style.display = (active == 0) ? 'none' : 'block';
  next.style.display = (active == count - 1) ? 'none' : 'block';

  document.querySelectorAll('.item').forEach((item) => item.classList.remove('active'));
  items[active].classList.add('active');

  let leftTransform = width_item * (active - 1) * -1;
  list.style.transform = `translateX(${leftTransform}px)`;
}

next.onclick = () => {
  active = active >= count - 1 ? count - 1 : active + 1;
  runCarousel();
};

prev.onclick = () => {
  active = active <= 0 ? 0 : active - 1;
  runCarousel();
};

runCarousel();


// ✅ Add Swipe Support for Mobile
let touchStartX = 0;
let touchEndX = 0;

list.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

list.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX - 30) {
    // Swipe Left
    if (active < count - 1) {
      active++;
      runCarousel();
    }
  }
  if (touchEndX > touchStartX + 30) {
    // Swipe Right
    if (active > 0) {
      active--;
      runCarousel();
    }
  }
}

// ⚠️ Optional: Circle text effect (only if element with ID 'circle' exists)
let circle = document.getElementById('circle');
if (circle) {
  let textCircle = circle.innerText.split('');
  circle.innerText = '';
  textCircle.forEach((value, key) => {
    let newSpan = document.createElement("span");
    newSpan.innerText = value;
    let rotateThisSpan = (360 / textCircle.length) * (key + 1);
    newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg');
    circle.appendChild(newSpan);
  });
}
