import type { Component } from "solid-js";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contacts", label: "Contacts" },
];

type Props = {
  currentPath: string;
};

export const Header: Component<Props> = ({ currentPath }) => {
  const isActive = (path: string) => currentPath === path;

  return (
    <header>
      <a href="/">Logo</a>

      <nav aria-label="Main navigation">
        {links.map((link) => (
          <li>
            <a
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </nav>
    </header>
  );
};
