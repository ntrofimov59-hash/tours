import type { Component } from "solid-js";

const links = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contacts", label: "Contacts" },
];

export const Footer: Component = () => {
  return (
    <footer>
      <span style={{ color: "var(--colors-fg-muted)" }}>
        © {new Date().getFullYear()} Logo
      </span>

      <nav aria-label="Footer navigation"></nav>
    </footer>
  );
};
