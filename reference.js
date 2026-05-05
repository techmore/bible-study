const referenceData = {
  reference: [
    {
      title: "Gospel",
      kicker: "Good news",
      summary: "The announcement of what God has done through Jesus.",
      detail: "In Christianity, gospel is not mainly advice. It is the good news that Jesus' life, death, and resurrection bring forgiveness, reconciliation with God, and new life.",
      start: "Watch for it when people announce, believe, or respond to Jesus.",
      tags: ["Jesus", "salvation", "beginner"],
    },
    {
      title: "Messiah",
      kicker: "Promised king",
      summary: "The anointed one Israel hoped God would send.",
      detail: "Christians believe Jesus is the Messiah who fulfills Israel's hope, but he does it through suffering, resurrection, and a kingdom unlike ordinary political power.",
      start: "In John, notice how people ask whether Jesus is the Christ.",
      tags: ["Christ", "king", "Israel"],
    },
    {
      title: "Grace",
      kicker: "Gift",
      summary: "God's generous favor, not something earned by performance.",
      detail: "Grace names God's initiative toward people who cannot repair themselves. It is central to how Christians understand forgiveness and salvation.",
      start: "Look for grace beside faith, forgiveness, and new life.",
      tags: ["gift", "forgiveness", "salvation"],
    },
    {
      title: "Faith",
      kicker: "Trust",
      summary: "Trusting Jesus with allegiance, not only agreeing with facts.",
      detail: "Faith includes belief, trust, dependence, and learning to follow. In John, faith often appears as believing in Jesus.",
      start: "Ask what the person trusts Jesus to be or do.",
      tags: ["belief", "trust", "disciple"],
    },
    {
      title: "Repentance",
      kicker: "Turn around",
      summary: "A change of direction toward God.",
      detail: "Repentance means telling the truth, turning from sin, and moving toward God. It is not shame for its own sake; it is a return.",
      start: "Watch for turning, confessing, and receiving mercy.",
      tags: ["sin", "mercy", "change"],
    },
    {
      title: "Sin",
      kicker: "Rupture",
      summary: "The corruption and rebellion that separates people from God.",
      detail: "Sin is personal and communal. It harms others, distorts the self, and fractures communion with God. Jesus is presented as the one who deals with sin.",
      start: "Notice where Jesus forgives, heals, exposes, or restores.",
      tags: ["forgiveness", "evil", "rescue"],
    },
    {
      title: "Kingdom of God",
      kicker: "God's reign",
      summary: "God's rule and renewal arriving through Jesus.",
      detail: "The kingdom is not merely a place after death. It is God's authority and life breaking into the world, calling people into a new way of living.",
      start: "Track kingdom language especially in Matthew, Mark, and Luke.",
      tags: ["reign", "renewal", "Jesus"],
    },
    {
      title: "Disciple",
      kicker: "Learner",
      summary: "Someone who follows and learns from a teacher.",
      detail: "A disciple of Jesus is not only a student of ideas. Disciples learn his way of life, imitate his practices, and become shaped by him.",
      start: "Ask what Jesus is teaching his followers to become.",
      tags: ["follow", "practice", "apprentice"],
    },
    {
      title: "Resurrection",
      kicker: "Raised life",
      summary: "Jesus raised bodily from death.",
      detail: "The resurrection is the Christian claim that Jesus defeated death and began new creation. It is the hinge of Christian faith and hope.",
      start: "Read John 20 slowly after finishing the earlier signs.",
      tags: ["Easter", "new creation", "hope"],
    },
    {
      title: "Covenant",
      kicker: "Binding promise",
      summary: "A committed relationship God establishes with people.",
      detail: "Covenants structure the Bible's storyline: Noah, Abraham, Israel, David, and the new covenant. They help explain promise, law, faithfulness, and fulfillment.",
      start: "Use covenant when Old Testament promises show up in the Gospels.",
      tags: ["promise", "Israel", "storyline"],
    },
    {
      title: "Pharisees",
      kicker: "Religious movement",
      summary: "A Jewish renewal group concerned with Torah and holiness.",
      detail: "The Pharisees were not cartoon villains. In the Gospels, some oppose Jesus, some question him, and some show interest. They matter because Jesus debates authority, interpretation, and true faithfulness with them.",
      start: "Notice whether the conflict is about Sabbath, purity, authority, or identity.",
      tags: ["Judaism", "law", "leaders"],
    },
    {
      title: "Sabbath",
      kicker: "Rest",
      summary: "A rhythm of stopping, worshiping, and receiving life from God.",
      detail: "Sabbath is rooted in creation and Israel's life with God. Jesus' Sabbath conflicts reveal his authority and his concern for mercy and restoration.",
      start: "Watch how Jesus heals and teaches on the Sabbath.",
      tags: ["rest", "practice", "creation"],
    },
  ],
  people: [
    {
      title: "Jesus",
      kicker: "Center",
      summary: "The Son of God, Messiah, crucified and risen Lord.",
      detail: "The New Testament presents Jesus as the one who reveals God, announces God's kingdom, forgives sins, dies, rises, and calls people to follow him.",
      start: "In every passage, ask what this scene shows about Jesus.",
      tags: ["Messiah", "Son of God", "Lord"],
    },
    {
      title: "John the Baptist",
      kicker: "Witness",
      summary: "The prophet-like figure who prepares the way for Jesus.",
      detail: "John calls people to repentance and points beyond himself. In John's Gospel, his role is to testify that Jesus is the one people should follow.",
      start: "Read John 1 and notice how John redirects attention to Jesus.",
      tags: ["repentance", "witness", "Jordan"],
    },
    {
      title: "Mary, mother of Jesus",
      kicker: "Mother",
      summary: "Jesus' mother, present at key moments in his life.",
      detail: "Mary appears in the birth narratives, at the wedding in Cana, and near the cross. She anchors Jesus' story in real family and faithful obedience.",
      start: "Compare Luke 1-2 with John 2 and John 19.",
      tags: ["Cana", "family", "Luke"],
    },
    {
      title: "Mary Magdalene",
      kicker: "Witness",
      summary: "A follower of Jesus and first witness to the risen Lord in John.",
      detail: "Mary Magdalene stands near the cross and comes to the tomb. John 20 presents her encounter with the risen Jesus as a major resurrection witness.",
      start: "Read John 20 and notice when recognition happens.",
      tags: ["resurrection", "witness", "tomb"],
    },
    {
      title: "Peter",
      kicker: "Disciple",
      summary: "A leading disciple who fails, returns, and helps lead the early church.",
      detail: "Peter is bold, impulsive, and restored by Jesus after denial. Acts later shows him preaching and leading in the early Christian movement.",
      start: "Follow Peter from John 13, John 18, John 21, and Acts 2.",
      tags: ["disciple", "Acts", "restoration"],
    },
    {
      title: "Nicodemus",
      kicker: "Teacher",
      summary: "A Pharisee who comes to Jesus at night.",
      detail: "Nicodemus helps introduce themes of new birth, belief, and misunderstanding in John 3. He later appears more sympathetically in John 7 and John 19.",
      start: "Use Nicodemus to ask what being born again means.",
      tags: ["John 3", "Pharisee", "new birth"],
    },
    {
      title: "The Samaritan woman",
      kicker: "Outsider",
      summary: "A woman Jesus meets at a well in John 4.",
      detail: "This encounter crosses gender, ethnic, moral, and religious boundaries. It shows Jesus offering living water and revealing himself beyond expected insiders.",
      start: "Notice how the conversation moves from water to worship to Messiah.",
      tags: ["Samaria", "living water", "worship"],
    },
    {
      title: "Lazarus",
      kicker: "Sign",
      summary: "The man Jesus raises from the dead in John 11.",
      detail: "Lazarus' raising is a major sign that points toward Jesus as resurrection and life. It also intensifies the conflict that leads to the cross.",
      start: "Read John 11 as both comfort and confrontation.",
      tags: ["Bethany", "resurrection", "sign"],
    },
    {
      title: "Pontius Pilate",
      kicker: "Roman governor",
      summary: "The Roman official involved in Jesus' trial and crucifixion.",
      detail: "Pilate represents Roman authority and political pressure. The Gospels show him questioning Jesus while still handing him over to be crucified.",
      start: "Watch how kingship language appears in the trial scenes.",
      tags: ["Rome", "cross", "trial"],
    },
    {
      title: "Paul",
      kicker: "Apostle",
      summary: "A former persecutor who becomes a major missionary and letter writer.",
      detail: "Paul matters especially after the Gospels. Acts tells his conversion and mission, while letters like Romans and Ephesians explain Jesus' significance for Jews and Gentiles.",
      start: "Meet Paul in Acts 9 before reading Romans.",
      tags: ["Acts", "letters", "mission"],
    },
  ],
  locations: [
    {
      title: "Jerusalem",
      kicker: "City",
      summary: "The central city of Jewish worship and the place of Jesus' death and resurrection.",
      detail: "Jerusalem contains the Temple and carries political, religious, and prophetic weight. In the Gospels it becomes the stage for final conflict, crucifixion, and resurrection.",
      start: "When the story moves to Jerusalem, expect tension to rise.",
      tags: ["Temple", "cross", "resurrection"],
    },
    {
      title: "Galilee",
      kicker: "Region",
      summary: "The northern region where much of Jesus' public ministry happens.",
      detail: "Galilee includes towns and villages around the Sea of Galilee. It is where Jesus calls disciples, teaches, heals, and becomes known among ordinary people.",
      start: "Use Galilee as the everyday ministry setting.",
      tags: ["ministry", "disciples", "north"],
    },
    {
      title: "Nazareth",
      kicker: "Hometown",
      summary: "The town associated with Jesus' upbringing.",
      detail: "Nazareth is small and not prestigious. Calling Jesus 'Jesus of Nazareth' roots him in a real place and also carries social surprise.",
      start: "Notice when people question whether anything important can come from Nazareth.",
      tags: ["Jesus", "Galilee", "hometown"],
    },
    {
      title: "Bethlehem",
      kicker: "Birthplace",
      summary: "The town connected to David and Jesus' birth.",
      detail: "Bethlehem matters because of its connection to King David and messianic expectation. Matthew and Luke connect Jesus' birth to this setting.",
      start: "Read Matthew 2 and Luke 2 when comparing birth narratives.",
      tags: ["birth", "David", "Messiah"],
    },
    {
      title: "Capernaum",
      kicker: "Ministry base",
      summary: "A Galilean town where Jesus teaches and heals.",
      detail: "Capernaum appears often in the Synoptic Gospels as a base for public ministry around the lake.",
      start: "Track it as part of Jesus' early Galilee work.",
      tags: ["Galilee", "healing", "teaching"],
    },
    {
      title: "Samaria",
      kicker: "Contested region",
      summary: "A region between Judea and Galilee with deep Jewish-Samaritan tension.",
      detail: "Samaria matters because Jesus crosses a boundary many avoided. John 4 and Acts 8 show the gospel moving through this contested space.",
      start: "Use Samaria whenever outsider and worship questions appear.",
      tags: ["outsider", "John 4", "mission"],
    },
    {
      title: "The Temple",
      kicker: "Worship center",
      summary: "The center of sacrifice, worship, teaching, and national identity.",
      detail: "The Temple is not just a church building. It is the center of Jewish worship and a major setting for Jesus' teaching, conflict, and prophetic action.",
      start: "When Jesus is in the Temple, authority questions are usually near.",
      tags: ["Jerusalem", "worship", "authority"],
    },
    {
      title: "Jordan River",
      kicker: "Baptism",
      summary: "The river associated with John the Baptist's ministry.",
      detail: "The Jordan carries Old Testament memory and becomes the setting where repentance, baptism, and Jesus' public identification are introduced.",
      start: "Connect it to John the Baptist and new beginnings.",
      tags: ["John the Baptist", "repentance", "baptism"],
    },
    {
      title: "Bethany",
      kicker: "Near Jerusalem",
      summary: "The village associated with Mary, Martha, and Lazarus.",
      detail: "Bethany is close to Jerusalem and becomes important in John 11-12. Lazarus' raising there pushes the story toward the final week.",
      start: "Read John 11-12 with Jerusalem close in the background.",
      tags: ["Lazarus", "Mary", "Martha"],
    },
    {
      title: "Rome",
      kicker: "Empire",
      summary: "The imperial power behind crucifixion and the wider world of the New Testament.",
      detail: "Rome shapes taxes, roads, military authority, citizenship, and execution. Acts eventually carries the Christian witness toward Rome itself.",
      start: "Use Rome to understand power, trial, roads, and mission.",
      tags: ["empire", "Pilate", "Acts"],
    },
    {
      title: "Old Testament foundations",
      kicker: "Before Jesus",
      summary: "Creation, covenant, Israel, kings, prophets, exile, and hope.",
      detail: "The New Testament assumes this background. You do not need to master it first, but categories like covenant, kingdom, sacrifice, exile, and Messiah come from here.",
      start: "When John uses words like Word, Lamb, or Messiah, Old Testament echoes are nearby.",
      tags: ["Israel", "covenant", "promise"],
    },
    {
      title: "Second Temple Judaism",
      kicker: "Jesus' world",
      summary: "The Jewish world after exile and before the Temple's destruction in AD 70.",
      detail: "This is the world of Pharisees, Sadducees, synagogues, festivals, Roman occupation, and messianic expectation.",
      start: "Use this lens for Temple scenes, festivals, and religious debates.",
      tags: ["Pharisees", "Temple", "Rome"],
    },
    {
      title: "Birth and preparation",
      kicker: "Gospel opening",
      summary: "Jesus' birth, John the Baptist, and the start of public ministry.",
      detail: "Matthew and Luke tell birth stories. Mark starts with John the Baptist. John starts even earlier with the Word, then introduces witness and signs.",
      start: "Compare how each Gospel begins differently.",
      tags: ["birth", "John the Baptist", "Gospels"],
    },
    {
      title: "Public ministry",
      kicker: "Teaching and signs",
      summary: "Jesus teaches, heals, gathers disciples, and reveals the kingdom.",
      detail: "This is where many Gospel scenes happen: parables, healings, debates, meals, miracles, and calls to follow.",
      start: "Ask what each sign or teaching reveals about Jesus.",
      tags: ["Galilee", "disciples", "kingdom"],
    },
    {
      title: "Final week",
      kicker: "Jerusalem",
      summary: "Jesus enters Jerusalem, teaches, eats the last supper, is arrested, tried, and crucified.",
      detail: "The final week receives a large amount of Gospel attention because the cross is central to Christian faith.",
      start: "When the story reaches Jerusalem, slow down.",
      tags: ["cross", "Temple", "Passover"],
    },
    {
      title: "Resurrection",
      kicker: "New creation",
      summary: "Jesus is raised and appears to his followers.",
      detail: "The resurrection changes the meaning of everything before it. It sends the disciples from fear into witness.",
      start: "Read John 20-21, Luke 24, and Acts 1 together.",
      tags: ["Easter", "witness", "hope"],
    },
    {
      title: "Pentecost and early church",
      kicker: "Acts",
      summary: "The Spirit empowers witness and the church begins to spread.",
      detail: "Acts moves from Jerusalem outward. It shows preaching, community, conflict, inclusion of Gentiles, and missionary expansion.",
      start: "Read Acts after Luke to keep the story continuous.",
      tags: ["Spirit", "church", "mission"],
    },
    {
      title: "Letters and formation",
      kicker: "Romans onward",
      summary: "Early Christian leaders teach churches how to understand and live the gospel.",
      detail: "Letters like Romans and Ephesians explain grace, faith, unity, the church, holiness, suffering, and hope in light of Jesus.",
      start: "Read letters after the Gospels and Acts have given you the story.",
      tags: ["Paul", "church", "doctrine"],
    },
  ],
};

