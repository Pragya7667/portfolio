/**
 * ============================================================================
 * PRAGYA SONI — PORTFOLIO CONFIGURATION & INTERACTIVE LOGIC
 * ============================================================================
 */

const PORTFOLIO_DATA = {
  // Recipient email for working contact form
  recipientEmail: "sonipragya7667@gmail.com",

  // 1. Typing Animation Phrases
  typingRoles: [
    "Artificial Intelligence & Machine Learning",
    "Full Stack Web Development",
    "Natural Language Processing & GenAI",
    "Data Analytics & Fuzzy Decision Systems"
  ],

  // 2. Technical Skills
  skills: [
    {
      category: "Programming",
      badge: "Core Languages",
      items: [
        { name: "Python", focus: "AI/ML & Scripting", barFill: 90 },
        { name: "C++", focus: "DSA & Problem Solving", barFill: 82 },
        { name: "C", focus: "Foundational Systems", barFill: 78 },
        { name: "Java", focus: "OOP & Core Concepts", barFill: 76 }
      ]
    },
    {
      category: "Web Development",
      badge: "Full Stack",
      items: [
        { name: "HTML", focus: "Semantic Markup", barFill: 92 },
        { name: "CSS", focus: "Responsive & Modern UI", barFill: 88 },
        { name: "JavaScript", focus: "ES6+ & DOM Engineering", barFill: 85 },
        { name: "Django", focus: "Backend & REST APIs", barFill: 78 }
      ]
    },
    {
      category: "AI / ML",
      badge: "Intelligence",
      items: [
        { name: "Machine Learning", focus: "Predictive Modeling", barFill: 86 },
        { name: "Deep Learning", focus: "Neural Architectures", barFill: 80 },
        { name: "NLP", focus: "Text Processing & Matching", barFill: 84 },
        { name: "Generative AI & Prompt Engineering", focus: "LLM Workflows", barFill: 88 }
      ]
    },
    {
      category: "Data & Databases",
      badge: "Analytics",
      items: [
        { name: "SQL & MySQL", focus: "Relational Queries", barFill: 84 },
        { name: "MongoDB", focus: "NoSQL Document Store", barFill: 76 },
        { name: "Pandas & NumPy", focus: "Data Wrangling", barFill: 86 },
        { name: "Data Analysis", focus: "Insights & Mining", barFill: 85 }
      ]
    },
    {
      category: "Tools & Platforms",
      badge: "Workflow",
      items: [
        { name: "Git & GitHub", focus: "Version Control", barFill: 88 },
        { name: "VS Code", focus: "Primary IDE", barFill: 92 },
        { name: "Google Colab", focus: "Cloud GPU Notebooks", barFill: 88 },
        { name: "Jupyter Notebook", focus: "Interactive Research", barFill: 90 }
      ]
    }
  ],

  // 3. Projects (Clean showcase cards without live demo buttons)
  projects: [
    {
      number: "PROJECT 01",
      bannerClass: "banner-1",
      visualTag: "NLP • Career Intelligence Engine",
      title: "AI-Powered Resume–Job Matching and Career Recommendation System",
      features: [
        "Automated resume parsing and structured competency extraction.",
        "Semantic job description matching using AI/NLP techniques.",
        "Actionable skill gap analysis against target industry roles.",
        "Personalized career path and upskilling recommendations."
      ],
      tags: ["Python", "NLP", "Machine Learning", "AI Matching"]
    },
    {
      number: "PROJECT 02",
      bannerClass: "banner-2",
      visualTag: "Generative AI • EdTech Assistant",
      title: "AI-Powered Student Study Assistant",
      features: [
        "Conversational AI chatbot tailored for academic workflows.",
        "Real-time student doubt solving across technical subjects.",
        "Structured study tips and concise subject notes generation.",
        "Powered by Google Gemini API with Python and Streamlit."
      ],
      tags: ["Python", "Streamlit", "Gemini API", "Generative AI"]
    },
    {
      number: "PROJECT 03",
      bannerClass: "banner-3",
      visualTag: "UI/UX • Frontend Architecture",
      title: "Dynamic Personal Portfolio",
      features: [
        "Responsive mobile-first layout with dark/light theme switching.",
        "Interactive glassmorphism UI and scroll-triggered animations.",
        "Data-driven sections for effortless project and skill updates.",
        "Working contact integration with instant email dispatch."
      ],
      tags: ["HTML5", "CSS3", "Vanilla JS", "Responsive UI"]
    }
  ],

  // 4. Certifications (Clean credential cards without view modal/buttons)
  certifications: [
    {
      issuer: "Infosys Springboard",
      title: "AI, Deep Learning, NLP & Generative AI Certification",
      description: "Covers Artificial Intelligence, Deep Learning, Computer Vision, Prompt Engineering, and Agile Scrum."
    },
    {
      issuer: "TCS iON",
      title: "TCS Certifications (Career Edge & Technical Readiness)",
      description: "Industry-aligned certification in professional communication, analytical thinking, and IT fundamentals."
    },
    {
      issuer: "GeeksforGeeks",
      title: "Data Structures, Algorithms & Problem Solving",
      description: "Consistent algorithmic problem solving and coding challenge completion."
    },
    {
      issuer: "PDST",
      title: "PDST Diploma in Computer Science",
      description: "Foundational diploma covering programming principles, software tools, and computing systems."
    },
    {
      issuer: "SAE India",
      title: "SAE Certification",
      description: "Technical engineering and innovation participation credential."
    },
    {
      issuer: "GAO Tek Inc.",
      title: "AI Tech Writer & Data Mining Internship Certificate",
      description: "Awarded upon successful completion of a 3-month remote internship in AI research and data mining."
    },
    {
      issuer: "AI / ML & Hackathons",
      title: "Additional AI/ML & Technical Certifications",
      description: "Includes Generative AI coursework and technical hackathon credentials."
    }
  ],

  // 5. Optional EmailJS Credentials (Works out-of-the-box via mailto/Gmail even without these)
  emailJS: {
    publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
    serviceId: "YOUR_EMAILJS_SERVICE_ID",
    templateId: "YOUR_EMAILJS_TEMPLATE_ID"
  }
};

