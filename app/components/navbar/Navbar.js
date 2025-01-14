"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import CartDropdown from "./CartDropdown";

const NavBar = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  return (
    <>
      <div className="md:flex hidden" style={{ backgroundColor: "#eae4df" }}>
        <div className="px-[90px] max-[1024px]:px-[70px] max-w-[1444px] m-auto">
          <div className="flex justify-between">
            <Typography className={styles.HeadingTypoNavbarHome}>
              Subscribe to our newsletter -
              <Link
                href="mailto:braise@qodeinteractive.com"
                className="HoverTextNavbarHome"
              >
                braise@qodeinteractive.com
              </Link>
            </Typography>
            <div className="flex gap-2 TextLinksNavbarHome">
              <Link
                href="https://www.facebook.com/QodeInteractive/"
                className="HoverTextNavbarHome"
              >
                fb
              </Link>
              -
              <Link
                href="https://www.instagram.com/qodeinteractive/"
                className="HoverTextNavbarHome"
              >
                ig
              </Link>
              -
              <Link
                href="https://www.linkedin.com/company/qode-themes/"
                className="HoverTextNavbarHome"
              >
                in
              </Link>
              -
              <Link
                href="https://www.pinterest.com/qodeinteractive/"
                className="HoverTextNavbarHome"
              >
                p
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.navbarcontainer} z-50`}>
        <nav className="bg-transparent px-[90px] max-[1024px]:px-[70px] max-w-[1444px] m-auto">
          <div
            className="flex items-center justify-between"
            style={{
              padding: "47px 0 40px 0",
              borderBottom: "1px solid #eeedeb",
            }}
          >
            <div className="navbarlogocontainer flex items-center">
              <Link href="/" draggable={false} legacyBehavior>
                <a className={styles.navbar_logo}>
                  <Image
                    src="/assets/foodcompanylogo.png"
                    alt="food-blogs-logo"
                    layout="fill"
                    draggable={false}
                  />
                </a>
              </Link>
            </div>
            <div className="hidden md:flex items-end">
              <TextField
                id="standard-basic"
                variant="standard"
                type="search"
                placeholder="Search"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "#686868",
                    borderBottom: "1px solid #e0e0e0",
                  },
                  "& .Mui-focused": { backgroundColor: "transparent" },
                  "& .MuiInputBase-input:focus": {
                    backgroundColor: "transparent",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#595959",
                  },
                }}
              />
              <IconButton
                type="submit"
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  color: "#ffffff",
                  backgroundColor: "#e35640",
                  border: "1px solid #e35640",
                  "&:hover": {
                    color: "#e35640",
                    backgroundColor: "transparent",
                  },
                }}
              >
                <SearchRounded color="white" />
              </IconButton>
            </div>
            <Button
              className={`${styles.navbartogglerbtn} md:hidden ${
                expanded ? styles.navbartogglerbtnExpanded : ""
              }`}
              aria-controls="navbarScroll"
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
          </div>
        </nav>
        <nav className="bg-transparent px-[90px] max-[1024px]:px-[70px] max-w-[1444px] m-auto">
          <div
            className="flex items-center h-[60px]"
            style={{ borderBottom: "1px solid #eeedeb" }}
          >
            <div
              id="navbarScroll"
              className={`w-full bg-white absolute top-full left-0 px-3 pb-3 md:static md:px-0 md:pb-0 md:flex-row items-center flex-0 flex-col ${
                expanded ? "h-[192px]" : "h-0"
              } overflow-hidden md:flex md:h-auto transition-all duration-700 ease-in-out`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:mt-0 md:mb-0 gap-[10px] min-[991px]:gap-[32px] items-start mt-2.5 mb-2.5">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about-us", label: "About Us" },
                  { href: "/contact-us", label: "Contact Us" },
                  { href: "/blogs", label: "Blogs" },
                  { href: "/coming-soon", label: "Coming Soon" },
                ].map(({ href, label }) => (
                  <Link key={href} href={href} passHref legacyBehavior>
                    <a
                      className={`${styles.navlinks} ${
                        pathname === href ? styles.selected : ""
                      }`}
                      onClick={handleLinkClick}
                      draggable={false}
                    >
                      {label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:flex hidden">
              <CartDropdown />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
