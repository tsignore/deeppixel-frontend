"use client";
import { Container } from "@/shared/ui/Container/Container";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/shared/assets/images/logo.svg";
import styles from "./Header.module.scss";
import clsx from "clsx";
import SquiggleImage from "@/shared/assets/images/squiggle.svg";
import AngrySmileImage from "@/shared/assets/images/angrySmile.svg";
import { Button } from "@/shared/ui/Button/Button";
import MenuIcon from "@/shared/assets/images/menu.png";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container maxWidth="1280px">
      <header className={clsx(styles.Header, className)}>
        <a href="/">
          <Image className={styles.logoImage} src={Logo} alt="logo" />
        </a>
        <div className={styles.HeaderCenter}>
          <ul className={clsx(styles.menu, menuOpen && styles.menuOpen)}>
            <li>
              <Button
                size="small"
                className={styles.button}
                textColor="var(--text-secondary-color)"
              >
                <Image src={SquiggleImage} alt="Anime icon" />
                <p>Anime</p>
              </Button>
            </li>
            <li>
              <Button
                size="small"
                className={styles.button}
                textColor="var(--text-secondary-color)"
              >
                <Image src={AngrySmileImage} alt="Realism icon" />
                <p>Realism</p>
              </Button>
            </li>
          </ul>
        </div>
        <div className={styles.HeaderRight}>
          <Button
            size="small"
            textColor="var(--text-secondary-color)"
            className={clsx(styles.button, styles.loginButton)}
          >
            Login
          </Button>
          <Button
            size="small"
            rainbow
            className={clsx(styles.button, styles.signupButton)}
          >
            Sign up
          </Button>
          <Button
            onClick={() => setMenuOpen((prev) => !prev)}
            size="small"
            className={styles.menuButton}
          >
            <Image src={MenuIcon} alt="Menu icon" />
          </Button>
        </div>
      </header>
    </Container>
  );
};