/* ============================================================================
   INITIALIZATION ON DOM LOAD
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileMenu();
  initTypingEffect();
  renderSkills();
  renderProjects();
  renderCertifications();
  initScrollEffects();
  initCustomCursor();
  initContactForm();

  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* ==================== 1. THEME TOGGLE (DARK / LIGHT) ==================== */
function initThemeToggle() {
  const htmlEl = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";

  htmlEl.setAttribute("data-theme", savedTheme);

  toggleBtn?.addEventListener("click", () => {
    const current = htmlEl.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  });
}

/* ==================== 2. MOBILE NAVIGATION ==================== */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger?.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      hamburger?.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==================== 3. TYPING ANIMATION ==================== */
function initTypingEffect() {
  const target = document.getElementById("typed-text");
  if (!target) return;

  const phrases = PORTFOLIO_DATA.typingRoles;
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function tick() {
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      charIdx--;
      target.textContent = currentPhrase.substring(0, charIdx);
    } else {
      charIdx++;
      target.textContent = currentPhrase.substring(0, charIdx);
    }

    let delay = isDeleting ? 40 : 75;

    if (!isDeleting && charIdx === currentPhrase.length) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      delay = 350;
    }

    setTimeout(tick, delay);
  }

  tick();
}

/* ==================== 4. DYNAMIC SKILLS RENDERING ==================== */
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skills
    .map(
      (group) => `
      <article class="skill-card glass-card reveal">
        <div class="skill-card-header">
          <h3>${group.category}</h3>
          <span class="skill-category-badge">${group.badge}</span>
        </div>
        <div class="skill-items">
          ${group.items
            .map(
              (skill) => `
            <div class="skill-row">
              <div class="skill-row-top">
                <span>${skill.name}</span>
                <span class="skill-focus-tag">${skill.focus}</span>
              </div>
              <div class="progress-track" role="progressbar" aria-label="${skill.name}" aria-valuenow="${skill.barFill}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-fill" data-width="${skill.barFill}%"></div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </article>
    `
    )
    .join("");
}

/* ==================== 5. DYNAMIC PROJECTS RENDERING ==================== */
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects
    .map(
      (proj) => `
      <article class="project-card glass-card reveal">
        <div class="project-banner ${proj.bannerClass}">
          <span class="project-num">${proj.number}</span>
          <span class="project-visual-label">${proj.visualTag}</span>
        </div>
        <div class="project-body">
          <h3>${proj.title}</h3>
          <ul class="project-features">
            ${proj.features.map((feat) => `<li>${feat}</li>`).join("")}
          </ul>
          <div class="tag-group">
            ${proj.tags.map((tag) => `<span class="tech-tag">${tag}</span>`).join("")}
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

/* ==================== 6. DYNAMIC CERTIFICATIONS RENDERING ==================== */
function renderCertifications() {
  const container = document.getElementById("certifications-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.certifications
    .map(
      (cert) => `
      <article class="cert-card glass-card reveal">
        <div>
          <span class="cert-issuer">${cert.issuer}</span>
          <h3>${cert.title}</h3>
          <p>${cert.description}</p>
        </div>
      </article>
    `
    )
    .join("");
}

/* ==================== 7. SCROLL REVEAL, ACTIVE NAV, COUNTERS & BACK-TO-TOP ==================== */
function initScrollEffects() {
  const revealElements = document.querySelectorAll(".reveal");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTopBtn = document.getElementById("back-to-top");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("in-view");

        entry.target.querySelectorAll(".progress-fill").forEach((bar) => {
          bar.style.width = bar.getAttribute("data-width");
        });

        entry.target.querySelectorAll(".metric-number").forEach((counter) => {
          if (counter.dataset.animated === "true") return;
          counter.dataset.animated = "true";
          animateCounter(counter);
        });
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;

      if (backToTopBtn) {
        backToTopBtn.classList.toggle("visible", scrollY > 450);
      }

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { passive: true }
  );

  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-target"), 10) || 0;
  const duration = 900;
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(update);
}

/* ==================== 8. CUSTOM DESKTOP CURSOR ==================== */
function initCustomCursor() {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring) return;

  window.addEventListener("mousemove", (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    ring.style.left = `${e.clientX}px`;
    ring.style.top = `${e.clientY}px`;
  });

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, input, textarea, .glass-card")) {
      ring.classList.add("hovered");
    } else {
      ring.classList.remove("hovered");
    }
  });
}

