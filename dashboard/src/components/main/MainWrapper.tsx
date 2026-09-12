import { ReactNode } from "react";

type MainWrapperProps = {
   children: ReactNode;
};

const MainWrapper = ({ children }: MainWrapperProps) => {
   return <main className="flex-1 p-8">{children}</main>;
};

export default MainWrapper;
