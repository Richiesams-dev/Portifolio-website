// Portfolio Data
const projects = [
  {
    id: 1,
    name: "Chamber of Commerce",
    description:
      "A website for a local chamber of commerce to showcase their services and events.",
    photo_url:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    code: "https://github.com/Richiesams-dev/wdd231/blob/main/chamber",
    liveDemo: "https://richiesams-dev.github.io/wdd231/chamber/",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "web",
    featured: true,
    completion_date: "2024-01-15",
  },
  {
    id: 2,
    name: "Online Ordering Program",
    description:
      "A C# application that allows users to place orders online for a fictional restaurant.",
    photo_url:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    code: "https://github.com/Richiesams-dev/cse210-hw/blob/main/week04/OnlineOrdering/Program.cs",
    liveDemo:
      "https://richiesams-dev.github.io/JS_projects/Online-Ordering-System/",
    technologies: ["C#"],
    category: "desktop",
    featured: true,
    completion_date: "2025-10-05",
  },
  {
    id: 3,
    name: "WDD 231 - Home Page",
    description:
      "A home page for a web development course showcasing various projects and assignments.",
    photo_url:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    code: "https://github.com/Richiesams-dev/wdd231/blob/main/",
    liveDemo: "https://richiesams-dev.github.io/wdd231/",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "web",
    featured: true,
    completion_date: "2024-01-05",
  },
  {
    id: 4,
    name: "Exercise Tracker",
    description:
      "A C# application that helps users track their daily exercises and routines.",
    photo_url:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    code: "https://github.com/Richiesams-dev/cse210-hw/blob/main/week07/ExerciseTracking/Program.cs",
    liveDemo: "https://richiesams-dev.github.io/JS_projects/Exercise-Tracker/",
    technologies: ["C#"],
    category: "desktop",
    featured: true,
    completion_date: "2025-10-14",
  },
  {
    id: 5,
    name: "To Do List Application",
    description:
      "A Web-based To Do List application that allows users to manage their tasks effectively.",
    photo_url:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    code: "https://github.com/Richiesams-dev/JS_projects/tree/master/To-do-list",
    liveDemo: "https://richiesams-dev.github.io/JS_projects/To-do-list/",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "web",
    featured: true,
    completion_date: "2025-05-15",
  },
  {
    id: 6,
    name: "Landing page",
    description:
      "A responsive landing page for a fictional product or service.",
    photo_url:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    code: "https://github.com/Richiesams-dev/JS_projects/tree/master/landing-page",
    liveDemo:
      "https://richiesams-dev.github.io/JS_projects/Landing-page/index.html",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    category: "web",
    featured: true,
    completion_date: "2025-11-30",
  },
];

// DOM Elements
const portfolioContainer = document.getElementById("portfolio-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const mainContent = document.querySelector(".main-content");
const navLinks = document.querySelectorAll(".nav a");
const downloadCvBtn = document.getElementById("download-cv-btn");
const downloadCvModal = document.getElementById("download-cv-modal");
const downloadPdfBtn = document.getElementById("download-pdf-btn");
const closeCvModal = document.getElementById("close-cv-modal");
const contactForm = document.getElementById("contact-form");
const messageSentModal = document.getElementById("message-sent-modal");
const closeMessageModal = document.getElementById("close-message-modal");

// Render Portfolio Items
function renderPortfolioItems(filter = "all") {
  portfolioContainer.innerHTML = "";

  let filteredProjects = projects;

  if (filter === "featured") {
    filteredProjects = projects.filter((project) => project.featured);
  }
   else if (filter === "web") {
    filteredProjects = projects.filter((project) => project.category === "web");
  } else if (filter !== "all") {
    filteredProjects = projects.filter(
      (project) => project.category === filter
    );
  }

  filteredProjects.forEach((project) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = "portfolio-item padd-15";

    // Create technology tags HTML
    const techTags = project.technologies
      .map((tech) => `<span class="tag">${tech}</span>`)
      .join("");

    portfolioItem.innerHTML = `
            <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                    <img src="${project.photo_url}" alt="${project.name}">
                </div>
                <div class="portfolio-info">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="tech-tags">
                        ${techTags}
                    </div>
                    <div class="portfolio-item-btn">
                        <a href="${project.code}" class="btn" target="_blank">View Code</a>
                        <a href="${project.liveDemo}" class="btn" target="_blank">Live Demo</a>
                    </div>
                </div>
            </div>
        `;

    portfolioContainer.appendChild(portfolioItem);
  });
}

