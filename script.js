const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Highlight active link when scrolling
const links = document.querySelectorAll('#navbar a[href^="#"]');
const sections = Array.from(links).map(link =>
  document.querySelector(link.getAttribute('href'))
);

function onScroll() {
  const y = window.scrollY + 120; // offset so it's below sticky header
  let activeIndex = 0;

  sections.forEach((sec, i) => {
    if (sec && sec.offsetTop <= y) {
      activeIndex = i;
    }
  });

  links.forEach((link, i) => {
    link.classList.toggle('active', i === activeIndex);
  });
}

window.addEventListener('scroll', onScroll);
onScroll();