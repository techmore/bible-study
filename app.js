const sections = {
  overview: [
    {
      title: "The Gospel of John",
      copy: "The clearest first book for understanding who Jesus is, what he claimed, and why his death and resurrection matter.",
      tags: ["read", "gospel"],
      links: [
        { label: "BibleProject overview", href: "https://bibleproject.com/explore/video/john/" },
        { label: "BibleGateway audio", href: "https://www.biblegateway.com/resources/audio/" },
      ],
    },
    {
      title: "Luke + Acts",
      copy: "A longer narrative that shows Jesus in context and then follows the first Christian movement after the resurrection.",
      tags: ["read", "history"],
      links: [
        { label: "BibleProject reading plans", href: "https://bibleproject.com/readingplans/" },
        { label: "YouVersion", href: "https://www.bible.com/" },
      ],
    },
    {
      title: "Romans + Ephesians",
      copy: "Good next steps for understanding what Christians believe about grace, faith, salvation, the church, and life in Christ.",
      tags: ["read", "doctrine"],
      links: [
        { label: "BibleProject guides", href: "https://bibleproject.com/guides/" },
        { label: "BibleHub interlinear", href: "https://biblehub.com/interlinear/" },
      ],
    },
  ],
  listen: [
    {
      title: "BibleGateway audio Bibles",
      copy: "Listen to Scripture directly and move through a Gospel chapter by chapter instead of relying only on summaries.",
      tags: ["audio", "scripture"],
      links: [
        { label: "Audio Bibles", href: "https://www.biblegateway.com/resources/audio/" },
        { label: "Audio app", href: "https://www.biblegateway.com/bible-audio-app/" },
      ],
    },
    {
      title: "Billy Graham sermons and videos",
      copy: "Classic preaching sessions for when you want a clear gospel presentation, encouragement, or old-school evangelistic messages.",
      tags: ["audio", "video"],
      links: [
        { label: "Sermons", href: "https://billygraham.org/sermons/" },
        { label: "Videos", href: "https://billygraham.org/videos/" },
      ],
    },
    {
      title: "John Mark Comer podcasts and teaching",
      copy: "Helpful when you want a slower, formation-focused tone that still stays practical and beginner-friendly.",
      tags: ["audio", "formation"],
      links: [
        { label: "Home", href: "https://johnmarkcomer.com/" },
        { label: "Practicing the Way", href: "https://practicingtheway.org/" },
      ],
    },
  ],
  study: [
    {
      title: "BibleProject How to Read the Bible",
      copy: "Excellent for learning how biblical narrative, poetry, prophecy, and letters work together.",
      tags: ["course", "tool"],
      links: [
        { label: "BibleProject", href: "https://bibleproject.com/" },
        { label: "Guides", href: "https://bibleproject.com/guides/" },
      ],
    },
    {
      title: "Interlinear and word studies",
      copy: "Use Greek word tools when a verse is dense, technical, or debated. This is especially useful in Romans and John.",
      tags: ["tool", "language"],
      links: [
        { label: "BibleHub interlinear", href: "https://biblehub.com/interlinear/" },
        { label: "Perseus Digital Library", href: "https://www.perseus.tufts.edu/hopper/" },
      ],
    },
    {
      title: "Can I trust the Bible?",
      copy: "Apologetics resources for manuscripts, canon, reliability, and the historical case for Christianity.",
      tags: ["course", "apologetics"],
      links: [
        { label: "Wesley Huff", href: "https://www.wesleyhuff.com/home" },
        { label: "Apologetics Canada", href: "https://apologeticscanada.com/" },
      ],
    },
  ],
  context: [
    {
      title: "Second Temple Judaism",
      copy: "Learn the Jewish world Jesus entered: synagogue life, Temple worship, Pharisees, Sadducees, festivals, and expectations of Messiah.",
      tags: ["history", "jewish"],
      links: [
        { label: "BibleProject about us", href: "https://bibleproject.com/about/" },
        { label: "Wesley Huff articles", href: "https://www.wesleyhuff.com/blog/2017/12/1/the-question-of-canon-the-who-what-and-where-of-the-books-of-the-bible" },
      ],
    },
    {
      title: "Rome and the Mediterranean world",
      copy: "Understand emperors, roads, taxation, crucifixion, citizenship, military power, and the empire context behind the New Testament.",
      tags: ["history", "roman"],
      links: [
        { label: "Hillsdale courses", href: "https://online.hillsdale.edu/courses" },
        { label: "Ancient Christianity", href: "https://online.hillsdale.edu/courses" },
      ],
    },
    {
      title: "Greek and Latin",
      copy: "Use original-language tools to see how words, grammar, and literary style affect meaning without guessing from English alone.",
      tags: ["language", "tool"],
      links: [
        { label: "BibleHub interlinear", href: "https://biblehub.com/interlinear/" },
        { label: "Perseus", href: "https://www.perseus.tufts.edu/hopper/" },
      ],
    },
  ],
  library: [
    {
      title: "Best starter books",
      copy: "Good beginner books for learning Jesus, the gospel, and Christian basics without getting buried in jargon.",
      tags: ["books", "starter"],
      links: [
        { label: "Amazon search: Mere Christianity", href: amazonSearch("Mere Christianity C.S. Lewis") },
        { label: "Amazon search: The Case for Christ", href: amazonSearch("The Case for Christ Lee Strobel") },
      ],
    },
    {
      title: "Formation and discipleship",
      copy: "Useful when you want Christianity to become a lived apprenticeship instead of only information.",
      tags: ["books", "formation"],
      links: [
        { label: "Amazon search: The Ruthless Elimination of Hurry", href: amazonSearch("The Ruthless Elimination of Hurry John Mark Comer") },
        { label: "Amazon search: Practicing the Way", href: amazonSearch("Practicing the Way John Mark Comer") },
      ],
    },
    {
      title: "Courses and long-form learning",
      copy: "A more structured path for people who want a free, course-like experience that feels closer to a self-paced academy.",
      tags: ["course", "video"],
      links: [
        { label: "BibleProject classroom", href: "https://bibleproject.com/classroom/" },
        { label: "Hillsdale online", href: "https://online.hillsdale.edu/" },
      ],
    },
  ],
};

