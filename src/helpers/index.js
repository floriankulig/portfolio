import ScrollOut from "scroll-out";

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

export const scrollAppearConfig = () => {
  ScrollOut({
    once: true,
    threshold: 0.6,
    targets: ["#about"],
  });
  ScrollOut({
    once: true,
    threshold: 0.2,
    targets: ["#projects", ".project"],
  });
  ScrollOut({
    once: true,
    threshold: 0.99,
    targets: ["#contact"],
  });
};
