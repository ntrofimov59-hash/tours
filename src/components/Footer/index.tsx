import type { Component } from "solid-js";

import styles from "./Footer.module.scss";

const links = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contacts", label: "Contacts" },
];

export const Footer: Component = () => {
  return (
    <footer class={styles.root}>
      <div class={styles.container}>
        <div class={styles.brand}>
          <span class={styles.copy}>
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        <nav aria-label="Footer navigation">
          <ul class={styles.nav}>
            {links.map((link) => (
              <li class={styles.item}>
                <a class={styles.link} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
