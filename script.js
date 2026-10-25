/* ===== EDIT THIS ===== */
const GITHUB_URL = "https://github.com/mahendrakarswayam07-art";
/* Assignment PDFs that are uploaded (assignments/moduleN.pdf). Add 4 and 5 here when you add those PDFs. */
const ASSIGNMENTS_READY = [1, 2, 3];
const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile";   // <-- put your real LinkedIn link here

/* Your photo and logo: the page uses the first file it finds in the images folder */
const PHOTO_FILES = [
  "images/image.jpg", "images/image.jpeg", "images/image.png", "images/image.webp",
  "images/swayam.jpg", "images/swayam.jpeg", "images/swayam.png",
  "images/photo.jpg", "images/photo.jpeg", "images/photo.png"
];
const LOGO_FILES = [
  "images/mbu-logo.png", "images/mbu-logo.jpg", "images/mbu.png", "images/mbu.jpg",
  "images/logo.png", "images/logo.jpg", "images/logo.jpeg", "images/logo.webp",
  "images/swayam-logo.png"
];

/* Your 5 modules (unchanged). PDFs go inside the "pdfs" folder. */
const MODULES = [
  {title: "Module 1", description: "Data Science and Python", pdf: "module1.pdf"},
  {title: "Module 2", description: "Data Preprocessing",      pdf: "module2.pdf"},
  {title: "Module 3", description: "EDA and Visualization",   pdf: "module3.pdf"},
  {title: "Module 4", description: "Machine Learning",        pdf: "module4.pdf"},
  {title: "Module 5", description: "Statistics",              pdf: "module5.pdf"}
];

/* Labs open tool-lab.html with the matching starter code */
const LABS = [
  {icon: "💻", title: "Python Coding Lab",     text: "Variables, loops and functions.",        tool: "python"},
  {icon: "🔢", title: "NumPy Lab",             text: "Arrays and numerical operations.",       tool: "numpy"},
  {icon: "🐼", title: "Pandas Lab",            text: "DataFrames and data analysis.",          tool: "pandas"},
  {icon: "📉", title: "Matplotlib Lab",        text: "Plot charts and visualize data.",        tool: "matplotlib"},
  {icon: "📈", title: "Machine Learning Lab",  text: "Scikit-learn models and predictions.",   tool: "sklearn"}
];

/* 12 tools and libraries */
const TOOLS = [
  {icon: "🐍", name: "Python",       text: "The core programming language.",          url: "https://www.python.org"},
  {icon: "🔢", name: "NumPy",        text: "Fast arrays and maths.",                  url: "https://numpy.org"},
  {icon: "🐼", name: "Pandas",       text: "Tables and data analysis.",               url: "https://pandas.pydata.org"},
  {icon: "📉", name: "Matplotlib",   text: "Charts and plots.",                       url: "https://matplotlib.org"},
  {icon: "🎨", name: "Seaborn",      text: "Statistical visualization.",              url: "https://seaborn.pydata.org"},
  {icon: "🔬", name: "SciPy",        text: "Scientific computing and statistics.",    url: "https://scipy.org"},
  {icon: "🤖", name: "Scikit-learn", text: "Machine learning algorithms.",            url: "https://scikit-learn.org"},
  {icon: "🧠", name: "TensorFlow",   text: "Deep learning framework.",                url: "https://www.tensorflow.org"},
  {icon: "📓", name: "Jupyter",      text: "Notebooks for code and notes.",           url: "https://jupyter.org"},
  {icon: "🗄️", name: "SQL",          text: "Query and manage databases.",             url: "https://www.w3schools.com/sql/"},
  {icon: "🌿", name: "Git",          text: "Version control for your code.",          url: "https://git-scm.com"},
  {icon: "📝", name: "VS Code",      text: "Code editor.",                            url: "https://code.visualstudio.com"}
];

