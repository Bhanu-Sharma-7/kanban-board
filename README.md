# 📋 Kanban Web Application

A minimalist, high-performance Kanban board built with pure HTML, CSS, and JavaScript. This application provides a seamless workflow management tool with a modern dark-themed interface.



## 🚀 Features

* **Drag & Drop Interface:** Move tasks effortlessly between "To Do", "In Progress", and "Done" columns.
* **Persistent Storage:** Uses `localStorage` to ensure your tasks remain saved even after refreshing the page.
* **Task Management:** Easily add new tasks via a modal and delete them when finished.
* **Dynamic Counters:** Real-time task counting for each column.
* **Smooth UI/UX:** Built with CSS variables for consistent spacing and high-quality transitions.

## 🔐 Permissions & Authentication

> [!IMPORTANT]
> To maintain data integrity, **only authenticated users** can create new notes or projects. Ensure your session is active before attempting to add new tasks.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure.
* **CSS3:** Modern layout using Flexbox and CSS Variables.
* **JavaScript:** Vanilla JS for drag-and-drop logic and state management.
* **Storage:** Browser `localStorage` API.

## 📂 Project Structure

```text
├── index.html   # Application layout and modals
├── style.css    # Dark mode styles and animations
└── script.js    # Drag-and-drop and storage logic

