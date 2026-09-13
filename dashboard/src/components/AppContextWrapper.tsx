"use client";

import { useBreakPoint } from "@/hooks/useBreakPoints";
import { BreakpointContext } from "@/lib/breakpointContext";
import { ReactNode, useEffect, useState } from "react";

type AppWrapperProps = {
   children: ReactNode;
};

const AppContextWrapper = ({ children }: AppWrapperProps) => {
   const [isMounted, setIsMounted] = useState(false);
   const breakPoint = useBreakPoint();

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsMounted(true);
      }, 0);

      return () => clearTimeout(timer);
   }, []);

   useEffect(() => {
      if (isMounted) {
         console.log("Breakpoint:", breakPoint);
      }
   }, [breakPoint, isMounted]);

   if (!isMounted) return null;

   return <BreakpointContext value={breakPoint}>{children}</BreakpointContext>;
};

export default AppContextWrapper;