const tabLabels = {
  reference: "Reference",
  people: "People",
  locations: "Locations + Timeline",
};

const tabAliases = {
  vocabulary: "reference",
  places: "locations",
  timeline: "locations",
};

const state = {
  tab: "reference",
  query: "",
};

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function searchable(item) {
  return [item.title, item.kicker, item.summary, item.detail, item.start, ...(item.tags || [])]
    .join(" ")
    .toLowerCase();
}

function referenceCard(item) {
  const tagMarkup = item.tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("");

  return `
    <article class="card reference-card">
      <div class="reference-card-head">
        <span class="pill">${escapeHtml(item.kicker)}</span>
      </div>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <strong>${escapeHtml(item.summary)}</strong>
      </div>
      <p>${escapeHtml(item.detail)}</p>
      <div class="reference-start">
        <span>Start here</span>
        <p>${escapeHtml(item.start)}</p>
      </div>
      <div class="resource-meta">${tagMarkup}</div>
    </article>
  `;
}

function filteredItems() {
  const query = state.query.trim().toLowerCase();
  const items = referenceData[state.tab] || [];
  if (!query) return items;
  return items.filter((item) => searchable(item).includes(query));
}

function renderReference() {
  const grid = document.getElementById("reference-grid");
  const summary = document.getElementById("reference-summary");
  if (!grid || !summary) return;

  const items = filteredItems();
  const label = tabLabels[state.tab] || "Reference";
  summary.innerHTML = `
    <span>${escapeHtml(label)}</span>
    <strong>${items.length} ${items.length === 1 ? "entry" : "entries"}</strong>
  `;

  grid.innerHTML = items.length
    ? items.map(referenceCard).join("")
    : `
      <article class="card reference-empty">
        <h3>No matches yet</h3>
        <p>Try a broader word, switch tabs, or clear the search to browse the whole section.</p>
      </article>
    `;
}

