"use client";

import { useEffect } from "react";

export default function ScrollRestoration() {
    useEffect(() => {
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }

        const saveScroll = () => {
            sessionStorage.setItem("scrollY", String(window.scrollY));

        // Simpan ID section yang terlihat
            const sections = document.querySelectorAll("section[id]");
            let activeSection = "";
            sections.forEach((sec) => {
                const rect = sec.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    activeSection = sec.id;
                }
            });
            if (activeSection) {
                sessionStorage.setItem("last-section", activeSection);
            }
        };

        window.addEventListener("scroll", saveScroll);
        window.addEventListener("beforeunload", saveScroll);

        const restoreScroll = () => {
            const lastSection = sessionStorage.getItem("last-section");
            if (lastSection) {
                const el = document.getElementById(lastSection);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                return;
                }
            }

            const storedY = sessionStorage.getItem("scrollY");
            if (storedY) {
                window.scrollTo(0, parseInt(storedY, 10));
            }
        };

        // Tunggu sampai Next.js hydration selesai
        const timeout = setTimeout(restoreScroll, 700);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("scroll", saveScroll);
            window.removeEventListener("beforeunload", saveScroll);
        };
    }, []);

    return null;
}
