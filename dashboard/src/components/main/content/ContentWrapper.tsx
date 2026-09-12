import { ReactNode } from "react";

type ContentWrapperProps = {
   children: ReactNode;
};

const ContentWrapper = ({ children }: ContentWrapperProps) => {
   return (
      <div className="w-full min-h-100 p-5 bg-(--secondary-background)">
         {children}
      </div>
   );
};

export default ContentWrapper;
