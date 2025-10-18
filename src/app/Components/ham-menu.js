"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HamMenu = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <button
        className="cursor-pointer"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#417a11"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-align-justify-icon lucide-align-justify"
        >
          <path d="M3 12h18" />
          <path d="M3 18h18" />
          <path d="M3 6h18" />
        </svg>
      </button>

      {showMenu && (
        <motion.section
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ ease: "easeIn", duration: 0.2 }}
          className="flex flex-col absolute w-full items-center justify-center h-screen top-0 left-0 p-0 m-0 bg-black"
        >
          <div className="flex w-full justify-end absolute top-8 -right-12 items-center px-[10vw]  pb-3 m-0">
            <svg
              onClick={() => {
                setShowMenu(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#417a11"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
          <div className="flex flex-col self-center text-center heading gap-[3vw]">
            <Link href={"/"}>
              <motion.h1
                onClick={() => {
                  setShowMenu(false);
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut" }}
                className={
                  pathname === "/"
                    ? `duration-300 border-b-1 text-[#417a11] h3`
                    : `text-white hover:text-red-300 hover:scale-105 duration-300 h3`
                }
              >
                Inicio
              </motion.h1>
            </Link>
            <Link href={"/Servicios"}>
              <motion.h1
                onClick={() => {
                  setShowMenu(false);
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut" }}
                className={
                  pathname === "/Servicios"
                    ? `text-[#417a11] duration-300 border-b-1 h3`
                    : `text-white hover:text-red-300 hover:scale-105 duration-300 h3`
                }
              >
                Servicios
              </motion.h1>
            </Link>
            <Link href={"/contacto"}>
              <motion.h1
                onClick={() => {
                  setShowMenu(false);
                }}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut" }}
                className={
                  pathname === "/contacto"
                    ? `text-[#417a11] duration-300 border-b-1 h3`
                    : `text-white hover:text-red-300 hover:scale-105 duration-300 h3`
                }
              >
                Contacto
              </motion.h1>
            </Link>
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default HamMenu;
