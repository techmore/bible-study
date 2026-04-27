# The Way: From Zero to One With Jesus

## Core Direction

The site should become a guided first journey, not only a resource library.

Primary promise:

> Start with Jesus. Read John. Listen along. Understand what you are reading. Then take the next step.

The first experience should answer one question clearly:

> What do I do today?

Everything else should support that path without overwhelming the newcomer.

## Product Shape

Build the site around three layers:

1. **The First Path**
   A narrow, opinionated path for someone starting from zero.

2. **The Lightbulb Layer**
   Small side panels that explain confusing words, questions, and resource choices at the moment they matter.

3. **The Practices Layer**
   Christian habits introduced after the person has first encountered Jesus in the Gospels.

This keeps the site clear while still giving room for Sabbath, prayer, Scripture, community, service, and other practices.

## The First 7 Days With John

This should be the next major feature.

Place it soon after the existing "Start Here" section.

Each day should include:

- a Gospel of John reading
- an audio/read-along link
- one simple question
- one optional "go deeper" lightbulb
- a checkbox saved with `localStorage`

Suggested path:

| Day | Reading | Focus | Reflection Question |
| --- | --- | --- | --- |
| 1 | John 1 | Jesus as the Word, light, and Son of God | Who does John say Jesus is? |
| 2 | John 2-3 | Signs, new birth, belief | What does Jesus say a person needs? |
| 3 | John 4 | Jesus meets outsiders | Who does Jesus welcome? |
| 4 | John 5-6 | Authority, signs, bread of life | What are people looking for from Jesus? |
| 5 | John 7-10 | Conflict, identity, shepherd | Why do people divide over Jesus? |
| 6 | John 11-17 | Resurrection, love, final teaching | What does Jesus promise his followers? |
| 7 | John 18-21 | Cross, resurrection, restoration | What does Jesus accomplish? |

### Day 7 and Sabbath

The Sabbath idea belongs here, but gently.

Do not turn Day 7 into a large doctrine section. Use it as a humane invitation:

> After seven days, pause. Scripture begins with a rhythm of work and rest. Before adding more information, take time to rest, pray, and notice what you have seen about Jesus.

Possible Day 7 lightbulb:

**Why rest matters**

Short explanation:

Sabbath is a biblical rhythm of stopping, resting, worshiping, and remembering that life is received from God, not earned by constant effort. A beginner does not need to master Sabbath immediately. They can start by taking one unhurried block of time to read, pray, walk, worship, or be still.

Suggested links later:

- BibleProject Sabbath theme resources
- Matthew 11:28-30
- Mark 2:27
- Genesis 2:1-3

## The First 14 Days

Days 1-7 should stay focused on meeting Jesus through John.

Days 8-14 can begin adding practices one at a time.

Suggested path:

| Day | Practice | Aim |
| --- | --- | --- |
| 8 | Scripture | Learn how to keep reading without getting lost |
| 9 | Prayer | Learn simple honest prayer |
| 10 | Sabbath / Rest | Learn to stop and receive |
| 11 | Community | Learn why Christianity is not meant to be solitary |
| 12 | Generosity | Learn the shape of love with money and possessions |
| 13 | Service | Learn to imitate Jesus in practical love |
| 14 | Witness | Learn how to speak simply about what you are seeing |

Fasting and solitude are valuable, but they should probably come after the first two weeks. They can be intense or misunderstood by newcomers if introduced too early.

## Practices Library

Create a later section called "Explore the Practices."

Practices:

- Sabbath
- Prayer
- Fasting
- Solitude
- Generosity
- Scripture
- Community
- Service
- Witness

Each practice card should have:

- a one-sentence definition
- why it matters
- a beginner version
- a mature version
- one passage to read
- one trusted resource link

Example:

### Sabbath

Definition:

Sabbath is a rhythm of stopping, resting, worshiping, and delighting in God.

Beginner version:

Take one unhurried block of time each week to stop working, silence distractions, read Scripture, pray, walk, worship, or share a meal.

