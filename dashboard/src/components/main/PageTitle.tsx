import Breadcrumbs from "./Breadcrumbs";

type PageTitleProps = {
   title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
   return (
      <div className="w-full mb-5">
         <h2 className="text-2xl mb-2">{title}</h2>
         <Breadcrumbs />
      </div>
   );
};

export default PageTitle;
