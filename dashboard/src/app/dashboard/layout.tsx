import Header from "@/components/header/Header";
import MainWrapper from "@/components/main/MainWrapper";
import Sidebar from "@/components/sidebar/Sidebar";

const AppLayout = ({ children }: LayoutProps<"/">) => {
   return (
      <div className="w-full h-full flex">
         <Sidebar />
         <div className="w-full flex-1 flex flex-col gap-2">
            <Header />
            <MainWrapper>{children}</MainWrapper>
         </div>
      </div>
   );
};

export default AppLayout;
