// preloader
    // Smooth letter-by-letter animation
    const text = "Project Name";
    const typingText = document.getElementById("typing-text");

    let index = 0;

    function showNextLetter() {
      if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(showNextLetter, 100); // Speed of letter appearance
      }
    }

    // Run after load
    window.addEventListener("load", () => {
      setTimeout(() => {
        showNextLetter();
      }, 500); // Wait before typing starts

      // Hide loader and show main site after 3s
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
      }, 3000);
    });






    // Mobile menu toggle
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Top bar hide on scroll
    const topBar = document.getElementById('top-bar');
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        topBar.style.display = 'none';
      } else {
        topBar.style.display = 'flex';
      }
      lastScroll = currentScroll;
    });


    // Get buttons and menus
    const featuresBtn = document.getElementById('features-btn');
    const featuresMenu = document.getElementById('features-menu');
    const featuresIcon = featuresBtn.querySelector('svg');

    const loginBtn = document.getElementById('login-btn');
    const loginMenu = document.getElementById('login-menu');
    const loginIcon = loginBtn.querySelector('svg');

    // Toggle dropdowns on button click
    featuresBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent click from bubbling to document
      featuresMenu.classList.toggle('hidden');
      featuresIcon.classList.toggle('rotate-45');
      loginMenu.classList.add('hidden'); // close other dropdown if open
      loginIcon.classList.remove('rotate-45');
    });

    loginBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      loginMenu.classList.toggle('hidden');
      loginIcon.classList.toggle('rotate-45');
      featuresMenu.classList.add('hidden'); // close other dropdown if open
      featuresIcon.classList.remove('rotate-45');
    });

    // Close dropdowns if clicked outside
    document.addEventListener('click', () => {
      featuresMenu.classList.add('hidden');
      featuresIcon.classList.remove('rotate-45');
      loginMenu.classList.add('hidden');
      loginIcon.classList.remove('rotate-45');
    });