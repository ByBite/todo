const STORAGE_KEY = "todo.tasks.v1";
const LANGUAGE_KEY = "todo.language.v1";
const GLOBAL_TIMER_KEY = "todo.globalTimer.v1";

const translations = {
  pl: {
    appHeading: "ToDo planer zadań",
    appIntro:
      "Planuj zadania, ustawiaj timer i zapisuj wszystko lokalnie w swojej przeglądarce.",
    pageTitle: "ToDo planer zadań - lista todo z timerami w przeglądarce",
    pageDescription:
      "Planuj zadania w prostej aplikacji ToDo z lokalnym zapisem, wieloma językami, timerami, gotowymi czasami i powiadomieniami.",
    inputLabel: "Nowe zadanie",
    languageSwitcherLabel: "Wybór języka",
    inputPlaceholder: "Dodaj nowe zadanie...",
    addButton: "Dodaj zadanie",
    timerLabel: "Timer",
    timerPresetsLabel: "Gotowe czasy timera",
    timerNone: "Bez timera",
    timerCustom: "Własny",
    customTimerLabel: "Własny czas",
    customHoursLabel: "Godziny",
    customMinutesLabel: "Minuty",
    customSecondsLabel: "Sekundy",
    globalTimerTitle: "Główny timer",
    globalTimerHelp: "Użyj jednego większego timera dla całej sesji pracy.",
    globalTimerPresetsLabel: "Gotowe czasy głównego timera",
    timerStart: "Start",
    timerPause: "Pauza",
    timerReset: "Reset",
    timerReady: "Gotowy",
    timerRunning: "Timer działa",
    timerPaused: "Timer zatrzymany",
    globalNotificationBody: "Główny timer zakończył odliczanie.",
    filtersLabel: "Filtry zadań",
    showTasksLabel: "Pokaż zadania",
    filterAll: "Wszystkie",
    filterActive: "Aktywne",
    filterDone: "Gotowe",
    clearCompleted: "Wyczyść gotowe",
    clearAll: "Wyczyść wszystkie",
    emptyState: "Brak zadań. Dodaj pierwsze i zróbmy porządek.",
    deleteTask: "Usuń zadanie",
    zeroTasks: "0 zadań",
    activeSingular: "1 aktywne",
    activePlural: "{count} aktywne",
    timeLeft: "Pozostało {time}",
    timeExpired: "Czas minął",
    notificationTitle: "Timer zakończony",
    notificationBody: "Czas na zadanie: {task}",
    htmlLang: "pl",
    ogLocale: "pl_PL",
  },
  en: {
    appHeading: "ToDo task planner",
    appIntro:
      "Plan tasks, set a timer, and keep everything saved locally in your browser.",
    pageTitle: "ToDo Task Planner - browser todo list with timers",
    pageDescription:
      "Plan tasks in a simple browser ToDo app with local storage, multilingual UI, task timers, presets, and desktop notifications.",
    inputLabel: "New task",
    languageSwitcherLabel: "Language selection",
    inputPlaceholder: "Add a new task...",
    addButton: "Add task",
    timerLabel: "Timer",
    timerPresetsLabel: "Timer presets",
    timerNone: "No timer",
    timerCustom: "Custom",
    customTimerLabel: "Custom time",
    customHoursLabel: "Hours",
    customMinutesLabel: "Minutes",
    customSecondsLabel: "Seconds",
    globalTimerTitle: "Focus timer",
    globalTimerHelp: "Use one larger timer for the whole task session.",
    globalTimerPresetsLabel: "Focus timer presets",
    timerStart: "Start",
    timerPause: "Pause",
    timerReset: "Reset",
    timerReady: "Ready",
    timerRunning: "Timer running",
    timerPaused: "Timer paused",
    globalNotificationBody: "The focus timer has finished.",
    filtersLabel: "Task filters",
    showTasksLabel: "Show tasks",
    filterAll: "All",
    filterActive: "Active",
    filterDone: "Done",
    clearCompleted: "Clear done",
    clearAll: "Clear all",
    emptyState: "No tasks yet. Add the first one and make some order.",
    deleteTask: "Delete task",
    zeroTasks: "0 tasks",
    activeSingular: "1 active",
    activePlural: "{count} active",
    timeLeft: "{time} left",
    timeExpired: "Time is up",
    notificationTitle: "Timer finished",
    notificationBody: "Time for task: {task}",
    htmlLang: "en",
    ogLocale: "en_US",
  },
  de: {
    appHeading: "ToDo Aufgabenplaner",
    appIntro:
      "Plane Aufgaben, stelle einen Timer ein und speichere alles lokal in deinem Browser.",
    pageTitle: "ToDo Aufgabenplaner - Browser-ToDo-Liste mit Timern",
    pageDescription:
      "Plane Aufgaben in einer einfachen ToDo-App mit lokalem Speicher, mehreren Sprachen, Timern, Vorlagen und Benachrichtigungen.",
    inputLabel: "Neue Aufgabe",
    languageSwitcherLabel: "Sprachauswahl",
    inputPlaceholder: "Neue Aufgabe hinzufügen...",
    addButton: "Aufgabe hinzufügen",
    timerLabel: "Timer",
    timerPresetsLabel: "Timer-Vorlagen",
    timerNone: "Ohne Timer",
    timerCustom: "Eigener",
    customTimerLabel: "Eigene Zeit",
    customHoursLabel: "Stunden",
    customMinutesLabel: "Minuten",
    customSecondsLabel: "Sekunden",
    globalTimerTitle: "Haupttimer",
    globalTimerHelp: "Nutze einen größeren Timer für die ganze Arbeitssitzung.",
    globalTimerPresetsLabel: "Vorlagen für den Haupttimer",
    timerStart: "Start",
    timerPause: "Pause",
    timerReset: "Zurücksetzen",
    timerReady: "Bereit",
    timerRunning: "Timer läuft",
    timerPaused: "Timer pausiert",
    globalNotificationBody: "Der Haupttimer ist abgelaufen.",
    filtersLabel: "Aufgabenfilter",
    showTasksLabel: "Aufgaben anzeigen",
    filterAll: "Alle",
    filterActive: "Aktiv",
    filterDone: "Erledigt",
    clearCompleted: "Erledigte löschen",
    clearAll: "Alle löschen",
    emptyState: "Keine Aufgaben. Füge die erste hinzu und schaffe Ordnung.",
    deleteTask: "Aufgabe löschen",
    zeroTasks: "0 Aufgaben",
    activeSingular: "1 aktiv",
    activePlural: "{count} aktiv",
    timeLeft: "Noch {time}",
    timeExpired: "Zeit abgelaufen",
    notificationTitle: "Timer beendet",
    notificationBody: "Zeit für die Aufgabe: {task}",
    htmlLang: "de",
    ogLocale: "de_DE",
  },
};

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const template = document.querySelector("#task-template");
const emptyState = document.querySelector("#empty-state");
const counter = document.querySelector("#task-counter");
const clearCompleted = document.querySelector("#clear-completed");
const clearAll = document.querySelector("#clear-all");
const globalTimerDisplay = document.querySelector("#global-timer-display");
const globalTimerStatus = document.querySelector("#global-timer-status");
const globalCustomTimer = document.querySelector(".global-custom-timer");
const globalCustomHours = document.querySelector("#global-custom-hours");
const globalCustomMinutes = document.querySelector("#global-custom-minutes");
const globalCustomSeconds = document.querySelector("#global-custom-seconds");
const globalTimerStart = document.querySelector("#global-timer-start");
const globalTimerPause = document.querySelector("#global-timer-pause");
const globalTimerReset = document.querySelector("#global-timer-reset");
const filterButtons = document.querySelectorAll(".filter");
const languageButtons = document.querySelectorAll(".language-button");
const globalTimerPresetButtons = document.querySelectorAll(".global-timer-preset");