const resources = [
  {
    title: "BibleProject",
    category: "video",
    copy: "Clear Bible overviews, reading plans, classes, and guides that help you see Scripture as one story pointing to Jesus.",
      tags: ["Video", "Course", "Bible"],
    links: [
      { label: "Website", href: "https://bibleproject.com/" },
      { label: "How to read", href: "https://bibleproject.com/guides/" },
    ],
  },
  {
    title: "Mere Christianity",
    category: "books",
    copy: "A classic first book for understanding the basic claims of Christianity in clear, thoughtful language.",
    tags: ["Book", "Starter"],
    links: [
      { label: "Amazon search", href: amazonSearch("Mere Christianity C.S. Lewis") },
      { label: "About C.S. Lewis", href: "https://www.cslewis.com/" },
    ],
  },
  {
    title: "The Case for Christ",
    category: "books",
    copy: "A widely read introduction to the historical case for Jesus and the resurrection.",
    tags: ["Book", "Apologetics"],
    links: [
      { label: "Amazon search", href: amazonSearch("The Case for Christ Lee Strobel") },
      { label: "Lee Strobel", href: "https://leestrobel.com/" },
    ],
  },
  {
    title: "Bible translation comparison",
    category: "tool",
    copy: "Compare a passage in several translations to see meaning, wording, and tone side by side.",
    tags: ["Tool", "Bible"],
    links: [
      { label: "BibleGateway compare", href: "https://www.biblegateway.com/passage/?search=John+1&version=NIV" },
      { label: "YouVersion", href: "https://www.bible.com/" },
    ],
  },
  {
    title: "The Ruthless Elimination of Hurry",
    category: "books",
    copy: "Helpful if you want a practice-oriented next step in discipleship and spiritual habits.",
    tags: ["Book", "Formation"],
    links: [
      { label: "Amazon search", href: amazonSearch("The Ruthless Elimination of Hurry John Mark Comer") },
      { label: "John Mark Comer", href: "https://johnmarkcomer.com/" },
    ],
  },
  {
    title: "Wesley Huff",
    category: "video",
    copy: "Apologetics, manuscript evidence, canon, and public-facing explanation of why the Christian faith is intellectually credible.",
      tags: ["Apologetics", "History", "Bible"],
    links: [
      { label: "Home", href: "https://www.wesleyhuff.com/home" },
      { label: "Bio", href: "https://www.wesleyhuff.com/bio" },
    ],
  },
  {
    title: "Apologetics Canada",
    category: "video",
    copy: "Conferences, resources, podcasts, and teaching for questions about faith, culture, and the reliability of Christianity.",
      tags: ["Apologetics", "Video"],
    links: [
      { label: "Website", href: "https://apologeticscanada.com/" },
      { label: "Can I Trust the Bible?", href: "https://apologeticscanada.com/" },
    ],
  },
  {
    title: "John Mark Comer",
    category: "audio",
    copy: "Teaching, podcasts, and formation resources centered on apprentice-style discipleship to Jesus.",
    tags: ["Formation", "Audio", "Book"],
    links: [
      { label: "Home", href: "https://johnmarkcomer.com/" },
      { label: "Practicing the Way", href: "https://practicingtheway.org/" },
    ],
  },
  {
    title: "Billy Graham Evangelistic Association",
    category: "audio",
    copy: "Classic evangelistic preaching, devotionals, and school-of-evangelism material for gospel proclamation.",
    tags: ["Preaching", "Audio", "Video"],
    links: [
      { label: "Main site", href: "https://billygraham.org/" },
      { label: "Sermons", href: "https://billygraham.org/sermons/" },
    ],
  },
  {
    title: "BibleGateway audio",
    category: "audio",
    copy: "Listen to the Bible itself and move through the Gospels, Acts, and the letters at your own pace.",
      tags: ["Audio", "Scripture"],
    links: [
      { label: "Audio Bibles", href: "https://www.biblegateway.com/resources/audio/" },
      { label: "Audio app", href: "https://www.biblegateway.com/bible-audio-app/" },
    ],
  },
  {
    title: "BibleHub interlinear",
    category: "tool",
    copy: "A practical original-language tool for verse-by-verse comparison, Strong’s numbers, and quick lexical checking.",
      tags: ["Greek", "Tool", "Study"],
    links: [
      { label: "Interlinear", href: "https://biblehub.com/interlinear/" },
      { label: "Search site", href: "https://biblehub.com/" },
    ],
  },
  {
    title: "Hillsdale College online courses",
    category: "course",
    copy: "Free courses that add useful history, philosophy, and Western civilization context for Christian and biblical study.",
    tags: ["Course", "History"],
    links: [
      { label: "Online courses", href: "https://online.hillsdale.edu/" },
      { label: "Catalog", href: "https://online.hillsdale.edu/courses" },
    ],
  },
  {
      title: "The Bible Project reading plans",
    category: "course",
    copy: "A gentle way to read through the Bible with guided plans, including Gospels-focused tracks.",
    tags: ["Course", "Bible"],
    links: [
      { label: "Reading plans", href: "https://bibleproject.com/readingplans/" },
      { label: "Classroom", href: "https://bibleproject.com/classroom/" },
    ],
  },
];

