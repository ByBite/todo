# ToDo

A simple browser-based ToDo app with a dark interface, smooth animations, and local data storage.

## Features

- Add new tasks.
- Mark tasks as done.
- Filter tasks by all, active, or done.
- Clear completed tasks.
- Clear all tasks.
- Use one large focus timer for the whole session with start, pause, reset, presets, and seconds display.
- Set a custom timer with hours, minutes, and seconds.
- Send a browser notification when the focus timer ends.
- Switch language between English, Polish, and German.
- Save tasks and the selected language in the browser with `localStorage`.
- Use local SVG flag images instead of emoji flags.

## How To Run

Open `index.html` directly in your browser.

No server, build step, or external dependency is required.

## Project Structure

- `index.html` - page structure, SEO metadata, and language switcher markup.
- `styles.css` - dark theme, responsive layout, and animations.
- `app.js` - task logic, local storage, filters, and translations.
- `favicon.svg` - app icon.
- `assets/` - local flag SVG files.

## Data Storage

Tasks are saved locally in the browser under the `todo.tasks.v1` key.
The selected language is saved under the `todo.language.v1` key.

---

# ToDo

Prosta aplikacja ToDo działająca w przeglądarce, z ciemnym interfejsem, płynnymi animacjami i lokalnym zapisem danych.

## Funkcje

- Dodawanie nowych zadań.
- Oznaczanie zadań jako wykonane.
- Filtrowanie zadań: wszystkie, aktywne lub gotowe.
- Czyszczenie wykonanych zadań.
- Czyszczenie wszystkich zadań.
- Jeden duży timer dla całej sesji z przyciskami start, pauza, reset, gotowymi czasami i sekundami na ekranie.
- Ustawianie własnego czasu przez godziny, minuty i sekundy.
- Wysyłanie powiadomienia w przeglądarce po zakończeniu głównego timera.
- Zmiana języka między angielskim, polskim i niemieckim.
- Zapisywanie zadań oraz wybranego języka w przeglądarce przez `localStorage`.
- Lokalne obrazki flag SVG zamiast flag jako emoji.

## Jak Uruchomić

Otwórz `index.html` bezpośrednio w przeglądarce.

Nie jest potrzebny serwer, proces budowania ani zewnętrzne zależności.

## Struktura Projektu

- `index.html` - struktura strony, metadane SEO i przełącznik języka.
- `styles.css` - ciemny motyw, responsywny układ i animacje.
- `app.js` - logika zadań, zapis lokalny, filtry i tłumaczenia.
- `favicon.svg` - ikona aplikacji.
- `assets/` - lokalne pliki SVG z flagami.

## Zapis Danych

Zadania są zapisywane lokalnie w przeglądarce pod kluczem `todo.tasks.v1`.
Wybrany język jest zapisywany pod kluczem `todo.language.v1`.