/* ==================== 9. WORKING CONTACT FORM ==================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");
  if (!form || !statusEl) return;

  const { publicKey, serviceId, templateId } = PORTFOLIO_DATA.emailJS;
  const isEmailJSConfigured =
    publicKey !== "YOUR_EMAILJS_PUBLIC_KEY" &&
    serviceId !== "YOUR_EMAILJS_SERVICE_ID" &&
    templateId !== "YOUR_EMAILJS_TEMPLATE_ID";

  if (isEmailJSConfigured && window.emailjs) {
    window.emailjs.init(publicKey);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      showFormStatus("error", "Please fill in all required fields before sending.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormStatus("error", "Please enter a valid email address.");
      return;
    }

    if (isEmailJSConfigured && window.emailjs) {
      try {
        submitBtn.disabled = true;
        submitBtn.querySelector("span").textContent = "Sending...";

        await window.emailjs.sendForm(serviceId, templateId, form);
        showFormStatus("success", "Message sent successfully! Pragya Soni will get back to you soon.");
        form.reset();
      } catch (error) {
        triggerMailtoFallback(name, email, subject, message);
      } finally {
        submitBtn.disabled = false;
        submitBtn.querySelector("span").textContent = "Send Message";
      }
      return;
    }

    triggerMailtoFallback(name, email, subject, message);
  });

  function triggerMailtoFallback(name, email, subject, message) {
    const to = PORTFOLIO_DATA.recipientEmail;
    const formattedBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;
    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;

    window.location.href = mailtoUrl;

    showFormStatus(
      "success",
      `Your message is ready to send to <strong>${to}</strong>! If your mail app didn't open automatically, <a href="${gmailWebUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">click here to send via Gmail Web</a>.`
    );
    form.reset();
  }

  function showFormStatus(type, htmlMessage) {
    statusEl.className = `form-status ${type}`;
    statusEl.innerHTML = htmlMessage;
  }
}