const AI_TOPICS = [
  "Explain Pandas DataFrames with an example",
  "What is overfitting in machine learning?",
  "Difference between mean, median and mode",
  "How does linear regression work?",
  "Explain data preprocessing steps",
  "How do I make a histogram in Matplotlib?"
];

/* ===== Navigation ===== */
function showSection(sectionId, clickedButton) {
  document.querySelectorAll(".page-section").forEach(s => s.classList.remove("active-section"));
  const target = document.getElementById(sectionId);
  if (target) target.classList.add("active-section");

  document.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
  const btn = clickedButton || document.querySelector('.nav-item[data-section="' + sectionId + '"]');
  if (btn && btn.classList.contains("nav-item")) btn.classList.add("active");

  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.remove("open");
  if (history.replaceState) history.replaceState(null, "", "#" + sectionId);
  window.scrollTo({top: 0, behavior: "smooth"});
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.toggle("open");
}

function logout() {
  if (confirm("Return to the student welcome page?")) window.location.href = "index.html";
}

/* ===== AI Model: opens the AI tool with the question filled in ===== */
function openAI(provider) {
  const input = document.getElementById("aiQuestion");
  const question = input ? input.value.trim() : "";
  if (!question) { alert("Type a question or choose a topic first."); return; }
  const prompt = "Help me study this topic in simple terms, with an example:\n\n" + question;
  const q = encodeURIComponent(prompt);
  const urls = {
    claude:     "https://claude.ai/new?q=" + q,
    chatgpt:    "https://chatgpt.com/?q=" + q,
    perplexity: "https://www.perplexity.ai/search?q=" + q
  };
  window.open(urls[provider], "_blank", "noopener");
}