let tasks = loadTasks();
let currentFilter = "all";
let currentLanguage = loadLanguage();
let globalTimer = loadGlobalTimer();

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadLanguage() {
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return translations[saved] ? saved : "en";
  } catch {
    return "en";
  }
}

function loadGlobalTimer() {
  const defaultTimer = {
    durationMs: 10 * 60 * 1000,
    remainingMs: 10 * 60 * 1000,
    selectedDuration: "600000",
    running: false,
    endsAt: null,
    notified: false,
  };

  try {
    const saved = localStorage.getItem(GLOBAL_TIMER_KEY);
    if (!saved) {
      return defaultTimer;
    }

    return { ...defaultTimer, ...JSON.parse(saved), running: false, endsAt: null };
  } catch {
    return defaultTimer;
  }
}

function saveGlobalTimer() {
  localStorage.setItem(GLOBAL_TIMER_KEY, JSON.stringify(globalTimer));
}

function saveLanguage(language) {
  localStorage.setItem(LANGUAGE_KEY, language);
}

function t(key, values = {}) {
  const value = translations[currentLanguage][key] ?? translations.en[key] ?? "";
  return Object.entries(values).reduce(
    (text, [name, replacement]) => text.replace(`{${name}}`, replacement),
    value
  );
}

function visibleTasks() {
  if (currentFilter === "active") {
    return tasks.filter((task) => !task.done);
  }

  if (currentFilter === "done") {
    return tasks.filter((task) => task.done);
  }

  return tasks;
}

