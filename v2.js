(() => {
  const original = window.showSection;
  if (typeof original !== 'function') return;
  window.showSection = (section) => {
    sessionStorage.setItem('anthology-v2-section', section);
    original(section);
    document.querySelectorAll('.nav-btn').forEach((button) => {
      button.setAttribute('aria-pressed', button.classList.contains('active') ? 'true' : 'false');
    });
  };
  const selected = sessionStorage.getItem('anthology-v2-section');
  if (selected) window.showSection(selected);
})();
