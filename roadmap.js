const cadence = [
  {
    title: "Daily",
    level: "20-45 minutes",
    copy: "Read or listen to a Gospel passage, write one observation, pray, and repeat a core habit. The point is consistency over drama.",
    chips: ["Scripture", "Prayer", "Journaling"],
  },
  {
    title: "Weekly",
    level: "2-4 hours",
    copy: "Complete one overview video, one study session, one discussion, and one review of the week's passages in context.",
    chips: ["Overview", "Study", "Discussion"],
  },
  {
    title: "Monthly",
    level: "1 deep dive",
    copy: "Finish a book of the Bible, compare translations on key passages, and add one historical or theological theme.",
    chips: ["Book study", "Themes", "Review"],
  },
  {
    title: "Yearly",
    level: "A new layer",
    copy: "Move from reading to synthesis, from synthesis to context, and from context to teaching or specialization.",
    chips: ["Growth", "Synthesis", "Mastery"],
  },
];

const years = [
  {
    title: "Year 1: Jesus",
    copy: "Read the Gospels repeatedly, learn the story of Jesus, and build a basic instinct for translation comparison and listening.",
    chips: ["John", "Luke", "Mark", "Matthew"],
  },
  {
    title: "Year 2: The whole Bible",
    copy: "Learn how the Old and New Testaments fit together, how genres work, and how key doctrines emerge from the whole canon.",
    chips: ["Genesis to Revelation", "Genres", "Doctrine"],
  },
  {
    title: "Year 3: The world behind the text",
    copy: "Go deeper into Jewish life, Rome, geography, Greek, Latin, manuscript issues, and historical apologetics.",
    chips: ["Judaism", "Rome", "Greek", "Latin"],
  },
  {
    title: "Year 4: Synthesis and teaching",
    copy: "Choose a specialization, build teaching notes, lead discussions, and learn how to explain the Christian story clearly to others.",
    chips: ["Teaching", "Apologetics", "Leadership"],
  },
];

const tracks = [
  {
    title: "Gospels mastery",
    badge: "Jesus first",
    nodes: [
      {
        level: "Shallow dive",
        title: "Read one Gospel slowly",
        copy: "Use John or Luke first. Learn the basic plot, the major claims, and the main scenes without trying to master everything.",
        chips: ["Read", "Listen", "Observe"],
      },
      {
        level: "Core study",
        title: "Compare the four accounts",
        copy: "Notice what each Gospel emphasizes, where they overlap, and how they present the same person from different angles.",
        chips: ["Synoptics", "Themes", "Structure"],
      },
      {
        level: "Deeper dive",
        title: "Map the major sayings and signs",
        copy: "Track miracles, parables, the kingdom message, the cross, and resurrection patterns across the four accounts.",
        chips: ["Signs", "Parables", "Cross"],
      },
      {
        level: "Mastery",
        title: "Teach the Gospel of Jesus",
        copy: "Create a clean summary of who Jesus is and why it matters, with enough clarity to explain it to a new person.",
        chips: ["Teaching", "Summary", "Clarity"],
      },
    ],
  },
  {
    title: "Bible literacy",
    badge: "Whole canon",
    nodes: [
      {
        level: "Shallow dive",
        title: "Learn the Bible's major storyline",
        copy: "Creation, fall, covenant, rescue, kingdom, exile, Messiah, church, restoration.",
        chips: ["Story", "Covenant", "Kingdom"],
      },
      {
        level: "Core study",
        title: "Study genre and context",
        copy: "Narrative, poetry, prophecy, wisdom, gospels, letters, and apocalyptic each need different reading skills.",
        chips: ["Genre", "Context", "Literature"],
      },
      {
        level: "Deeper dive",
        title: "Build a cross-reference network",
        copy: "Learn how passages echo earlier Scripture and how later books interpret earlier promises.",
        chips: ["Cross refs", "Typology", "Fulfillment"],
      },
      {
        level: "Mastery",
        title: "Write a canon map",
        copy: "Produce a one-page overview of the whole Bible and explain how each major section contributes to the full story.",
        chips: ["Canon", "Synthesis", "Overview"],
      },
    ],
  },
  {
    title: "Historical world",
    badge: "Context",
    nodes: [
      {
        level: "Shallow dive",
        title: "Learn the basic timeline",
        copy: "Second Temple Judaism, Rome, Herod, the empire, the exile, the return, and the early church.",
        chips: ["Timeline", "Rome", "Jewish world"],
      },
      {
        level: "Core study",
        title: "Study people and places",
        copy: "Map the cities, roads, languages, sects, festivals, and power structures that shape the New Testament.",
        chips: ["Geography", "Politics", "Temple"],
      },
      {
        level: "Deeper dive",
        title: "Learn Greek and Latin tools",
        copy: "Use interlinears, lexicons, and simple language guides to understand why translation choices differ.",
        chips: ["Greek", "Latin", "Manuscripts"],
      },
      {
        level: "Mastery",
        title: "Explain the world behind the text",
        copy: "Be able to tell someone why Rome, Judaism, and language matter for the meaning of the New Testament.",
        chips: ["History", "Language", "Explanation"],
      },
    ],
  },
  {
    title: "Apologetics and formation",
    badge: "Live it",
    nodes: [
      {
        level: "Shallow dive",
        title: "Know the basic case for Christianity",
        copy: "Learn the claims about Jesus, resurrection, manuscript reliability, and why Christians trust Scripture.",
        chips: ["Evidence", "Resurrection", "Trust"],
      },
      {
        level: "Core study",
        title: "Practice habits of discipleship",
        copy: "Prayer, fasting, service, worship, generosity, and obedience should accompany knowledge.",
        chips: ["Prayer", "Habit", "Practice"],
      },
      {
        level: "Deeper dive",
        title: "Handle objections with care",
        copy: "Work through hard questions about suffering, exclusivity, canon, and interpretation without panic.",
        chips: ["Objections", "Canon", "Suffering"],
      },
      {
        level: "Mastery",
        title: "Teach, defend, and shepherd",
        copy: "Move beyond consuming content into helping others learn, ask good questions, and follow Jesus better.",
        chips: ["Teaching", "Defense", "Shepherding"],
      },
    ],
  },
];

