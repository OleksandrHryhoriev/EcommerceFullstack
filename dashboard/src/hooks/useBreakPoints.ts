"use client";

import { BreakPoints } from "@/lib/breakpointContext";
import { useState, useEffect } from "react";

export const useBreakPoint = () => {
   const [breakPoint, setBreakPoint] = useState<BreakPoints>("mobile");

   useEffect(() => {
      const desktopQuery = window.matchMedia("(min-width: 1024px)");
      // const tabletQuery = window.matchMedia(
      //    "(min-width: 768px) and (max-width: 1024px)",
      // );

      const handleResize = () => {
         if (desktopQuery.matches) return setBreakPoint("desktop");
         setBreakPoint("mobile");
      };
      handleResize();

      desktopQuery.addEventListener("change", handleResize);

      return () => {
         desktopQuery.removeEventListener("change", handleResize);
      };
   }, []);

   return breakPoint;
};
