(() => {
  const data = window.portfolioData;
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

  const expertiseGrid = document.querySelector("#expertise-grid");
  expertiseGrid.innerHTML = data.expertise.map((item, index) => `
    <article class="expertise-card reveal">
      <span class="expertise-number">0${index + 1} / 05</span>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description)}</p>
      <div class="skill-tags">${item.skills.map((skill) => `<span>${escapeHTML(skill)}</span>`).join("")}</div>
    </article>
  `).join("");

  const experienceList = document.querySelector("#experience-list");
  experienceList.innerHTML = data.experience.map((item) => `
    <article class="timeline-item reveal">
      <p class="timeline-date">${escapeHTML(item.dates)}</p>
      <div class="timeline-body">
        <div class="timeline-topline"><h3>${escapeHTML(item.role)}</h3></div>
        <p class="timeline-org">${escapeHTML(item.organization)}</p>
        <details class="timeline-details">
          <summary>Role details</summary>
          <ul>${item.details.map((detail) => `<li>${escapeHTML(detail)}</li>`).join("")}</ul>
        </details>
      </div>
    </article>
  `).join("");

  const projectGrid = document.querySelector("#project-grid");
  projectGrid.innerHTML = data.projects.map((project) => `
    <article class="project-card reveal" data-category="${escapeHTML(project.category)}">
      <div class="project-art" data-art="${escapeHTML(project.art)}" aria-hidden="true">
        <span class="art-coordinates">${escapeHTML(project.period)}</span>
        <span class="art-orbit"></span><span class="art-core">DP<br>FIELD</span>
        <span class="project-art-label">${escapeHTML(project.artLabel)}</span>
      </div>
      <div class="project-info">
        <div class="project-meta"><span>${escapeHTML(project.categoryLabel)}</span><span>${escapeHTML(project.period)}</span></div>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.description)}</p>
        ${project.contribution ? `<p class="project-contribution">${escapeHTML(project.contribution)}</p>` : ""}
        <div class="project-tools">${project.tools.map((tool) => `<span>${escapeHTML(tool)}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");

  const educationList = document.querySelector("#education-list");
  educationList.innerHTML = data.education.map((item) => `
    <article class="education-item reveal">
      <span class="education-year">${escapeHTML(item.years)}</span>
      <div><h3>${escapeHTML(item.degree)}</h3><p>${escapeHTML(item.institution)}</p></div>
      <span class="education-result">${escapeHTML(item.result)}</span>
    </article>
  `).join("");

  document.querySelector("#current-year").textContent = new Date().getFullYear();

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-navigation");
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll(".filter-button").forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("is-active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });
      document.querySelectorAll(".project-card").forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });
  });

  const copyButton = document.querySelector(".copy-email");
  const copyStatus = document.querySelector("#copy-status");
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email);
      copyStatus.textContent = "Email address copied.";
    } catch {
      copyStatus.textContent = "Copy unavailable here. Use the email link above.";
    }
  });

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  const progressBar = document.querySelector("#scroll-progress");
  let progressFrame = 0;
  window.addEventListener("scroll", () => {
    if (progressFrame) return;
    progressFrame = window.requestAnimationFrame(() => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      progressBar.style.width = `${Math.min(100, progress)}%`;
      progressFrame = 0;
    });
  }, { passive: true });

  const trackedSections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`) link.classList.add("is-current");
          else link.classList.remove("is-current");
        });
      });
    }, { rootMargin: "-25% 0px -65% 0px" });
    trackedSections.forEach((section) => sectionObserver.observe(section));
  }
})();