const specializations = [
  {
    id: "all",
    title: "All tracks",
    copy: "See every specialization at once.",
  },
  {
    id: "gospels",
    title: "Gospels",
    copy: "Preaching, reading, and teaching the life of Jesus.",
  },
  {
    id: "bible",
    title: "Bible literacy",
    copy: "Whole-canon reading, genres, and cross references.",
  },
  {
    id: "context",
    title: "Historical context",
    copy: "Judaism, Rome, geography, Greek, and Latin.",
  },
  {
    id: "apologetics",
    title: "Apologetics",
    copy: "Evidence, reliability, and answering objections.",
  },
  {
    id: "formation",
    title: "Formation",
    copy: "Prayer, habit, and apprenticeship to Jesus.",
  },
];

const specializationCards = [
  {
    filters: ["gospels"],
    title: "Gospel exegesis",
    copy: "Learn to read one Gospel deeply enough to outline it, summarize it, and teach it clearly.",
    chips: ["Outline", "Teaching", "Reading"],
  },
  {
    filters: ["bible"],
    title: "Biblical theology",
    copy: "Trace themes like covenant, temple, kingdom, exile, and new creation through the entire Bible.",
    chips: ["Themes", "Canon", "Synthesis"],
  },
  {
    filters: ["context"],
    title: "Ancient world studies",
    copy: "Focus on Jewish practice, Roman power, language, and archaeology to understand the setting of Scripture.",
    chips: ["Judaism", "Rome", "Greek"],
  },
  {
    filters: ["apologetics"],
    title: "Reasoned defense",
    copy: "Work through historical evidence, reliability questions, and the strongest objections to Christianity.",
    chips: ["Evidence", "Arguments", "History"],
  },
  {
    filters: ["formation"],
    title: "Rule of life",
    copy: "Build a sustainable set of daily and weekly practices that turn knowledge into lived discipleship.",
    chips: ["Habits", "Prayer", "Practice"],
  },
  {
    filters: ["all"],
    title: "Integrated mastery",
    copy: "Combine the tracks into one disciplined life of reading, listening, learning, teaching, and serving.",
    chips: ["Integration", "Discipline", "Growth"],
  },
];

const unlocks = [
  {
    title: "Bible versions and translation families",
    level: "After John",
    copy: "After you can read John with confidence, start comparing readable and more literal translations and learn what each one is doing.",
    chips: ["NIV", "ESV", "CSB", "NLT"],
  },
  {
    title: "Christian traditions map",
    level: "After the Gospels",
    copy: "Once the basics are steady, compare Catholic, Orthodox, and Protestant Christianity so the family map makes sense.",
    chips: ["Catholic", "Orthodox", "Protestant"],
  },
  {
    title: "Canon and ordering",
    level: "After overview",
    copy: "Learn why John is first in the learning path even though it is not the Bible's first book, and how the canon was arranged.",
    chips: ["Canon", "Order", "History"],
  },
  {
    title: "Apologetics track",
    level: "After foundations",
    copy: "Use manuscript evidence, resurrection arguments, and worldview questions as a deeper addendum after the core path is familiar.",
    chips: ["Evidence", "Arguments", "Reliability"],
  },
];

