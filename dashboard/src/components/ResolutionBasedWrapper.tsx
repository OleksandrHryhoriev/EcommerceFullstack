"use client";

import { BreakpointContext, BreakPoints } from "@/lib/breakpointContext";
import { ReactNode, useContext } from "react";

type ResolutionBasedRenderProps = {
   children: ReactNode;
   breakpoint: BreakPoints;
};

const ResolutionBasedWrapper = ({
   children,
   breakpoint,
}: ResolutionBasedRenderProps) => {
   const currentBreakpoint = useContext(BreakpointContext);

   return currentBreakpoint === breakpoint ? <>{children}</> : null;
};

export default ResolutionBasedWrapper;
