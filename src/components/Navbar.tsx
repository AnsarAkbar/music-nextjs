"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"} className="flex gap-x-6">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col gap-y-4">
              <HoveredLink href={"/courses"}>All Courses</HoveredLink>
              <HoveredLink href={"/courses"}>Basic Music Theory</HoveredLink>
              <HoveredLink href={"/courses"}>Advanced Composition</HoveredLink>
              <HoveredLink href={"/courses"}>Songwriting</HoveredLink>
              <HoveredLink href={"/courses"}>Music Composition</HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us" />
          </Link>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;