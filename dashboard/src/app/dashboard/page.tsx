import ContentWrapper from "@/components/main/content/ContentWrapper";
import PageTitle from "@/components/main/PageTitle";

export default function DashboardPage() {
   return (
      <div className="w-full h-full">
         <PageTitle title="Dashboard" />
         <ContentWrapper>Home Page Content</ContentWrapper>
      </div>
   );
}
