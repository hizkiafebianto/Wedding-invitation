"use client";

import { useEffect } from "react";

export default function ScrollRestoration() {
  useEffect(() => {
    // Pastikan manual mode supaya browser nggak override
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Simpan posisi sebelum refresh
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollY", String(window.scrollY));
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Setelah render selesai, restore posisi
    const storedScrollY = sessionStorage.getItem("scrollY");
    if (storedScrollY) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(storedScrollY, 10));
      }, 100); // kasih delay biar Next.js selesai render
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
}
