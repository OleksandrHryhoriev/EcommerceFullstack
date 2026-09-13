import { createContext } from "react";

export type BreakPoints = "desktop" | "mobile";

export const BreakpointContext = createContext<BreakPoints>("mobile");
