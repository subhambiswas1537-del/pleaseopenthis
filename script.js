document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // envelope open on letter page
  const envelope = document.querySelector('.envelope');
  const letterPaper = document.querySelector('.letter-paper');
  if (envelope && letterPaper) {
    envelope.addEventListener('click', () => {
      envelope.classList.add('open');
      setTimeout(() => {
        letterPaper.classList.add('show');
        letterPaper.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 400);
    });
  }
});
