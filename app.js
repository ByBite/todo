const STORAGE_KEY = "todo.tasks.v1";
const LANGUAGE_KEY = "todo.language.v1";

const translations = {
  pl: {
    pageTitle: "ToDo - prosta lista zadań zapisywana w przeglądarce",
    pageDescription:
      "Prosta aplikacja todo do tworzenia, filtrowania i odhaczania zadań. Lista zapisuje dane lokalnie w przeglądarce.",
    inputLabel: "Nowe zadanie",
    languageSwitcherLabel: "Wybór języka",
    inputPlaceholder: "Dodaj nowe zadanie...",
    addButton: "Dodaj",
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
    htmlLang: "pl",
  },
  en: {
    pageTitle: "ToDo - simple task list saved in your browser",
    pageDescription:
      "A simple todo app for adding, filtering, and completing tasks. Your list is saved locally in the browser.",
    inputLabel: "New task",
    languageSwitcherLabel: "Language selection",
    inputPlaceholder: "Add a new task...",
    addButton: "Add",
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
    htmlLang: "en",
  },
  de: {
    pageTitle: "ToDo - einfache Aufgabenliste im Browser gespeichert",
    pageDescription:
      "Eine einfache ToDo-App zum Erstellen, Filtern und Abhaken von Aufgaben. Die Liste wird lokal im Browser gespeichert.",
    inputLabel: "Neue Aufgabe",
    languageSwitcherLabel: "Sprachauswahl",
    inputPlaceholder: "Neue Aufgabe hinzufügen...",
    addButton: "Hinzufügen",
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
    htmlLang: "de",
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
const filterButtons = document.querySelectorAll(".filter");
const languageButtons = document.querySelectorAll(".language-button");

let tasks = loadTasks();
let currentFilter = "all";
let currentLanguage = loadLanguage();

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

function saveLanguage(language) {
  localStorage.setItem(LANGUAGE_KEY, language);
}

function t(key, values = {}) {
  const value = translations[currentLanguage][key] ?? translations.pl[key] ?? "";
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
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');

  description?.setAttribute("content", t("pageDescription"));
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
  tasks.unshift({
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
    text,
    done: false,
    createdAt: Date.now(),
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
