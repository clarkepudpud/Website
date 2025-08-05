const upload = document.getElementById('profileUpload');
const preview = document.getElementById('profilePreview');

// ==== New Section Toggle Logic ====
document.addEventListener("DOMContentLoaded", function () {
  const sections = ['home', 'about', 'projects', 'experience', 'contact', 'myai'];
  const navLinks = document.querySelectorAll('.nav-menu a');
  const homeBtn = document.getElementById('homeBtn');
  const titleClick = document.getElementById('titleClick');

  function showSection(idToShow) {
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        section.style.display = (id === idToShow) ? 'block' : 'none';
      }
    });
  }

  // Initial: show only home
  showSection('home');

  // Home button (name click)
  homeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    showSection('home');
  });

  // Developer title also clickable
  titleClick.addEventListener('click', function () {
    showSection('home');
  });

  // Nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      showSection(targetId);
    });
  });
});
