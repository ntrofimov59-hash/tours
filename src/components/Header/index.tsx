import type { Component } from "solid-js";

import styles from "./Header.module.scss";

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
    <header class={styles.root}>
      <div class={styles.container}>
        <a class={styles.logo} href="/">
          Logo
        </a>

        <nav aria-label="Main navigation">
          <ul class={styles.nav}>
            {links.map((link) => (
              <li class={styles.item}>
                <a
                  class={styles.link}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