function amazonSearch(query) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
}

function resourceCard(item) {
  const category = item.category || "general";
  const tagMarkup = item.tags
    .map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`)
    .join("");

  const linkMarkup = item.links
    .map((link) => `<a class="link" href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`)
    .join("");

  return `
    <article class="card resource-card" data-category="${escapeHtml(category)}" data-search="${escapeHtml(searchText(item))}">
      <div class="resource-meta">${tagMarkup}</div>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.copy)}</p>
      </div>
      <div class="resource-links">${linkMarkup}</div>
    </article>
  `;
}

function searchText(item) {
  return [item.title, item.copy, ...(item.tags || []), ...(item.links || []).map((link) => link.label)]
    .join(" ")
    .toLowerCase();
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderSection(id, items) {
  const target = document.getElementById(id);
  if (!target) return;
  target.innerHTML = items.map(resourceCard).join("");
}

function setupTabs() {
  const tabs = [...document.querySelectorAll("[data-tab]")];
  const panels = [...document.querySelectorAll("[data-panel]")];

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const value = tab.dataset.tab;
      tabs.forEach((button) => {
        const active = button === tab;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-selected", String(active));
      });
      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.panel === value);
      });
    });
  });
}

function setupFilters() {
  const search = document.getElementById("resource-search");
  const chips = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll(".resource-card")];

  let activeFilter = "all";

  const apply = () => {
    const query = (search?.value || "").trim().toLowerCase();

    cards.forEach((card) => {
      const category = card.dataset.category || "";
      const text = card.dataset.search || "";
      const matchesFilter = activeFilter === "all" || category === activeFilter;
      const matchesQuery = !query || text.includes(query);
      card.style.display = matchesFilter && matchesQuery ? "" : "none";
    });
  };

  search?.addEventListener("input", apply);

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activeFilter = chip.dataset.filter || "all";
      chips.forEach((button) => button.classList.toggle("is-active", button === chip));
      apply();
    });
  });
}

function setupResourceDrawer() {
  const drawer = document.getElementById("listening-resources-panel");
  const overlay = document.querySelector(".drawer-overlay");
  const openButtons = [...document.querySelectorAll("[data-resource-panel-open]")];
  const closeButtons = [...document.querySelectorAll("[data-resource-panel-close]")];

  if (!drawer || !overlay || openButtons.length === 0) return;

  const setOpen = (isOpen) => {
    drawer.classList.toggle("is-open", isOpen);
    overlay.classList.toggle("is-open", isOpen);
    drawer.setAttribute("aria-hidden", String(!isOpen));
    drawer.inert = !isOpen;
    openButtons.forEach((button) => button.setAttribute("aria-expanded", String(isOpen)));
    document.body.classList.toggle("drawer-open", isOpen);

    if (isOpen) {
      overlay.hidden = false;
      drawer.querySelector("a, button")?.focus();
      return;
    }

    window.setTimeout(() => {
      if (!overlay.classList.contains("is-open")) overlay.hidden = true;
    }, 180);
  };

  openButtons.forEach((button) => button.addEventListener("click", () => setOpen(true)));
  closeButtons.forEach((button) => button.addEventListener("click", () => setOpen(false)));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer.classList.contains("is-open")) {
      setOpen(false);
      openButtons[0]?.focus();
    }
  });
}

renderSection("overview-grid", sections.overview);
renderSection("listen-grid", sections.listen);
renderSection("study-grid", sections.study);
renderSection("context-grid", sections.context);
renderSection("library-grid", sections.library);

const resourceGrid = document.getElementById("resource-grid");
if (resourceGrid) {
  resourceGrid.innerHTML = resources.map(resourceCard).join("");
}

setupTabs();
setupFilters();
setupResourceDrawer();