/* ===== Build the pages ===== */
document.addEventListener("DOMContentLoaded", function () {

  // Modules -> opens the PDF
  const grid = document.getElementById("moduleGrid");
  MODULES.forEach(function (m, i) {
    const pdfPath = "pdfs/" + m.pdf;
    const card = document.createElement("article");
    card.className = "module-card";
    card.style.cursor = "pointer";
    const readerUrl = "pdf-reader.html?book=module" + (i + 1) + "&file=" + encodeURIComponent(pdfPath) + "&title=" + encodeURIComponent(m.title + " - " + m.description);
    card.innerHTML =
      '<div class="module-number">MODULE ' + (i + 1) + '</div>' +
      '<div class="module-emoji">📕</div>' +
      '<h3></h3><p></p>' +
      '<div class="module-links">' +
        '<a href="' + pdfPath + '" target="_blank" rel="noopener">Open PDF ↗</a>' +
        '<a class="flip" href="' + readerUrl + '">📖 Flip Book</a>' +
      '</div>';
    card.querySelector("h3").textContent = m.title;
    card.querySelector("p").textContent = m.description;
    card.addEventListener("click", function (e) {
      if (!e.target.closest("a")) window.location.href = readerUrl;
    });
    grid.appendChild(card);
  });

  // Labs -> opens the coding lab
  const labGrid = document.getElementById("labGrid");
  LABS.forEach(function (l) {
    const a = document.createElement("a");
    a.className = "resource-card";
    a.href = "tool-lab.html?tool=" + l.tool;
    a.innerHTML = '<span>' + l.icon + '</span><h3></h3><p></p><b>Open lab →</b>';
    a.querySelector("h3").textContent = l.title;
    a.querySelector("p").textContent = l.text;
    labGrid.appendChild(a);
  });

  // Tools -> official sites
  const toolGrid = document.getElementById("toolGrid");
  TOOLS.forEach(function (t) {
    const a = document.createElement("a");
    a.className = "resource-card";
    a.href = t.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = '<span>' + t.icon + '</span><h3></h3><p></p><b>Visit site ↗</b>';
    a.querySelector("h3").textContent = t.name;
    a.querySelector("p").textContent = t.text;
    toolGrid.appendChild(a);
  });

  // AI topic chips
  const chips = document.getElementById("aiChips");
  AI_TOPICS.forEach(function (topic) {
    const b = document.createElement("button");
    b.className = "ai-chip";
    b.textContent = topic;
    b.addEventListener("click", function () {
      document.getElementById("aiQuestion").value = topic;
    });
    chips.appendChild(b);
  });

  // Photo and logo: use the first file that exists
  function useFirst(files, selector) {
    (function tryFile(i) {
      if (i >= files.length) return;
      const probe = new Image();
      probe.onload = function () {
        document.querySelectorAll(selector).forEach(function (img) { img.src = files[i]; });
      };
      probe.onerror = function () { tryFile(i + 1); };
      probe.src = files[i];
    })(0);
  }
  useFirst(PHOTO_FILES, ".photo-img");
  useFirst(LOGO_FILES, ".logo-img");

  // GitHub and LinkedIn links (profile page)
  document.getElementById("githubBtn").href = GITHUB_URL;
  document.getElementById("linkedinBtn").href = LINKEDIN_URL;

  // Resume: hide the buttons only if the file is clearly missing (404)
  fetch("resume/resume.pdf", {method: "HEAD"}).then(function (r) {
    if (r.status === 404) {
      document.getElementById("resumeActions").style.display = "none";
      document.getElementById("resumeNote").style.display = "block";
    }
  }).catch(function () { /* opened as a local file: keep the buttons */ });

  // Assignment cards: one per module (PDFs go in the assignments folder as module1.pdf ... module5.pdf)
  const amGrid = document.getElementById("assignModuleGrid");
  MODULES.forEach(function (m, i) {
    const path = "assignments/module" + (i + 1) + ".pdf";
    const card = document.createElement("article");
    card.className = "module-card";
    const ready = ASSIGNMENTS_READY.indexOf(i + 1) !== -1;
    card.innerHTML =
      '<div class="module-number">MODULE ' + (i + 1) + ' · ASSIGNMENT</div>' +
      '<div class="module-emoji">📝</div>' +
      '<h3></h3><p></p>' +
      '<div class="module-links">' +
        (ready ? '<a href="' + path + '" target="_blank" rel="noopener">Open assignment ↗</a>'
               : '<span class="soon">Coming soon</span>') +
      '</div>';
    card.querySelector("h3").textContent = m.title + " Assignment";
    card.querySelector("p").textContent = m.description;
    if (ready) {
      card.style.cursor = "pointer";
      card.addEventListener("click", function (e) {
        if (!e.target.closest("a")) window.open(path, "_blank", "noopener");
      });
    }
    amGrid.appendChild(card);
  });

  // Class-work photos: assignments/assignment1.jpg, assignment2.jpg ...
  const aGrid = document.getElementById("assignGrid");
  const photoSection = document.getElementById("photoSection");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  function findAssignment(n) {
    return new Promise(function (resolve) {
      const exts = ["jpg", "jpeg", "png", "webp"];
      let pending = exts.length, found = null;
      exts.forEach(function (ext) {
        const src = "assignments/assignment" + n + "." + ext;
        const probe = new Image();
        probe.onload = function () { if (!found) found = src; if (--pending === 0) resolve(found); };
        probe.onerror = function () { if (--pending === 0) resolve(found); };
        probe.src = src;
      });
    });
  }
  (async function loadAssignments() {
    for (let n = 1; n <= 60; n++) {
      const src = await findAssignment(n);
      if (!src) break;
      const item = document.createElement("div");
      item.className = "assign-item";
      item.innerHTML = '<img alt=""><div>Assignment ' + n + '</div>';
      item.querySelector("img").src = src;
      item.addEventListener("click", function () {
        lightboxImg.src = src;
        lightbox.classList.add("open");
      });
      aGrid.appendChild(item);
      photoSection.style.display = "block";
    }
  })();

  // Open the section named in the URL (e.g. dashboard.html#modules)
  const hash = location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) showSection(hash);
});