function setupReferenceTabs() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-reference-tab]");
    if (!button) return;
    setReferenceTab(button.dataset.referenceTab || "reference");
  });
}

function setReferenceTab(tabName) {
  const buttons = [...document.querySelectorAll("[data-reference-tab]")];
  const normalizedTab = tabAliases[tabName] || tabName;
  const nextTab = referenceData[normalizedTab] ? normalizedTab : "reference";

  state.tab = nextTab;
  buttons.forEach((item) => {
    const active = item.dataset.referenceTab === nextTab;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-selected", String(active));
  });
  renderReference();
}

function setupReferenceSearch() {
  const search = document.getElementById("reference-search");
  if (!search) return;

  search.addEventListener("input", () => {
    state.query = search.value;
    renderReference();
  });
}

function setupReferenceJumps() {
  document.querySelectorAll("[data-reference-jump]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const tabName = link.dataset.referenceJump || "reference";
      const normalizedTab = tabAliases[tabName] || tabName;
      event.preventDefault();
      setReferenceTab(normalizedTab);
      history.replaceState(null, "", `#${normalizedTab}`);
      document.getElementById("reference-browser")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupReferenceHash() {
  const applyHash = () => {
    const hashTab = window.location.hash.replace("#", "");
    const tabName = tabAliases[hashTab] || hashTab;
    if (!referenceData[tabName]) return;
    setReferenceTab(tabName);
    document.getElementById("reference-browser")?.scrollIntoView({ behavior: "auto", block: "start" });
  };

  window.addEventListener("hashchange", applyHash);
  applyHash();
}

setupReferenceTabs();
setupReferenceSearch();
setupReferenceJumps();
renderReference();
setupReferenceHash();