const diveCards = [
  {
    title: "Shallow dives",
    copy: "Good for momentum. Watch one overview, read one chapter, and write one note. You can keep moving without needing to understand everything at once.",
  },
  {
    title: "Deep dives",
    copy: "Use these for difficult passages, theological questions, historical background, or Greek word studies when precision matters.",
  },
  {
    title: "Mastery targets",
    copy: "By the end, you should be able to summarize the Gospels, explain the Bible's storyline, answer common objections, and teach others at a basic level.",
  },
];

function renderList(targetId, items, factory) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = items.map(factory).join("");
}

function renderCadenceCard(item) {
  return `
    <article class="card meta-card">
      <p class="eyebrow">${escapeHtml(item.title)}</p>
      <strong>${escapeHtml(item.level)}</strong>
      <p>${escapeHtml(item.copy)}</p>
      <div class="resource-meta">
        ${item.chips.map((chip) => `<span class="pill">${escapeHtml(chip)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderYearCard(item) {
  return `
    <article class="card meta-card">
      <p class="eyebrow">${escapeHtml(item.title)}</p>
      <p>${escapeHtml(item.copy)}</p>
      <div class="resource-meta">
        ${item.chips.map((chip) => `<span class="pill">${escapeHtml(chip)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderTrack(track) {
  return `
    <article class="skill-track">
      <div class="track-head">
        <div>
          <p class="eyebrow">${escapeHtml(track.badge)}</p>
          <h3>${escapeHtml(track.title)}</h3>
        </div>
        <span class="track-pill">4 tiers</span>
      </div>
      <div class="tree-rows">
        ${track.nodes
          .map(
            (node) => `
            <section class="tree-node">
              <div class="node-top">
                <h4>${escapeHtml(node.title)}</h4>
                <span class="node-level">${escapeHtml(node.level)}</span>
              </div>
              <p class="node-copy">${escapeHtml(node.copy)}</p>
              <div class="node-list">
                ${node.chips.map((chip) => `<span class="node-chip">${escapeHtml(chip)}</span>`).join("")}
              </div>
            </section>
          `,
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderSpecializationCard(card) {
  return `
    <article class="card meta-card specialization-card" data-filters="${card.filters.join(" ")}">
      <p class="eyebrow">${escapeHtml(card.title)}</p>
      <p>${escapeHtml(card.copy)}</p>
      <div class="resource-meta">
        ${card.chips.map((chip) => `<span class="pill">${escapeHtml(chip)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderDiveCard(card) {
  return `
    <article class="card list-card">
      <h3>${escapeHtml(card.title)}</h3>
      <p>${escapeHtml(card.copy)}</p>
    </article>
  `;
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

renderList("cadence-grid", cadence, renderCadenceCard);
renderList("year-grid", years, renderYearCard);

const treeTarget = document.getElementById("skill-tree");
if (treeTarget) {
  treeTarget.innerHTML = tracks.map(renderTrack).join("");
}

renderList("dive-grid", diveCards, renderDiveCard);
renderList("unlock-grid", unlocks, renderCadenceCard);

const toggleTarget = document.getElementById("specialization-toggle");
const specializationGrid = document.getElementById("specialization-grid");

if (toggleTarget) {
  toggleTarget.innerHTML = specializations
    .map(
      (item) => `
        <button class="${item.id === "all" ? "is-active" : ""}" data-specialization-filter="${item.id}">
          ${escapeHtml(item.title)}
        </button>
      `,
    )
    .join("");
}

if (specializationGrid) {
  specializationGrid.innerHTML = specializationCards.map(renderSpecializationCard).join("");
}

const filters = [...document.querySelectorAll("[data-specialization-filter]")];
const cards = [...document.querySelectorAll(".specialization-card")];

function applyFilter(filter) {
  cards.forEach((card) => {
    const list = (card.dataset.filters || "").split(/\s+/).filter(Boolean);
    const show = filter === "all" || list.includes(filter) || card.dataset.filters === "all";
    card.classList.toggle("hidden", !show);
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.specializationFilter || "all";
    filters.forEach((item) => item.classList.toggle("is-active", item === button));
    applyFilter(filter);
  });
});

applyFilter("all");
