const toggle = document.querySelector('.dark-light-switch');
const saved = localStorage.getItem('theme');
if (saved === 'dark') document.body.classList.add('dark');
toggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
document.querySelector('.copy-email')?.addEventListener('click', async (event) => {
  const button = event.currentTarget;
  await navigator.clipboard.writeText(button.dataset.email);
  button.textContent = 'Copied';
  setTimeout(() => { button.textContent = 'Copy'; }, 1400);
});
const progress = document.querySelector('#progress');
if (progress) addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? scrollY / max * 100 : 0) + '%';
});
