"use client";

import { useEffect } from "react";

const Counter = () => {
  useEffect(() => {
    const counterImg = document.createElement("img");
    counterImg.src = `https://profile-counter.deno.dev/gb7x9m2n8p4q1r5t3u6x/count.svg`;
    counterImg.style.display = "none";
    counterImg.style.position = "absolute";
    counterImg.style.left = "-9999px";
    counterImg.style.top = "-9999px";
    counterImg.style.width = "1px";
    counterImg.style.height = "1px";
    counterImg.style.opacity = "0";
    counterImg.alt = "";
    counterImg.setAttribute("aria-hidden", "true");

    document.body.appendChild(counterImg);

    return () => {
      if (document.body.contains(counterImg)) {
        document.body.removeChild(counterImg);
      }
    };
  }, []);

  return null;
};

export default Counter;
