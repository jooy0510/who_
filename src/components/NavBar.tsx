"use client";

import Link from "next/link";
import React, { useState } from "react";

import cx from "classnames";
import styles from "./NavBar.module.scss";

interface Props {}
const NAV_MENU_LIST = [
  { title: "소개", href: "intro" },
  { title: "찬조신청", href: "support" },
  { title: "연습현황", href: "photos" },
];

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNav = () => setOpenNav(prev => !prev);

  return (
    <div className={styles.navBar}>
      <h1 className="hidden">스타일 테스트</h1>
      <header className={styles.header}>
        {/* <header className={styles.header}> */}
        <Link href={"/"}>
          <h2 className={styles.logoText}>WHO</h2>
        </Link>

        <ul className={cx("flex gap-12")}>
          {NAV_MENU_LIST.map((menu, index) => (
            <li key={index}>
              <Link href={menu.href}>
                <span className={location.pathname == menu.href ? "" : "opacity-60"}>{menu.title}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* <div onClick={handleOpenNav}>
          <GiHamburgerMenu></GiHamburgerMenu>
        </div> */}
      </header>
      {/* <div className={cx(styles.modalMask, openNav ? "flex" : "")}></div> */}

      {/* <nav className={cx(openNav ? "translate-x-full" : "translate-x-1/4", styles.navList)}>
        <ul>
          <li>
            <Link href="/intro">소개</Link>
          </li>
          <li>
            <Link href="/support">찬조신청</Link>
          </li>
          <li>
            <Link href="/photos">연습현황</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}
