export const mode = "prod";

export const navLinks = [
  { name: "Über Mich", url: "#about" },
  { name: "Projekte", url: "#projects" },
  { name: "Kontakt", url: "#contact" },
  { name: "Lebenslauf", url: "/resume.pdf" },
];

export const projects = [
  {
    title: "Todoist Clone",
    desc:
      "Ein Klon der Web-App von Todoist. Der Nutzer kann eigene Projekte erstellen, die wiederrum eigene ToDos haben. Diese werden sofort in die Datenbank eingetragen und auf allen eingeloggten Geräten synchronisiert.",
    techStack: ["React", "Firebase", "SCSS"],
    github: "https://github.com/floriankulig/Todoist-Clone/",
    url: "https://floriankulig.github.io/Todoist-Clone/",
    img: "todoist.png",
  },
  {
    title: "Sorting Algorithm Visualizer",
    desc:
      "Eine Desktop-App mit der verschiedene Sortier-Algorithmen visualisiert werden können. Die Elemente, die in der zu sortierenden Liste sind, werden als Säulen mit verschiedenen Höhen dargestellt.",
    techStack: ["Python", "Tkinter"],
    github: "https://github.com/floriankulig/SortingVisualizer",
    url: "",
    img: "sortvis.png",
  },
];

export const email = "florian.kulig@web.de";
