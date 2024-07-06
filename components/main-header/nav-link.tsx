"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import classes from "./nav-link.module.css";

interface Props {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: Props) {
  const path = usePathname();
  return (
    <>
      <Link
        className={
          path.startsWith(href)
            ? `${classes.link} ${classes.active}`
            : classes.link
        }
        href={href}
      >
        {children}
      </Link>
    </>
  );
}