// Filter Portfolio Items
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    // Filter projects
    const filter = button.getAttribute("data-filter");
    renderPortfolioItems(filter);
  });
});

// Toggle Navigation
navToggler.addEventListener("click", () => {
  aside.classList.toggle("open");
  mainContent.classList.toggle("open");
});

// Close navigation when clicking on a link (for mobile)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 1200) {
      aside.classList.remove("open");
      mainContent.classList.remove("open");
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});

// Download CV Functionality
downloadCvBtn.addEventListener("click", (e) => {
  e.preventDefault();
  downloadCvModal.style.display = "flex";
});

closeCvModal.addEventListener("click", () => {
  downloadCvModal.style.display = "none";
});

downloadPdfBtn.addEventListener("click", () => {
  // Create a sample CV content
  const cvContent = `
        RICHMAN BIBOWEI FEDIDEL
        Web and Graphic Developer
        
        CONTACT INFORMATION
        Email: richmanbibowei@gmail.com
        Phone: +234-915-203-5350
        Website: richiesams-dev.github.io/Portfolio-website/index.html
        Location: Benin City, Nigeria
        
        SUMMARY
        Passionate web designer with over 2 years of experience crafting responsive, user-friendly websites. 
        Expertise in blending creative design with functional features to build visually compelling and 
        high-converting digital experiences.
        
        EDUCATION
        Brigham Young University-Pathway Worldwide
        Bachelor's of Applied Software Development (In Progress)
        Web and Computer Programming Certificate (Completed 2024)
        Expected Graduation: 2027
        
        TECHNICAL SKILLS
        • HTML: 96%
        • CSS: 90%
        • JavaScript: 86%
        • Bootstrap: 76%
        • Graphic Design
        • Responsive Web Design
        • SEO Optimization
        
        EXPERIENCE
        Market Square - Benin, Nigeria
        Customer Service & Operations Assistant (2022-2024)
        • Provided excellent customer support in a high-paced environment
        • Collaborated effectively with team members to maintain smooth daily operations
        • Assisted in daily decision-making and problem-solving tasks
        
        PROJECTS
        • Chamber of Commerce Website
        • Delight Artisan Bakery Website
        • Online Ordering System
        • To Do List Application
        • And many more...
    `;

  // Create a Blob with the CV content
  const blob = new Blob([cvContent], { type: "text/plain" });

  // Create a download link
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "Richman_Fedidel_CV.txt";

  // Trigger the download
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  // Close the modal
  downloadCvModal.style.display = "none";
});

// Contact Form Functionality
// Add this to your script.js file - Contact Form Email Integration

// Replace the existing contact form functionality with this:

// Contact Form Functionality with Email Integration
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Method 1: Using Formspree (Recommended - No backend needed)
  // Sign up at https://formspree.io/ and replace YOUR_FORM_ID with your actual form ID
  sendEmailViaFormspree(name, email, subject, message);

  // Method 2: Using mailto (Fallback - Opens user's email client)
  // Uncomment this if you prefer mailto
  // sendEmailViaMailto(name, email, subject, message);
});

// Method 1: Formspree Integration (Recommended)
async function sendEmailViaFormspree(name, email, subject, message) {
  const formspreeEndpoint = "https://formspree.io/f/mjkzbqkb";
  
  try {
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    });

    if (response.ok) {
      // Show success modal
      messageSentModal.style.display = "flex";
      // Reset the form
      contactForm.reset();
    } else {
      alert("There was an error sending your message. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("There was an error sending your message. Please try again.");
  }
}

closeMessageModal.addEventListener("click", () => {
  messageSentModal.style.display = "none";
});

// Close modals when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === downloadCvModal) {
    downloadCvModal.style.display = "none";
  }
  if (e.target === messageSentModal) {
    messageSentModal.style.display = "none";
  }
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderPortfolioItems();
});