Passages:

- Genesis 2:1-3
- Exodus 20:8-11
- Mark 2:27
- Matthew 11:28-30

## Lightbulb Panels to Add

Reuse the side panel pattern already added for listening resources.

High-value panels:

- **Why John first?**
  Explain why John is a good first Gospel without implying the other Gospels are less important.

- **What is the Gospel?**
  Explain good news, Jesus, kingdom, cross, resurrection, repentance, faith, and forgiveness in plain language.

- **What translation should I use?**
  Recommend NIV or NLT for first reading, ESV/CSB/NASB for comparison, and interlinear tools only later.

- **Why are there four Gospels?**
  Explain four witnesses, four angles, one Jesus.

- **What do Christians mean by saved?**
  Explain rescue, forgiveness, reconciliation, new life, and allegiance to Jesus.

- **How do I pray?**
  Give a simple prayer pattern: honest words, gratitude, confession, request, listening, the Lord's Prayer.

- **What is Sabbath?**
  Introduce rest at the right moment, probably Day 7 or Day 10.

## Beginner Glossary

Add a small glossary for words that block newcomers.

Initial terms:

- Gospel
- Jesus Christ
- Messiah
- Son of God
- Son of Man
- Sin
- Grace
- Faith
- Repentance
- Kingdom of God
- Covenant
- Resurrection
- Disciple
- Church
- Prayer
- Sabbath

Implementation idea:

Use one static glossary data object in `app.js` and render glossary cards. Later, selected words can open a side panel.

## Resource Curation Direction

The resource library should clearly separate "start here" from "later."

Suggested labels:

- Start Today
- Beginner Friendly
- Read Along
- Study Bible
- Deep Study
- Practices
- Historical Context

Recommended beginner-accessible Bible resources to consider:

- BibleGateway for reading and listening
- BibleProject for visual overviews and themes
- BibleHub for interlinear and word study, marked as "later"
- NIV or NLT for first reading
- ESV or CSB for comparison
- A good study Bible as an optional next step

Study Bible direction:

The site should not overwhelm beginners with too many editions. Recommend by use case:

- **Best first study Bible:** NIV Study Bible or Life Application Study Bible
- **Best readable translation:** NLT or NIV
- **Best comparison Bible:** ESV Study Bible or CSB Study Bible
- **Best later tool:** BibleHub interlinear

Avoid making the beginner feel they must buy something. Always offer free web alternatives first.

## UX Principles

- The first screen should point to one next action.
- Every section should answer "what do I do with this?"
- Avoid dumping resources without sequence.
- Use lightbulbs for "help me understand this" moments.
- Keep the main path emotionally calm and spiritually warm.
- Use optional depth, not mandatory depth.
- Remind the user that rest is part of the path, not failure to study.

## Implementation Plan

### Phase 1: First 7 Days

- Add a "First 7 Days With John" section to `index.html`.
- Add day cards with reading, listening, reflection question, and checkbox.
- Use `localStorage` to persist completion.
- Add one lightbulb panel for Day 7 rest/Sabbath.

### Phase 2: Lightbulb System

- Generalize the current listening drawer into reusable drawer content.
- Support multiple trigger buttons with `data-drawer-topic`.
- Add panels for John, Gospel, translations, prayer, and Sabbath.

### Phase 3: Glossary

- Add a glossary data object in `app.js`.
- Render glossary cards or a searchable glossary section.
- Link glossary terms from lightbulb panels.

### Phase 4: Practices

- Add "Explore the Practices" after the 14-day path or near the resource library.
- Keep each practice card short.
- Use the drawer for beginner steps and passages.

### Phase 5: Resource Library Cleanup

- Add labels for Start Today, Beginner Friendly, and Later.
- Move advanced tools lower.
- Add study Bible guidance without making purchases feel required.

## North Star

The site should help a newcomer say:

> I know what to read today. I know how to listen along. I understand the main words better. I have a next step. I am not being rushed, and I am being invited toward Jesus.