function updateDocumentMeta() {
  document.documentElement.lang = t("htmlLang");
  document.title = t("pageTitle");

  const description = document.querySelector('meta[name="description"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');

  description?.setAttribute("content", t("pageDescription"));
  ogLocale?.setAttribute("content", t("ogLocale"));
  ogTitle?.setAttribute("content", t("pageTitle"));
  ogDescription?.setAttribute("content", t("pageDescription"));
  twitterTitle?.setAttribute("content", t("pageTitle"));
  twitterDescription?.setAttribute("content", t("pageDescription"));
}

function applyTranslations({ animate = false } = {}) {
  const animatedElements = [
    document.querySelector(".task-form"),
    document.querySelector(".toolbar"),
    emptyState,
    counter,
  ].filter(Boolean);

  if (animate) {
    animatedElements.forEach((element) => {
      element.classList.remove("is-language-changing");
      void element.offsetWidth;
      element.classList.add("is-language-changing");
    });
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateDocumentMeta();
  updateCounter();
  updateGlobalTimerDisplay();
}

function updateCounter() {
  const activeCount = tasks.filter((task) => !task.done).length;
  const allCount = tasks.length;

  if (allCount === 0) {
    counter.textContent = t("zeroTasks");
    return;
  }

  counter.textContent =
    activeCount === 1 ? t("activeSingular") : t("activePlural", { count: activeCount });
}

function getGlobalCustomDuration() {
  const hours = Number(globalCustomHours.value);
  const minutes = Number(globalCustomMinutes.value);
  const seconds = Number(globalCustomSeconds.value);
  const safeHours = Number.isFinite(hours) && hours > 0 ? hours : 0;
  const safeMinutes = Number.isFinite(minutes) && minutes > 0 ? minutes : 0;
  const safeSeconds = Number.isFinite(seconds) && seconds > 0 ? seconds : 0;
  const totalSeconds = safeHours * 3600 + safeMinutes * 60 + safeSeconds;

  if (totalSeconds < 1) {
    return 10 * 60 * 1000;
  }

  return Math.round(totalSeconds * 1000);
}

function setGlobalTimerDuration(value) {
  const duration = value === "custom" ? getGlobalCustomDuration() : Number(value);

  globalTimer = {
    durationMs: duration,
    remainingMs: duration,
    selectedDuration: value,
    running: false,
    endsAt: null,
    notified: false,
  };

  globalTimerPresetButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.globalDuration === String(value));
  });
  globalCustomTimer.classList.toggle("is-hidden", value !== "custom");
  saveGlobalTimer();
  updateGlobalTimerDisplay();
}

function requestNotificationPermission() {
  if (!("Notification" in window) || Notification.permission !== "default") {
    return;
  }

  Notification.requestPermission();
}

function sendGlobalTimerNotification() {
  if (!("Notification" in window) || Notification.permission !== "granted") {
    return;
  }

  new Notification(t("notificationTitle"), {
    body: t("globalNotificationBody"),
    icon: "favicon.svg",
  });
}

function formatClock(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((part) => String(part).padStart(2, "0"))
    .join(":");
}

function formatDuration(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }

  return `${seconds}s`;
}

function updateGlobalTimerDisplay() {
  const remaining = globalTimer.running
    ? Math.max(0, globalTimer.endsAt - Date.now())
    : globalTimer.remainingMs;

  globalTimerDisplay.textContent = formatClock(remaining);

  if (remaining <= 0) {
    globalTimerStatus.textContent = t("timeExpired");
  } else if (globalTimer.running) {
    globalTimerStatus.textContent = t("timerRunning");
  } else if (remaining < globalTimer.durationMs) {
    globalTimerStatus.textContent = t("timerPaused");
  } else {
    globalTimerStatus.textContent = t("timerReady");
  }

  globalTimerPresetButtons.forEach((button) => {
    button.classList.toggle(
      "is-active",
      button.dataset.globalDuration === String(globalTimer.selectedDuration)
    );
  });
  globalCustomTimer.classList.toggle("is-hidden", globalTimer.selectedDuration !== "custom");
}

