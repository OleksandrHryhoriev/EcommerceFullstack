import AppContextWrapper from "@/components/AppContextWrapper";
import ResolutionBasedWrapper from "@/components/ResolutionBasedWrapper";
import Header from "@/components/header/Header";
import MainWrapper from "@/components/main/MainWrapper";
import Sidebar from "@/components/sidebar/Sidebar";

const AppLayout = ({ children }: LayoutProps<"/">) => {
   return (
      <AppContextWrapper>
         <div className="w-full h-full flex">
            <ResolutionBasedWrapper breakpoint="desktop">
               <Sidebar />
            </ResolutionBasedWrapper>
            <div className="w-full flex-1 flex flex-col gap-2">
               <Header />
               <MainWrapper>{children}</MainWrapper>
            </div>
         </div>
      </AppContextWrapper>
   );
};

export default AppLayout;
