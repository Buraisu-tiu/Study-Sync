# ✅ Full Project Checklist – Study Reward Desktop App

---

## 🔧 PHASE 1: Project Setup

- [ ] Initialize Git repository
- [ ] Set up `README.md` and `checklist.md`
- [ ] Install Node.js and npm
- [ ] Create root project folder

### Electron + React Setup
- [ ] Scaffold Electron app using Electron Forge or Electron Builder
- [ ] Integrate React with Electron
- [ ] Set up Tailwind CSS
- [ ] Confirm live-reload works with Electron and React
- [ ] Set up folder structure:
  - [ ] `/src`
  - [ ] `/components`
  - [ ] `/pages`
  - [ ] `/assets`
  - [ ] `/state`
  - [ ] `/backend`
  - [ ] `/data`
- [ ] Install required dev dependencies (ESLint, Prettier, etc.)

---

## 📦 PHASE 2: Base Infrastructure

- [ ] Setup Zustand (or Redux) for global state management
- [ ] Setup local SQLite database
- [ ] Connect database to Electron (via IPC if needed)
- [ ] Create simple logging utility for debugging
- [ ] Create centralized config file (for themes, XP formulas, etc.)
- [ ] Setup basic routing (if using page views)

---

## 🎮 PHASE 3: Gamification Engine

### XP System
- [ ] Define XP formula based on activity type
- [ ] Create XP tracker (global state + persistent storage)
- [ ] Build XP bar component
- [ ] Add XP feedback animation (small popup or sound)

### Levels & Titles
- [ ] Design level curve (XP per level)
- [ ] Map titles to levels (e.g., Level 1 = Novice, Level 10 = Scholar)
- [ ] Add visual level display

### Achievements
- [ ] Define list of achievements
- [ ] Track completion of achievement conditions
- [ ] Build achievement pop-up UI
- [ ] Add achievement history/log page

---

## 🌳 PHASE 4: Knowledge Visualization

### Knowledge Tree
- [ ] Design data structure for tree nodes
- [ ] Create UI for interactive knowledge tree
- [ ] Connect tree growth to XP/quiz progress
- [ ] Animate tree node unlocks

### Flashcard Mastery Nodes
- [ ] Implement spaced repetition algorithm
- [ ] Create flashcard review system
- [ ] Link review progress to visual tree indicators

---

## 🎓 PHASE 5: Core Study Tools

### Pomodoro Timer
- [ ] Implement start/stop/reset functionality
- [ ] Add customizable focus/break durations
- [ ] Track time spent per day/session
- [ ] Add notification sound when session ends

### Study Sessions
- [ ] Build session start screen (set focus goal, subject, mood)
- [ ] Log session start/end in local DB
- [ ] Display session summary (XP, knowledge gained, etc.)
- [ ] Add motivational quote or feedback after session ends

---

## 🧍 PHASE 6: Personalization & Investment

### Avatar System
- [ ] Build avatar builder UI (choose skin, gear, etc.)
- [ ] Unlock avatar parts based on level or achievements
- [ ] Animate avatar based on progress (e.g., glow with XP)

### Build-Your-World
- [ ] Create study room UI
- [ ] Unlock decorative elements
- [ ] Save & load personalized room state

---

## 📊 PHASE 7: Analytics & Memory Metrics

- [ ] Track total study hours
- [ ] Show weekly/monthly trends (charts)
- [ ] Add "memory strength" meter per topic
- [ ] Display retention score from flashcards
- [ ] Summarize progress across different subjects

---

## 🌐 PHASE 8: Social & Multiplayer

- [ ] Create local friend system or invite code system
- [ ] Implement leaderboard (XP-based)
- [ ] Implement study room with shared timer
- [ ] Track team challenges and group goals

---

## 🧪 PHASE 9: Testing

- [ ] Write unit tests (Jest) for core logic (XP, timer, tree growth)
- [ ] Write integration tests for sessions and DB
- [ ] Perform manual UX testing on all views
- [ ] Test offline behavior and error states
- [ ] Run E2E tests (Playwright or equivalent)

---

## 🖌 PHASE 10: Polish & UX Enhancements

- [ ] Improve UI responsiveness and animations
- [ ] Add dark/light theme toggle
- [ ] Polish icons, tooltips, and hover effects
- [ ] Optimize for performance and low CPU usage
- [ ] Add accessibility tags (ARIA, keyboard nav)
- [ ] Add sound effects or feedback cues

---

## 🚢 PHASE 11: Packaging & Deployment

- [ ] Add splash screen and app icon
- [ ] Configure Electron packaging (Windows, Mac, Linux)
- [ ] Test packaged builds
- [ ] Add auto-updater (Electron Builder or custom)
- [ ] Publish app to GitHub Releases / itch.io / custom site
- [ ] Prepare marketing materials (description, screenshots, etc.)

---

## 📌 Post-Release

- [ ] Monitor for user bug reports
- [ ] Collect user feedback for v2
- [ ] Consider adding account system for cloud sync (later)
- [ ] Evaluate mobile port possibility (React Native or Flutter)

---

> “Build it like it matters—because making learning feel good *does* matter.”
