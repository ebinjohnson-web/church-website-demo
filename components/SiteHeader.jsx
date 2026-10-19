"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { asset } from "../lib/site";
function NavLink({ href, className = "", children, ...props }) {
  const pathname = usePathname();
  const active =
    !href.includes("#") &&
    pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
  return (
    <Link
      href={href}
      className={className + (active ? " active is-active" : "")}
      aria-current={active ? "page" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 12);
    const key = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menuToggle")?.focus();
      }
    };
    const outside = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const resize = () => {
      if (innerWidth > 860) setOpen(false);
    };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("keydown", key);
    document.addEventListener("click", outside);
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", resize);
      document.removeEventListener("keydown", key);
      document.removeEventListener("click", outside);
    };
  }, []);
  return (
    <div ref={ref} className="header-mount">
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="nav-shell">
          <Link
            className="brand"
            href="/"
            aria-label="Grace Harbour Church home"
          >
            <span className="brand-mark">GH</span>
            <span className="brand-copy">
              <span className="brand-title">Grace Harbour Church</span>
              <span className="brand-subtitle">Riverside, Ontario</span>
            </span>
          </Link>
          <nav
            className={`site-nav${open ? " open" : ""}`}
            onClick={() => setOpen(false)}
            id="siteNav"
            aria-label="Primary"
          >
            <NavLink className="" href="/">
              Home
            </NavLink>
            <NavLink className="" href="/about">
              About
            </NavLink>
            <NavLink className="" href="/ministries">
              Ministries
            </NavLink>
            <NavLink className="" href="/sermons">
              Sermons
            </NavLink>
            <NavLink className="" href="/contact">
              Contact
            </NavLink>
          </nav>
          <div className="nav-cta">
            <NavLink className="button" href="/contact">
              Plan a Visit
            </NavLink>
            <button
              className="menu-toggle"
              id="menuToggle"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-controls="siteNav"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