function startGlobalTimer() {
  if (globalTimer.remainingMs <= 0) {
    globalTimer.remainingMs = globalTimer.durationMs;
  }

  requestNotificationPermission();
  globalTimer.running = true;
  globalTimer.endsAt = Date.now() + globalTimer.remainingMs;
  globalTimer.notified = false;
  saveGlobalTimer();
  updateGlobalTimerDisplay();
}

function pauseGlobalTimer() {
  if (!globalTimer.running) {
    return;
  }

  globalTimer.remainingMs = Math.max(0, globalTimer.endsAt - Date.now());
  globalTimer.running = false;
  globalTimer.endsAt = null;
  saveGlobalTimer();
  updateGlobalTimerDisplay();
}

function resetGlobalTimer() {
  globalTimer.running = false;
  globalTimer.endsAt = null;
  globalTimer.remainingMs = globalTimer.durationMs;
  globalTimer.notified = false;
  saveGlobalTimer();
  updateGlobalTimerDisplay();
}

function tickGlobalTimer() {
  if (!globalTimer.running) {
    updateGlobalTimerDisplay();
    return;
  }

  globalTimer.remainingMs = Math.max(0, globalTimer.endsAt - Date.now());

  if (globalTimer.remainingMs <= 0) {
    globalTimer.running = false;
    globalTimer.endsAt = null;

    if (!globalTimer.notified) {
      globalTimer.notified = true;
      sendGlobalTimerNotification();
    }

    saveGlobalTimer();
  }

  updateGlobalTimerDisplay();
}

function renderTasks() {
  list.replaceChildren();

  const tasksToShow = visibleTasks();
  emptyState.classList.toggle("is-hidden", tasksToShow.length > 0);

  tasksToShow.forEach((task) => {
    const item = template.content.firstElementChild.cloneNode(true);
    const checkbox = item.querySelector(".task__checkbox");
    const text = item.querySelector(".task__text");
    const deleteButton = item.querySelector(".task__delete");

    item.dataset.id = task.id;
    item.classList.toggle("is-done", task.done);
    checkbox.checked = task.done;
    text.textContent = task.text;
    deleteButton.setAttribute("aria-label", t("deleteTask"));

    checkbox.addEventListener("change", () => toggleTask(task.id));
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    list.append(item);
  });

  updateCounter();
}

function addTask(text) {
  const now = Date.now();

  tasks.unshift({
    id: `${now.toString(36)}-${Math.random().toString(36).slice(2)}`,
    text,
    done: false,
    createdAt: now,
  });
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task
  );
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) {
    return;
  }

  addTask(text);
  input.value = "";
  input.focus();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderTasks();
  });
});

globalTimerPresetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setGlobalTimerDuration(button.dataset.globalDuration);
  });
});

[
  globalCustomHours,
  globalCustomMinutes,
  globalCustomSeconds,
].forEach((inputElement) => {
  inputElement.addEventListener("input", () => {
    if (globalTimer.selectedDuration === "custom" && !globalTimer.running) {
      setGlobalTimerDuration("custom");
    }
  });
});

globalCustomTimer.addEventListener("change", () => {
  if (globalTimer.selectedDuration === "custom" && !globalTimer.running) {
    setGlobalTimerDuration("custom");
  }
});

globalTimerStart.addEventListener("click", startGlobalTimer);
globalTimerPause.addEventListener("click", pauseGlobalTimer);
globalTimerReset.addEventListener("click", resetGlobalTimer);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLanguage = button.dataset.lang;
    if (!translations[nextLanguage] || nextLanguage === currentLanguage) {
      return;
    }

    currentLanguage = nextLanguage;
    saveLanguage(currentLanguage);
    applyTranslations({ animate: true });
    renderTasks();
  });
});

clearCompleted.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.done);
  saveTasks();
  renderTasks();
});

clearAll.addEventListener("click", () => {
  if (tasks.length === 0) {
    return;
  }

  tasks = [];
  saveTasks();
  renderTasks();
});

applyTranslations();
renderTasks();
updateGlobalTimerDisplay();
setInterval(() => {
  tickGlobalTimer();
}, 1000);
