/*=============================================================
  MyPortfolio — vanilla JS
  Converted from the original React components:
  Header.jsx, DarkMode.jsx, TextDecrypt.jsx (+ TypeAnimation),
  Qualification.jsx, Work.jsx/Projects.jsx, ScrollUp.jsx
==============================================================*/

document.addEventListener("DOMContentLoaded", () => {
  /*=============== SHOW MENU (mobile) ===============*/
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  /*=============== ACTIVE LINK ===============*/
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active-link"));
      link.classList.add("active-link");
    });
  });

  /*=============== CHANGE HEADER BACKGROUND ON SCROLL ===============*/
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== DARK MODE ===============*/
  const darkModeToggle = document.getElementById("darkmode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", (e) => {
      document.body.setAttribute("data-theme", e.target.checked ? "dark" : "light");
    });
  }

  /*=============== TEXT DECRYPT EFFECT (name) ===============*/
  const decryptChars = [
    "-", ".", "/", "*", "!", "?", "#", "%", "&", "@", "$", "€",
    "(", ")", "[", "]", "{", "}", "<", ">", "~",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  ];

  function decryptText(el, finalText, interval = 50) {
    let iteration = 0;
    const totalLoops = finalText.length + 6; // small scramble buffer per character
    clearInterval(el._decryptTimer);

    el._decryptTimer = setInterval(() => {
      el.textContent = finalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration) return finalText[index];
          return decryptChars[Math.floor(Math.random() * decryptChars.length)];
        })
        .join("");

      if (iteration >= finalText.length) {
        clearInterval(el._decryptTimer);
        el.textContent = finalText;
      }
      iteration += 1 / 3;
    }, interval);
  }

  const decryptNameEl = document.getElementById("decrypt-name");
  if (decryptNameEl) {
    const nameText = "Vaibhav Barnwal";
    decryptText(decryptNameEl, nameText);
    decryptNameEl.addEventListener("click", () => decryptText(decryptNameEl, nameText));
  }

  /*=============== TYPE ANIMATION (subtitle) ===============*/
  function typeAnimation(el, sequence, speed = 40) {
    let seqIndex = 0;

    function typeNext() {
      const text = sequence[seqIndex];

      // Non-string entries in the sequence are pause durations (ms)
      if (typeof text !== "string") {
        seqIndex = (seqIndex + 1) % sequence.length;
        setTimeout(typeNext, text);
        return;
      }

      let charIndex = 0;
      el.textContent = "";

      function typeChar() {
        if (charIndex <= text.length) {
          el.textContent = text.slice(0, charIndex);
          charIndex++;
          setTimeout(typeChar, speed);
        } else {
          seqIndex = (seqIndex + 1) % sequence.length;
          setTimeout(typeNext, 300);
        }
      }

      typeChar();
    }

    typeNext();
  }

  const typeEl = document.getElementById("type-animation");
  if (typeEl) {
    typeAnimation(typeEl, [
      "Web Developer",
      3000,
      "React Developer",
      3000,
      "FullStack Developer",
      3000,
    ]);
  }

  /*=============== QUALIFICATION TABS ===============*/
  const tabButtons = document.querySelectorAll(".qualification__button");
  const tabContents = document.querySelectorAll(".qualification__content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target.replace("#", "");

      tabContents.forEach((content) => {
        content.classList.toggle(
          "qualification__content-active",
          content.dataset.content === target
        );
      });

      tabButtons.forEach((btn) => btn.classList.remove("qualification__active"));
      button.classList.add("qualification__active");
    });
  });

  /*=============== WORK / PROJECTS RENDER + FILTER ===============*/
  const workContainer = document.getElementById("work-container");
  const filterButtons = document.querySelectorAll(".work__item");

  function renderProjects(list) {
    if (!workContainer) return;
    workContainer.innerHTML = list
      .map(
        (project) => `
        <div class="project__card">
          <img src="${project.image}" alt="${project.name}" class="project__img" />
          <div class="project__data">
            <h3 class="project__title">${project.name}</h3>
            <p class="project__description">${project.description}</p>
            <ul class="tags">
              ${project.stacks.map((stack) => `<li>${stack}</li>`).join("")}
            </ul>
            <div class="project__links">
              <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project__button">Live</a>
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project__button">GitHub</a>
            </div>
          </div>
        </div>`
      )
      .join("");
  }

  // `projects` comes from projects.js, loaded before this file.
  if (typeof projects !== "undefined") {
    renderProjects(projects);
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active-work"));
      button.classList.add("active-work");

      const filter = button.dataset.filter;
      const filtered =
        filter === "All" ? projects : projects.filter((p) => p.category === filter);
      renderProjects(filtered);
    });
  });

  /*=============== SCROLL UP ===============*/
  const scrollUp = document.getElementById("scroll-up");
  if (scrollUp) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 700) scrollUp.classList.add("show-scroll");
      else scrollUp.classList.remove("show-scroll");
    });
  }
});
