// ===== PROJECT SECTION =====
const projects = [
  {
    title: "Youtube-Clone (React App)",
    img: "assets/img/Youtube-Clone.png",
    desc: "A React-based YouTube clone with video playback, search, and channel browsing features. Utilizes YouTube Data API. Built with React, HTML, CSS, JavaScript."
  },
  {
    title: "Blockchain-Based Degree Verification System",
    img: "assets/img/Blockchain-Based Degree Verification System.jpg",
    desc: "A secure platform for verifying academic degrees using blockchain and SHA-256 hashes. Built with HTML, CSS, JavaScript."
  },
  {
    title: "Responsive Portfolio Website",
    img: "assets/img/portfolio.png",
    desc: "A visually engaging, mobile-friendly portfolio website with animations and integrated contact form."
  },
  {
    title: "Product Landing Page",
    img: "assets/img/Product Landing Page.jpg",
    desc: "Modern animated landing page with call-to-actions, smooth scrolling, and responsive layout."
  },
  {
    title: "Student Portal UI",
    img: "assets/img/Student Portal UI.jpg",
    desc: "Responsive student portal UI for managing courses, attendance, and grades."
  },
  {
    title: "RoPlant Website",
    img: "assets/img/ro.png",
    desc: "A responsive website for RO water services, using HTML, CSS, and JS."
  },
  {
    title: "Kanban Board",
    img: "assets/img/Kanban Board.jpg",
    desc: "Task management app using JS to track workflow stages like To-Do, In Progress, Done."
  }
];

const container = document.getElementById("projectContainer");

projects.forEach((p) => {
  const div = document.createElement("div");
  div.className = "project-card";
  div.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <h3 class="project-title">${p.title}</h3>
    <p class="project-description">${p.desc}</p>
    <button class="project-btn" onclick="alert('${p.title}\\n\\n${p.desc}')">More about this project</button>
  `;
  container.appendChild(div);
});

// ===== CONTACT FORM =====
function handleSubmit(event) {
  setTimeout(() => {
    const message = document.getElementById("statusMessage");
    if (message) message.style.display = "block";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }, 100);
}

// ===== MOBILE NAV =====
const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

// ===== ACTIVE SECTION HIGHLIGHT =====
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    const sectionId = current.getAttribute("id");
    const sectionLink = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`
    );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionLink.classList.add("active-link");
    } else {
      sectionLink.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ===== SCROLL REVEAL ANIMATIONS =====
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200
});

sr.reveal(".intro-text, .intro-text2, .home__img, .section-title", {});
sr.reveal(".expertise-card, .exp-card, .edu-card, .project-card", { interval: 200 });
