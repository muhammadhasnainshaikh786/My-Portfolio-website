//project section code:

const projects = [
  {
    title: "Blockchain-Based Degree Verification System",
    img: "assets/img/Blockchain-Based Degree Verification System.jpg",
    desc: "A secure platform for verifying academic degrees using blockchain and SHA-256 hashes. Built with HTML, CSS, JavaScript."
  },
  {
    title: "Responsive Portfolio Website",
    img: "assets/img/portfolio.png",
    desc: "A visually engaging, mobile-friendly portfolio website with animations, image gallery, and integrated contact form."
  },
  {
    title: "Product Landing Page",
    img: "assets/img/Product Landing Page.jpg",
    desc: "Modern animated landing page with call-to-actions, smooth scrolling, and responsive layout."
  },
  {
    title: "Student Portal UI",
    img: "assets/img/Student Portal UI.jpg",
    desc: "Responsive portal UI for managing courses, attendance, grades, and academic tasks."
  },
  {
    title: "Library Management System",
    img: "assets/img/lib.jpg",
    desc: "CRUD-based PHP/MySQL app for managing books and student records efficiently."
  },
  {
    title: "Hospital Management System",
    img: "assets/img/Hospital Management System.jpg",
    desc: "System for handling patients, appointments, and staff using PHP/MySQL backend."
  },
  {
    title: "RoPlant Website",
    img: "assets/img/ro.png",
    desc: "A responsive site for an RO water business including ordering, product info, and testimonials."
  },
  {
    title: "To-Do List",
    img: "assets/img/todo.png",
    desc: "Simple localStorage-based task manager with due dates and priority levels."
  },
  {
    title: "Kanban Board",
    img: "assets/img/Kanban Board.jpg",
    desc: "Task organizer with draggable columns (To Do, In Progress, Done)."
  },
  {
    title: "Spotify Landing Page (UI Clone)",
    img: "assets/img/Spotify Landing Page (UI Clone).png",
    desc: "Cloned UI of Spotify using React JSX & responsive layout."
  },
  {
    title: "Simple Chat Interface",
    img: "assets/img/Simple Chat Interface.png",
    desc: "Minimal frontend chat UI with message history and input box."
  },
  {
    title: "Blockchain Learning App",
    img: "assets/img/bc.png",
    desc: "Educational app featuring blockchain notes, links, quizzes, and challenges."
  }
];

const container = document.getElementById("projectContainer");

projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "project-card";
  div.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <h3 class="project-title">${p.title}</h3>
    <p class="project-description">${p.desc}</p>
    <button class="project-btn" onclick="alert('${p.title}\\n\\n${p.desc.replace(/'/g, "\\'")}')">More about this project</button>
  `;
  container.appendChild(div);
});


function handleSubmit(event) {
  setTimeout(() => {
    // Show success message
    const message = document.getElementById("statusMessage");
    if (message) {
      message.style.display = "block";
    }

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }, 100); // Delay ensures form is submitted before clearing
}

/*===== When the hamburger icon (nav-toggle) is clicked, it shows/hides the mobile menu (nav-menu).
 Helps your portfolio be mobile responsive =====*/ 
            const showMenu = (toggleId, navId) => 
            {
                const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId)

                if(toggle && nav){
                    toggle.addEventListener('click', ()=>{
                        nav.classList.toggle('show')
                    })
                }
            }
            showMenu('nav-toggle','nav-menu')

           
  /*==================== As you scroll, the navbar link for the current section gets highlighted.
  Helps users know where they are on the page. ====================*/
            const sections = document.querySelectorAll('section[id]')
            const scrollActive = () =>
        {
                const scrollDown = window.scrollY

            sections.forEach(current =>{
                    const sectionHeight = current.offsetHeight,
                        sectionTop = current.offsetTop - 58,
                        sectionId = current.getAttribute('id'),
                        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
                    
                    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                        sectionsClass.classList.add('active-link')
                    }else{
                        sectionsClass.classList.remove('active-link')
                    }                                                    
                })
        }
            window.addEventListener('scroll', scrollActive)

 /*Adds animation to various elements (fade-in, slide, etc.) as they scroll into view.
 Uses the ScrollReveal.js library. */
            const sr = ScrollReveal
            ({
                origin: 'top',
                distance: '60px',
                duration: 2000,
                delay: 200,
                //reset: true
            });

            sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
            sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
            sr.reveal('.home__social-icon',{ interval: 200}); 
            sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
 //    ----------------------------------------------------------------------------------
       
 //    DOM loaded event waits until HTML is fully loaded.           
    document.addEventListener("DOMContentLoaded", function () {
    const typingContainer = document.getElementById("typing-container");
    const caretContainer = document.getElementById("caret-container");
 // Array of text lines to simulate code typing
    const codeLines = [
    "// # Blockchain Enthusiast",
    "// # Passionate Frontend Developer",
    "// # Routine: EAT -> CODE -> Sleep -> repeat.",
    "// # Technically I Am Into Technology.",

    "class Hasnain {",
    "  constructor() {",
    "    this.name = 'Muhammad Hasnain';",
    "    this.email = 'shkhasnain55@gmail.com';",
    "    this.pnoneNo = '+92 336 3445501'; ",
    "  }",
    "",
    "  work_experience() {",
    "    return [",
    "      { 'Intern Frontend development   @Alfabolt H11-Islamabad  |July 2025  -Sep 2025  |On-site' },",
    "      { 'Intern Frontend development   @Softxcape developers    |April 2025 -July 2025 |Remote'  },",
    "      { 'Intern Frontend Development   @codeAlpha               |Feb 2025   -May 2025  |Remote'  },",
    "      { 'Intern Frontend development   @Cetura                  |June 2025  -July 2025 |Remote'  },",
    "      { 'Sales & marketing Coordinator @Zamzama DW LLC          |Feb 2024   -Present   |Hybrid'  }",
    "      { 'Freelancer                    @Freelancer.com          |June 2022  -Nov 2023  |Remote'  }",
    "    ];",
    "  }",
    "",
    "  education() {",
    "    return [",
    "      { '2020-2022': 'FSC part 1 & 2 from Degree collage larkana, Sindh, pakistan'}",
    "      { '2022-2026': 'Bachelor of Science in Computer Science from Bahria University, Islamabad, Pakistan' }",
    "    ];",
    "  }",
    "",
    "  skills() {",
    "    return [",
    "    Frontend Development:   'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.JS', 'Next.js'",
    "    Blockchain Development: 'Blockchain ', 'Ethereum','Solidity', 'Web3.js'",
    "    Technologies:  'Git', 'GitHub', 'VS Code', 'Visual Studio', 'Jupyter Notebooks'",      
    "    Soft Skills: 'Presentation', 'Planning', 'Organized'",'Creative Problem-Solving', 'Teamwork',
    "    Additional skiils working on:  'C++', 'Data Structures', 'PHP', 'Database management system'",
    "    ];",
    "  }",
    "}"
  ];
 //Show typing container once everything is ready
  let index = 0;
  typingContainer.style.display = "block";
 // Dynamically creates one <div> line at a time and inserts it in the code area.
  function typeLine() 
    {
      if (index < codeLines.length) 
     {
      const lineElement = document.createElement("div");
      lineElement.classList.add("line");
      lineElement.textContent = codeLines[index];

       // Highlights keywords (class, return, this) and animates them line by line.      if (codeLines[index].includes("class ")) lineElement.innerHTML = codeLines[index].replace("class", `<span class='keyword'>class</span>`);
      if (codeLines[index].includes("constructor")) lineElement.innerHTML = codeLines[index].replace("constructor", `<span class='function-name'>constructor</span>`);
      if (codeLines[index].includes("this.")) lineElement.innerHTML = codeLines[index].replace(/this\.(\w+)/g, `<span class='parameter'>this</span>.<span class='property'>$1</span>`);
      if (codeLines[index].includes("return")) lineElement.innerHTML = codeLines[index].replace("return", `<span class='keyword'>return</span>`);
      if (codeLines[index].includes("=>")) lineElement.innerHTML = codeLines[index].replace("=>", `<span class='operator'>=></span>`);

      typingContainer.insertBefore(lineElement, caretContainer);
      index++;
      setTimeout(typeLine, 450);
     }
    }

  typeLine(); 
  });

 // Uses IntersectionObserver API to start the typing animation only when the user scrolls to the “AboutMe” section.
            const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    container.style.display = "block"; // Show the container
                    typeLine(); // Start typing animation
                    observer.unobserve(entry.target); // Stop observing after animation starts
                }
                });
            },
            { threshold: 0.5 }
            );
            observer.observe(document.getElementById("AboutMe"));
 //Clicking on "Read More" shows hidden content below it and hides the link.
            document.addEventListener('DOMContentLoaded', function() {
            const readMoreLinks = document.querySelectorAll('.read-more');
            
            readMoreLinks.forEach(link => {
                link.addEventListener('click', function() {
                    const hiddenContent = this.nextElementSibling;
                    if (hiddenContent) {
                        hiddenContent.style.display = 'block';
                        this.style.display = 'none';
                    }
                });
            });


            const container = document.getElementById("typing-container");
            const caretContainer = document.getElementById("caret-container");
            let lineIndex = 0;

            function typeLine() 
        {
            if (lineIndex < lines.length) {
                container.insertBefore(document.createElement("div"), caretContainer);
                caretContainer.previousSibling.innerHTML = lines[lineIndex];
                lineIndex++;
                setTimeout(typeLine, 200); // delay for typing effect
              }
        }

        
 //   Displays a message saying "Form Submitted" or something similar after 100ms of delay. Useful for simulating form success feedback

    function showSuccessMessage() 
    {
      setTimeout(() => {
      const message = document.getElementById("statusMessage");
      if (message) {
      message.style.display = "block";
        }
       }, 100); // Slight delay to mimic form submit process
    }


});

